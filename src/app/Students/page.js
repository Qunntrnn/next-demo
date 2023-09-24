"use client";

import React, { useEffect, useState } from "react" ;
import { useRouter } from "next/navigation";
import { studentService } from "../services/student.service";
import { AppButton } from "../Components/app-button";
import { useDebounce } from "use-debounce";
import { AppPagination } from "../Components/app-pagination";


export default function Students() {
    const[searchResult, setSearchResult] = useState({
        data: [],
        total: 0,
    })
    const router = useRouter();
    const [filters, setFilters] = useState ({
        searchItem: "",
        gender:"",

    })

    const [searchTermDebounced] = useDebounce(filters.searchItem, 300);
    const [pagination, setPagination] = useState({
        itemsPerPage: 5,
        pageIndex : 0 ,
    })

    const createNewStudent  = () =>{
        router.push("/Students/Create");
    };

    const editStudent = (id) => {
        router.push(`/Students/${id}`)
    }



    const getGender = (value) => {
        if (value === "M") {
            return "male"
        }
        if(value === "F") {
            return "female";
        }
        return ""
    }

    const confirmDelete = (student) => {
        if(!window.confirm(`Are you sure to delete? "${student.id}"`)) {
            return ;
        }
        studentService.deleteStudent(student.id);
        alert("delete success")
        searchStudents();
    }

    const searchStudents = async () => {
        const result = await studentService.findStudent(filters, pagination);
        setSearchResult(result);
    }

    useEffect(() => {

        setPagination({
            ...pagination,
            pageIndex: 0,
        })
        
        searchStudents();
        
    },[filters.gender , searchTermDebounced])

    useEffect(() => {

        
        searchStudents();
        
    },[pagination.pageIndex])

    console.log("students", searchResult)
    
    return (
        <>
            <div className="text-2xl font-bold"> Students </div>
            <button className="border border-solid py-2 px-4 round-full border-black" onClick={createNewStudent}>Creat new student</button>
            <div>
                <div>
                    <div className="text-lg font-bold">Search</div>
                </div>

                <div>
                    <input name="searchItem" className="border" value={filters.searchItem} onChange={(e) => setFilters({
                        ...filters ,
                        searchItem: e.target.value
                    })}></input>
                </div>

                <div className="mt-2">
                    <label className="inline-block w-20">Gender</label>

                    <label htmlFor="rdMale">
                        <input name="gender" type="radio" id="rdAll" className="mr-2" value="" checked={filters.gender === ""} onChange={
                        (e) => {
                            setFilters({
                                ...filters,
                                gender: e.target.value
                            })
                        }
                      }  ></input>All
                    </label>

                    <label htmlFor="rdMale">
                        <input name="gender" type="radio" id="rdMale" className="mr-2" value="M" checked={filters.gender === "M"} onChange={
                        (e) => {
                            setFilters({
                                ...filters,
                                gender: e.target.value
                            })
                        }
                        }  ></input>Male
                     </label>

                    <label htmlFor="rdFemale" >
                    <input  name="gender" type="radio" id="rdFemale" className="mr-2" value="F" checked={filters.gender === "F"} onChange={
                        (e) => {
                            setFilters({
                                ...filters,
                                gender: e.target.value
                            })
                        }
                    } ></input>Female
                    </label>
                </div>
            
            </div>   
            <AppButton onClick={searchStudents}>search</AppButton>        
            <div>
                {searchResult.data.map((student) => (
                    <div key={student.id} className="border p-2 mt-2" >
                    <div  >name: {student.name}</div>
                    <div  >age: {student.age}</div>
                    <div >gender : {getGender(student.gender)}</div>
                    <div> 
                        <AppButton color={"error"} onClick={() => confirmDelete(student.id)}>Delete</AppButton>
                    </div>
                    
                    </div>
                ))}
                <AppPagination {...pagination} total={searchResult.total} setPageIndex={(newPageIndex) => setPagination({
                    ...pagination,
                    pageIndex: newPageIndex,
                })}>

                </AppPagination>
            </div>
        </>
    );
}