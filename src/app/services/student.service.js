let students = [];

if (typeof window !=="underfined") {
    students = JSON.parse (localStorage.getItem(students)) || [];
}

const getNewid = () => {
    return Math.max(...students.map((s) => s.id), 0) +1 ;
}

const findStudent = async (filters,pagination) => {
    let filteredStudents = students ;
    const searchItem = filters.searchItem?.trim().toLowerCase();
    if(filters.searchItem.trim()) {

        filteredStudents = filteredStudents.filter((s) => s.name.toLowerCase().includes(searchItem))

    }
    if (filters.gender) {
        filteredStudents = filteredStudents.filter((s) => s.gender === filters.gender)
    }
    const paginatedStudents = filteredStudents.filter((_, index) => {
        const startIndex = pagination.pageIndex * pagination.itemsPerPage;
        const endIndex = startIndex + pagination.itemsPerPage - 1;
        return index >= startIndex && index <= endIndex;
    })
    return {
        data : paginatedStudents,
        total: filteredStudents.length,
    };
}

const findStudentById = (id) => {
    console.log(students, id);
    return students.find((s) => s.id === id)
}

const createStudent = async (student) => {
    students.push({
        ...student,
        id: getNewid(),
    });
    localStorage.setItem("students", JSON.stringify(students));

}

const upDateStudent = (id,student) => {
    
}

const deleteStudent = (id) => {
    students = students.filter((s) => s.id !== id);
    localStorage.setItem("students", JSON.stringify(students));
}

export const studentService = {
    findStudent,
    findStudentById,
    createStudent,
    upDateStudent,
    deleteStudent,
}