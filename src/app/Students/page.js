"use client";

import React, { useEffect, useState } from "react" ;
import { useRouter } from "next/navigation";
import CreateStudents from "./Create/page";
import { studentService } from "../services/student.service";
import ReactDOM from 'react-dom';

export default function Students() {
    const[students, setStudent] =useState([]);
    const router = useRouter();
    
    const createNewStudent  = () =>{
        router.push("/Students/Create");
    };

    useEffect(() => {
        
        const loadStudent = async () => {
            const result = await studentService.findStudent();
            setStudent(result);
        }
        loadStudent();
    },[])

    console.log("students", students)
    
    return (
        <>
            <div className="text-2xl font-bold"> Students </div>
            <button className="border border-solid py-2 px-4 round-full border-black" onClick={createNewStudent}>Creat new student</button>
            <div>
                {students.map((student) => (
                    <div key={student.id} className="border p-2 mt-2" >
                    <div  >name: {student.name}</div>
                    <div  >age: {student.age}</div>
                    <div >gender : {student.gender}</div>
                    </div>
                ))}
            </div>
        </>
    );
}