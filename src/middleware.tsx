import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    response.headers.set('Content-Security-Policy', "frame-ancestors 'self' https://canvas.instructure.com");
    return response;
}
 
