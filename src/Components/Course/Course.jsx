/* eslint-disable react/prop-types */
import doller from "../../assets/dollar-sign 1.png";
import dcredit from "../../assets/Frame.png";
const Course = ({ course, selectHandle }) => {
  console.log(course);
  const { course_title, course_price, credit, course_description, course_img } =
    course;
  return (
    <div className="card bg-[#fff] p-5 space-y-4">
      <figure>
        <img className="w-full" src={course_img} />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title text-[#1C1B1B] text-xl font-bold ">
          {course_title}
        </h2>
        <p className="text-[#737272] text-lg leading-7 text-justif">
          {course_description}
        </p>
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center flex-1 ">
            <img className=" mr-4" src={doller} alt="" />
            <span className="flex-1 ">Price: {course_price}</span>
          </div>
          <div className="flex items-center flex-1 ">
            <img className="ml-5 mr-4" src={dcredit} alt="" />
            <span className="flex-1 ">Credit: {credit}</span>
          </div>
        </div>
        <button
          onClick={() => selectHandle(course)}
          className="bg-[#2F80ED] text-white py-3 text-xl font-semibold rounded-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Course;
