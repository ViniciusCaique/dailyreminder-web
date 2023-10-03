import { NextResponse } from 'next/server'
 

export function middleware(request) {
    if(!request.cookies.has('dailyToken'))
        return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
    matcher: [
        '/atividades/:path*',
        '/lembretes/:path*',
    ]
  }