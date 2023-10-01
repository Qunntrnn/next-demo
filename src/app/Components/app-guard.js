"use client";

import { useAmp } from "next/amp";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppButton } from "./app-button";

export const AppGuard = ({children}) => {
    const router = useRouter();
    const signIn = () => {
        router.push("/sign-in")
      }
    const user = useSelector((rootState) => rootState.user);
    if (!user.id) {
        return <>
            <div>Authentication reqired . Please sign in</div>
            <AppButton className="mr-2" color="blue" onClick={signIn}>
            Sign In
          </AppButton> 
        </>
    }

    return <>{children}</>
}
