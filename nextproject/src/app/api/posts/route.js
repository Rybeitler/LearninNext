import { NextResponse } from "next/server"
import connect from '@/utils/db'
import Post from '@/models/Post'

export const GET = async (request) => {

    const url = new URL(request.url);
    const username = url.searchParams.get('username')

    try{
        await connect()
        //if there is a username fetch those, otherwise fetch all
        const posts = await Post.find(username && { username })

        return new NextResponse(JSON.stringify(posts), {status:200})
    }catch(err){
        return new NextResponse('Db error', {status:500})
    }

    
} 

export const POST = async (request) => {
    const body = await request.json();
    const newPost = new Post(body);

    try{
        await connect();

        await newPost.save()

        return new NextResponse("Post successful", { status: 201 });
    }catch(err){
        return new NextResponse('db error', {status:500})
    }
}