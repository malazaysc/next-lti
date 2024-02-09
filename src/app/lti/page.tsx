type LTIProps = {
    params: any;
    searchParams: {
        lis_person_name_full: string;
        context_title: string;
    };
}

export default function LTI(props: LTIProps) {
    const searchParams = props.searchParams
    const userName = searchParams.lis_person_name_full || 'Unknown User';
    const contextTitle = searchParams.context_title || 'Unknown Course';

    return (
        <div>
            <h1>Hello</h1>
            <h1>Welcome, {userName}!</h1>
            <p>You are accessing this tool from: {contextTitle}.</p>
        </div>
    );
}
