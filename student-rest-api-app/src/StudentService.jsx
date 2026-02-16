import axios from "axios";


const   VIEW_STD_API="http://localhost:8053/api/view";
const NEW_STD_API="http://localhost:8053/api/save";
const DEL_STD_API="http://localhost:8053/api/delete/";

class StudentService
{

    createStudent(student)
    {
        return axios.post(NEW_STD_API,student);
    }

    getAllStudent()
    {
        return axios.get(VIEW_STD_API);
        
    }

    deleteStudent(stdId)
    {
         console.log(stdId);
        console.log("Student service called");
        return axios.delete("http://localhost:8053/api/delete/"+stdId);
    }

    // deleteStudent(stdId) {
    //     console.log("Student service called with ID:", stdId);
    //     return axios.delete(`${DEL_STD_API}${stdId}`)
    //         .then(response => response.data)
    //         .catch(error => {
    //             console.error("Error deleting student:", error);
    //             throw error;
    //         });
    //}
 
}
export default new StudentService;