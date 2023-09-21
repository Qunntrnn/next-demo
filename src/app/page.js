"use client" 
import { useRouter} from "next/navigation";
import { AppButton } from "./Components/app-button";

export default function Home() {
  const router = useRouter()
  const ShowAlert = () => {
    alert("Hello");
  }
  const goToStudents = () =>{
    router.push("/Students")
  }
  return (
    <main>
      <div className="text-3xl"></div>
      <AppButton onClick ={goToStudents} >Go To Students</AppButton>
      <AppButton onClick={ShowAlert}>ShowAlert</AppButton>
    </main>
  )
}