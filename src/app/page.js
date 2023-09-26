'use client';


import { router ,useRouter } from "next/navigation";
import { AppButton } from "./Components/app-button";

export default function Home() {
  const router = useRouter();
  const goToStudentsPage = () => {
    router.push('/Students');
  };

  return (
    <div className="bg-lime-300 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">Student Manager</h1>
        <div className="">
          <AppButton className="mr-2" color="blue" onClick={goToStudentsPage}>
            Go to Students
          </AppButton>
          <AppButton color="red" onClick={goToStudentsPage}>Test</AppButton>
        </div>
      </div>
    </div>
  );
}
