"use client" ;
import { useState } from "react";
import { AppButton } from "../../Components/app-button";
import { router, useRouter } from "next/navigation";
import { studentService } from "../../services/student.service";


export default function CreateStudents() {
    const router = useRouter()
    const [student, setStudent] = useState({
        name : "",
        age : "",
        gender: "M",
    })

    const onSubmit = async (e) => {
        try {

        e.preventDefault();
        if (!student.name.trim()) {
            alert("please in put name");
            return;
        };

        if (!student.age.trim()) {
            alert("please in put age");
            return;
        };

        await studentService.createStudent(student);

        
        alert("Save success")
        router.push("/Students")
    } catch (e) {
        alert("save failed")
        console.error(e) ;
    }}


    return (
        <>
            <div className="text-2xl font-bold">Create a new Students </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" className="inline-block w-20">Name</label>
                    <input className="border " type="text" id="name" name="name" value={student.name} onChange={
                        (e) => {
                            setStudent({
                                ...student,
                                name: e.target.value
                            })
                        }
                    }></input>
                </div>

                <div className="mt-2">
                    <label htmlFor="age" className="inline-block w-20">Age</label>
                    <input className="border" type="number" id="age" name="age" value={student.age} onChange={
                        (e) => {
                            setStudent({
                                ...student,
                                age: e.target.value
                            })
                        }
                    }></input>
                </div>

                <div className="mt-2">
                    <label className="inline-block w-20">Gender</label>
                    <label htmlFor="rdMale">Male </label>
                    <input name="age" type="radio" id="rdMale" className="mr-2" value="M" checked={student.gender === "M"} onChange={
                        (e) => {
                            setStudent({
                                ...student,
                                gender: e.target.value
                            })
                        }
                    }  ></input>

                    <label htmlFor="rdFemale" >Female</label>
                    <input  name="age" type="radio" id="rdFemale" className="mr-2" value="F" checked={student.gender === "F"} onChange={
                        (e) => {
                            setStudent({
                                ...student,
                                gender: e.target.value
                            })
                        }
                    } ></input>
                </div>

                <AppButton type="submit" className="mt-2">Save </AppButton>
            </form>
        </>
    )
}