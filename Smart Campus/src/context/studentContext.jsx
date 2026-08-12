import { StudentContext } from "./studentContext";

const student = {
  name: "Riya",
  department: "Computer Science",
  semester: 6
};

export function StudentProvider({ children }) {
  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}