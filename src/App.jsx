
import { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sumit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" }
  ]);

  function deleteStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

  return (
    <div>
      <h1>Student Management</h1>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <p>
              {student.name}{" "}
              <button onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}
