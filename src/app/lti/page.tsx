'use client';
import { useSearchParams  } from "next/navigation"

type LTIProps = {
    params: any;
    searchParams: {
        lis_person_name_full: string;
        context_title: string;
    };
}

export default function LTI() {
    const params = useSearchParams();
    console.log(params);
    const userName = params.get('lis_person_name_full') || 'Unknown User';
    const contextTitle = params.get('context_title') || 'Unknown Course';

    // const allParams = params.entries();
    const allParams = params.toString();

    return (
        <div>
            <h1>Hello</h1>
            <h1>Welcome, {userName}!</h1>
            <p>You are accessing this tool from: {contextTitle}.</p>
            <p>Here are all the parameters: {allParams}</p>
        </div>
    );
}
