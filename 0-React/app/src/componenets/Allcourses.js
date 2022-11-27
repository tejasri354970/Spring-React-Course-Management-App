import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Course from "./Course";


const Allcourses = () =>{
    const [courses, setCourses] = useState([
        {title:"Java Course", description:"This is Advance java course"},
        {title:"Python Course", description:"This is ML course"},
        {title:"C++ Course", description:"This is DSA course"},
    ]); //Hook->
    return (
        <div>
            <h3>All Course</h3>
            <p>List of courses are as follows</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course course={item} />
                )) : "No course Found"
                
            }
        </div>
    );
}

export default Allcourses;