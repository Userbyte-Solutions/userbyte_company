import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    await addDoc(collection(db, 'contacts'), {
      name,
      email,
      company: company || '',
      service: service || '',
      message,
      read: false,
      reply: null,
      createdAt: serverTimestamp(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact save error:', err)
    return NextResponse.json({ success: false, error: 'Failed to save message' }, { status: 500 })
  }
}
