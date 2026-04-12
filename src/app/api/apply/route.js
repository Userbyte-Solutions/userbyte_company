import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, position, experience, message, cvUrl, cvName } = body

    if (!name || !email || !position) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    await addDoc(collection(db, 'applications'), {
      name,
      email,
      phone: phone || '',
      position,
      experience: experience || '',
      message: message || '',
      cvUrl: cvUrl || '',
      cvName: cvName || '',
      status: 'pending',
      createdAt: serverTimestamp(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Application save error:', err)
    return NextResponse.json({ success: false, error: 'Failed to save application' }, { status: 500 })
  }
}
