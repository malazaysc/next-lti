'use client';
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'

function LTIData() {
    const params = useSearchParams();
    const userName = params.get('lis_person_name_full') || 'Unknown User';
    const contextTitle = params.get('context_title') || 'Unknown Course';

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

export default function LTIPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LTIData />
        </Suspense>
    );
}
