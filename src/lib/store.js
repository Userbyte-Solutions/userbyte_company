// In-memory store (resets on server restart)
// Replace with a real DB (PostgreSQL, MongoDB) for production

export const store = {
  contacts: [],
  applications: [],
};

export function addContact(data) {
  store.contacts.unshift({ ...data, id: Date.now(), read: false, reply: null, createdAt: new Date().toISOString() });
}

export function markContactRead(id) {
  const c = store.contacts.find((c) => c.id === Number(id));
  if (c) c.read = true;
}

export function replyContact(id, reply) {
  const c = store.contacts.find((c) => c.id === Number(id));
  if (c) { c.reply = reply; c.read = true; }
}

export function addApplication(data) {
  store.applications.unshift({ ...data, id: Date.now(), status: "pending", createdAt: new Date().toISOString() });
}

export function updateApplicationStatus(id, status) {
  const a = store.applications.find((a) => a.id === Number(id));
  if (a) a.status = status;
}
