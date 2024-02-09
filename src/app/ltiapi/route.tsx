import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // This is an endpoint that will be hit by the canvas app.
    // It will parse the request and send back html with the user's name and course name.    
    // console.log(request);
    const params = request.nextUrl.searchParams;

    const userName = params.get('lis_person_name_full') || 'Unknown User';
    const contextTitle = params.get('context_title') || 'Unknown Course';

    const paramsObject = Object.fromEntries(params.entries());
    const paramsListHtml = Object.entries(paramsObject).map(([key, value]) => {
        return `<li>${key}: ${value}</li>`;
    }).join('');


    return new NextResponse(
        `
        <h1>Hello</h1>
        <h1>Welcome, ${userName}!</h1>
        <p>You are accessing this tool from: ${contextTitle}.</p>
        <p>Here are all the parameters:</p>
        <ul>
        ${paramsListHtml}
        </ul>
        `,
        {
            headers: {
                'Content-Type': 'text/html'
            }
        }
    );
}