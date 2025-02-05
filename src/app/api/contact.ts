import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
    const formData=await request.formData();
    
    const name = formData.get('Name')
    const email = formData.get('Email')
    const message = formData.get('message')
    try{
        const response = await fetch('https://formspree.io/f/xrbekwyo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
          });
          const data = await response.json();

          return{
                status:200,
                body:data
          }
    }catch(error){
        return{
            status:500,
            body:{error}
        }

    }
}