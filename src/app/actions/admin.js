'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  addContact,
  addApplication,
  replyContact,
  updateApplicationStatus,
  markContactRead,
} from '@/lib/store'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'userbyte@2025'

export async function loginAction(prevState, formData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const cookieStore = await cookies()
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 8,
      path: '/',
    })
    redirect('/admin')
  }
  return { error: 'Invalid username or password' }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  redirect('/admin/login')
}

export async function submitContactAction(prevState, formData) {
  await addContact({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company') || '',
    service: formData.get('service') || '',
    message: formData.get('message'),
  })
  return { success: true }
}

export async function replyContactAction(prevState, formData) {
  await replyContact(formData.get('id'), formData.get('reply'))
  return { success: true }
}

export async function markReadAction(prevState, formData) {
  await markContactRead(formData.get('id'))
  return { success: true }
}

export async function submitApplicationAction(prevState, formData) {
  await addApplication({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || '',
    position: formData.get('position'),
    experience: formData.get('experience') || '',
    message: formData.get('message') || '',
  })
  return { success: true }
}

export async function updateAppStatusAction(prevState, formData) {
  await updateApplicationStatus(formData.get('id'), formData.get('status'))
  return { success: true }
}
