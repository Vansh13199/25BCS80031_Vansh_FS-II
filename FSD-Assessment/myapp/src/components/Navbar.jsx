import useUser from "../context/useUser";

function Navbar({ enrolledCount }) {

    const user = useUser();

    return (
        <div>
            <h1>SKILLNEST - ONLINE LEARNING PLATFORM</h1>
            <h3>Welcome, {user.name}</h3>
            <p>
                Program: {user.program}
            </p>
            <h4>
                Enrolled: {enrolledCount} courses
            </h4>
            <hr />
        </div>
    );
}

export default Navbar;