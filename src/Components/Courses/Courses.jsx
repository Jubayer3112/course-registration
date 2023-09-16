/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";

const Courses = ({selectHandle}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <Course
          key={courses.id}
          course={course}
          selectHandle={selectHandle}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
