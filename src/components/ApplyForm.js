'use client'

import { useState, useRef } from 'react'
import { storage } from '@/lib/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const ACCEPTED = '.pdf,.doc,.docx'
const MAX_MB = 5

export default function ApplyForm({ position }) {
  const [state, setState] = useState(null)
  const [pending, setPending] = useState(false)
  const [cvFile, setCvFile] = useState(null)
  const [cvError, setCvError] = useState('')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef(null)

  function validateFile(file) {
    if (!file) return 'Please select a CV file'
    const ext = file.name.split('.').pop().toLowerCase()
    if (!['pdf', 'doc', 'docx'].includes(ext)) return 'Only PDF, DOC, DOCX allowed'
    if (file.size > MAX_MB * 1024 * 1024) return `File must be under ${MAX_MB}MB`
    return ''
  }

  function handleFileChange(file) {
    const err = validateFile(file)
    setCvError(err)
    if (!err) setCvFile(file)
    else setCvFile(null)
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFileChange(file)
  }

  async function uploadCV() {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `cvs/${Date.now()}_${cvFile.name}`)
      const task = uploadBytesResumable(storageRef, cvFile)
      task.on('state_changed',
        (snap) => setUploadProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100)),
        reject,
        async () => resolve(await getDownloadURL(task.snapshot.ref))
      )
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const err = validateFile(cvFile)
    if (err) { setCvError(err); return }

    setPending(true)
    setUploadProgress(0)

    try {
      const cvUrl = await uploadCV()

      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone') || '',
          position: formData.get('position'),
          experience: formData.get('experience') || '',
          message: formData.get('message') || '',
          cvUrl,
          cvName: cvFile.name,
        }),
      })
      const result = await res.json()
      setState(result)
    } catch {
      setCvError('CV upload failed. Please try again.')
    } finally {
      setPending(false)
    }
  }

  if (state?.success) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
        <span className="text-4xl">🎉</span>
        <p className="text-white font-semibold mt-3">Application Submitted!</p>
        <p className="text-slate-400 text-sm mt-1">We&apos;ll review your application and get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="position" value={position} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" type="text" placeholder="Full Name" required
          className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
        <input name="email" type="email" placeholder="Email Address" required
          className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />
      </div>

      <input name="phone" type="tel" placeholder="Phone Number (optional)"
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />

      <input name="experience" type="text" placeholder="Years of Experience"
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" />

      {/* CV Drop Zone */}
      <div>
        <label className="text-slate-400 text-sm mb-2 block">CV / Resume <span className="text-red-400">*</span></label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
            dragging ? 'border-cyan-400 bg-cyan-500/10' :
            cvFile ? 'border-green-500/50 bg-green-500/5' :
            'border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/5'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED}
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files?.[0])}
          />

          {cvFile ? (
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">📄</span>
              <div className="text-left">
                <p className="text-green-400 text-sm font-medium">{cvFile.name}</p>
                <p className="text-slate-500 text-xs">{(cvFile.size / 1024).toFixed(0)} KB — ready to upload</p>
              </div>
              <button type="button" onClick={(e) => { e.stopPropagation(); setCvFile(null); setCvError('') }}
                className="ml-auto text-slate-500 hover:text-red-400 transition-colors text-lg">✕</button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-slate-400 text-sm">Drag & drop your CV here, or <span className="text-cyan-400">browse</span></p>
              <p className="text-slate-600 text-xs">PDF, DOC, DOCX — max {MAX_MB}MB</p>
            </div>
          )}
        </div>

        {/* Upload progress */}
        {pending && uploadProgress > 0 && uploadProgress < 100 && (
          <div className="mt-2">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Uploading CV...</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-1.5 rounded-full transition-all"
                style={{ width: `${uploadProgress}%` }} />
            </div>
          </div>
        )}

        {cvError && <p className="text-red-400 text-xs mt-1.5">⚠ {cvError}</p>}
      </div>

      <textarea name="message" rows={3} placeholder="Cover note (optional)"
        className="bg-[#0d1630] border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none" />

      <button type="submit" disabled={pending}
        className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2">
        {pending ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            {uploadProgress < 100 ? `Uploading CV ${uploadProgress}%...` : 'Submitting...'}
          </>
        ) : 'Submit Application'}
      </button>
    </form>
  )
}
