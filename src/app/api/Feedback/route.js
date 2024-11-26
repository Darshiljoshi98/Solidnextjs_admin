import dbConn from "../../../../utils/dbConn";
import clientFeedBack from "./../../../../models/clientFeedBack";
import { NextResponse } from "next/server";



export async function POST(req, res) {
    try {    

        const body = await req.json();
        console.log(body)
        await dbConn();

        await clientFeedBack.create(body);
        try{
        // const data = await resend.emails.send({
        //     from: 'onboarding@resend.dev',
        //     to:'darshil2015@gmail.com',
        //     subject: 'Hello world',
        //     react: EmailTemplate({ firstName: body.username,phone:body.phone,subject:body.subject,email:body.email }),
        //   });
        }
        catch (e) {
            console.log(e)
            return NextResponse.json(
                { message: "Server error, please try again!" },
                { status: 500 }
            )
        }
        return NextResponse.json({
            message: "User add successfully!"
        }, {
            status: 200
        })
        

    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
