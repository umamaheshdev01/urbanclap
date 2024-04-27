import { NextResponse } from "next/server"



export const POST = async(req,res)=>{

    return NextResponse.json({msg:1},{status:200})
}
