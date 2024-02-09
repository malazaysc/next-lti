import { NextRequest, NextResponse } from "next/server";

/**
 * This is the main function that will be called by the LTI tool consumer.
 * 
 * It will receive the LTI launch parameters as a POST request.
 * It will then parse the parameters and display them in a simple HTML page.
 * Request payload content type is application/x-www-form-urlencoded
 * 
 * @param request 
 * @returns 
 */
export async function POST(request: NextRequest) {
    const dataText = await request.text();
    const data = new URLSearchParams(dataText);

    const userName = data.get('lis_person_name_full') || 'Unknown User';
    const contextTitle = data.get('context_title') || 'Unknown Course';

    const paramsObject = Object.fromEntries(data.entries());
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