import { useContext } from "react";
import { StudentContext } from "../context/studentContext";

function Header({ savedCount }) {
    const { name } = useContext(StudentContext);

    return (
        <header>
            <h1>SMART CAMPUS EVENT DASHBOARD</h1>
            <h2>Welcome, {name}!</h2>
            <p>Bookmarked events: {savedCount}</p>
        </header>
    );
}
export default Header;