import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if (request.nextUrl.pathname.startsWith('/profile')) {
    if (!session) {
      const url = new URL(`/login`, request.url)
      return NextResponse.redirect(url)
    }
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
    if (session) {
      const url = new URL(`/`, request.url)
      console.log(session.sub)
      return NextResponse.redirect(url)
    }
  }

  if (request.nextUrl.pathname.startsWith('/register')) {
    if (session) {
      const url = new URL(`/`, request.url)
      console.log(session.sub)
      return NextResponse.redirect(url)
    }
  }

  if (request.nextUrl.pathname.endsWith('/')) {
    if (!session) {
      const url = new URL(`/login`, request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path', '/login:path', '/register:path', '/profile:path'],
}
