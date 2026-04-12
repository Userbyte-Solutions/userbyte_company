import { db } from './firebase'
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'

// ── Contacts ──────────────────────────────────────────

export async function addContact(data) {
  await addDoc(collection(db, 'contacts'), {
    ...data,
    read: false,
    reply: null,
    createdAt: serverTimestamp(),
  })
}

export async function getContacts() {
  const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
    createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
  }))
}

export async function markContactRead(id) {
  await updateDoc(doc(db, 'contacts', id), { read: true })
}

export async function replyContact(id, reply) {
  await updateDoc(doc(db, 'contacts', id), { reply, read: true })
}

// ── Applications ──────────────────────────────────────

export async function addApplication(data) {
  await addDoc(collection(db, 'applications'), {
    ...data,
    status: 'pending',
    createdAt: serverTimestamp(),
  })
}
export async function getApplications() {
  const q = query(collection(db, 'applications'), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
    createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
  }))
}

export async function updateApplicationStatus(id, status) {
  await updateDoc(doc(db, 'applications', id), { status })
}
