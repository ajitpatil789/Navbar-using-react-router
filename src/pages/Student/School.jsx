import React from "react";
import CustomNavbar from "../Navbar";

function School({ name, location, age }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Age: {age}</p>
    </>
  );
}

export default function StudentInfo() {
  const students = [
    { name: "Ajit", location: "Kolhapur", age: 28 },
    { name: "Vihaan", location: "Kolhapur", age: 28 },
    { name: "Sneha", location: "Kolhapur", age: 28 },
  ];

  return (
    <div>
      <CustomNavbar />
      {students.map((stud, index) => (
        <School
          key={index}
          name={stud.name}
          age={stud.age}
          location={stud.location}
        />
      ))}
    </div>
  );
}
