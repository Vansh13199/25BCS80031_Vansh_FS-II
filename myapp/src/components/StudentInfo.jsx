import { useContext } from "react";
import { StudentContext } from "../context/studentContext";

function StudentInfo() {
  const {
    name,
    department,
    semester
  } = useContext(StudentContext);

  return (
    <div>
      <h2>Student Information</h2>

      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Semester: {semester}</p>
    </div>
  );
}

export default StudentInfo;