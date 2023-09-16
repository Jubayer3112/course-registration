import { useState } from "react";
import { useEffect } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    
    <div>
      <h1></h1>
    </div>
  );
};

export default Courses;
