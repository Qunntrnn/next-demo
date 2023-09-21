let students = [];

if (typeof window !=="underfined") {
    students = JSON.parse(localStorage.getItem(students)) || [];
}

const findStudent = async () => {
    return students;
}

const findStudentById = (id) => {
    alert("findStudentById")
}

const createStudent = async (student) => {
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

}

const upDateStudent = (id, student) => {
    alert("updatesudent")
}

const deleteStudent = (id) => {
    alert("deleteStudent")
}

export const studentService = {
    findStudent,
    findStudentById,
    createStudent,
    upDateStudent,
    deleteStudent,
}