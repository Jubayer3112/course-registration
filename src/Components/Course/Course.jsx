/* eslint-disable react/prop-types */
const Course = ({ course }) => {
  console.log(course);
  const { course_title, course_price, credit, course_description, course_img } =
    course;
  return (
    <div className="card bg-[#fff] p-5">
      <figure>
        <img className="w-full" src={course_img} />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title text-[#1C1B1B] text-xl font-bold py-2">
          {course_title}
        </h2>
        <p className="text-[#737272] text-lg leading-7 text-justify">{course_description}</p>
        <div>
          <p>{course_price}</p>
          <p>{credit}</p>
        </div>
        <button>Select</button>
      </div>
    </div>
  );
};

export default Course;
