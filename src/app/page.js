'use client';


import { router ,useRouter } from "next/navigation";
import { AppButton } from "./Components/app-button";

export default function Home() {
  const router = useRouter();
  const goToStudentsPage = () => {
    router.push('/Students');
  };

  return (
    <main className="">
      <div className="">
        <h1 className="">Studentd Manager</h1>
        <div className="">
          <AppButton className="mr-2" color="blue" onClick={goToStudentsPage}>
            Go to Students
          </AppButton>
          <AppButton color="red" onClick={goToStudentsPage}>Test</AppButton>
        </div>
      </div>
    </main>
  );
}
