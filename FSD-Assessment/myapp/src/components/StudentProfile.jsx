// import { useState } from "react";
// function StudentProfile({ user }) {
//     const [enrolledCourses, setEnrolledCourses] = useState(0)



//   return (
//     <div>
//       <h2>Student Details</h2>
//       <p>
//         <b>Name:</b> {user.name}
//       </p>
//       <p>
//         <b>Email:</b> {user.email}
//       </p>
//       <p>
//         <b>Program:</b> {user.program}
//       </p>
//       <p>
//         <b>Enrolled Courses:</b> {enrolledCourses}
//       </p>
//       <p>React Basics     ₹999  <button onClick={() => {setEnrolledCourses(enrolledCourses + 1)}}>Enroll</button></p>
//       <p>Node.js Essentials ₹1,299 <button onClick={() => {setEnrolledCourses(enrolledCourses + 1)}}>Enroll</button></p>
//       <p>UI/UX Design     ₹1,499 <button onClick={() => {setEnrolledCourses(enrolledCourses + 1)}}>Enroll</button></p>    
//     </div>
//   );
// }

// export default StudentProfile;
import useUser from "../context/useUser";
import { useState } from "react";

function StudentProfile() {

  const user = useUser();
  const [enrolledCourses, setEnrolledCourses] = useState(0);

  return (
    <div>
      <h2>Student Details</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Program:</b> {user.program}</p>
      <p>
        <b>Enrolled Courses:</b> {enrolledCourses}
       </p>
      <p>React Basics     ₹999  <button onClick={() => {setEnrolledCourses(enrolledCourses + 1)}}>Enroll</button></p>
       <p>Node.js Essentials ₹1,299 <button onClick={() => {setEnrolledCourses(enrolledCourses + 1)}}>Enroll</button></p>
       <p>UI/UX Design     ₹1,499 <button onClick={() => {setEnrolledCourses(enrolledCourses + 1)}}>Enroll</button></p>  
    </div>
  );
}

export default StudentProfile;