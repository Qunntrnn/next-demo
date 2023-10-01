'use client';

import { useSelector } from "react-redux";
import { router ,useRouter } from "next/navigation";
import { AppButton } from "./Components/app-button";


export default function Home() {
  const router = useRouter();
  const user = useSelector((rootState) => rootState.user);
  const goToStudentsPage = () => {
    router.push('/Students');
  };

  const signIn = () => {
    router.push("/sign-in")
  }

  const register = () => {
    router.push("/register")
  }

  return (
    <div className="bg-lime-300 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">Student Manager</h1>
        {!user.id && (<>
          <AppButton className="mr-2" color="blue" onClick={signIn}>
            Sign In
          </AppButton>

          <AppButton className="mr-2" color="blue" onClick={register}>
            Register
          </AppButton>
        </> )};

        {!!user.id && (<>
          <div>Hello, {user.displayName}</div>
          <AppButton className="mr-2" color="blue" onClick={signOut}>
            Sign out
          </AppButton>
        </> )}

        <div className="">
          <AppButton className="mr-2" color="blue" onClick={goToStudentsPage}>
            Go to Students
          </AppButton>

          
         
        </div>
      </div>
    </div>
  );
}
