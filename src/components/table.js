import { useState } from "react";
import './table.css';

function Studentdetails(){
    const [studentId, setStudentId] = useState("S-001");
    const [studentname, setStudentname] = useState("Adithya");
    const [address, setAddress] = useState("49/99,kothapeta,rayachoti");
    const [coursename, setCoursename] = useState("React");

    return(
        <>
        <table className="table">
            <thead className="table_header">
                <tr>
                    <th colSpan ="4" className="title"><h1>Student Information</h1></th>
                </tr>
                <tr>
                    <th>studentId</th>
                    <th>studentname</th>
                    <th>address</th>
                    <th>coursename</th>
                </tr>
            </thead>
            <tbody className ="table_body">
                <tr>
                    <td>{studentId}</td>
                    <td>{studentname}</td>
                    <td>{address}</td>
                    <td>{coursename}</td>
                </tr>
                <tr>
                    <td><input type="text"id="sid" /></td>
                    <td><input type="text"id="sname" /></td>
                    <td><input type="text"id="saddr" /></td>
                    <td><input type="text"id="scour" /></td>
                </tr>
                <tr>
                    <td colSpan="4">
                        <button type="button"className="butt" onClick ={()=> {
                            setStudentId(document.getElementById("sid").value);
                            setStudentname(document.getElementById("sname").value);
                            setAddress(document.getElementById("saddr").value);
                            setCoursename(document.getElementById("scour").value);
                        }}>update</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
};
export default Studentdetails;