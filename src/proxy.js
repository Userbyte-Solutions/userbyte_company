import { NextResponse } from 'next/server'

export function proxy(request) {
  const session = request.cookies.get('admin_session')
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
