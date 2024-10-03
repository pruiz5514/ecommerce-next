"use client"
import LogoutButton from "@/components/UI/LogoutButton/LogoutButton"
import { useSession } from "next-auth/react";

const Dashboard = ()=>{
    const { data: session, status } = useSession();
    return(
        
        <>
            <div>oe</div>
            <pre>
                <code>{JSON.stringify(session, null, 2)}</code>
            </pre>
            <LogoutButton/>
        </>
    )
}

export default Dashboard