import { NextResponse } from 'next/server'


//echo defined params
// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url)
//     const name = searchParams.get('name')
//     const instrument = searchParams.get('instrument')
//     return NextResponse.json({name, instrument})
// }

//echo any params
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const obj = Object.fromEntries(searchParams.entries())
    return NextResponse.json(obj)
}
