import { NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production' ? ['https://www.yoursite.com', 'https://yoursite.com']
                                        :['http://localhost:3000', ]

export function middleware(request:Request){

    //alternate ways to only run on certain routes, config seems simpler
    // const regex = new RegExp('/api/*')
    // if(regex.test(request.url)){

    // }
    // if(request.url.includes('/api/')){

    // }

    const origin = request.headers.get('origin')

    if (origin && !allowedOrigins.includes(origin) /*|| !origin (block postman ect)*/){
        return new NextResponse(null, {
            status:400,
            statusText:'Bad Request!',
            headers:{
                'Content-type': 'text/plain'
            }
        })
    }

    console.log("middleware")
    console.log(request.method)
    console.log(request.url)

    console.log(origin)

    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*'
}