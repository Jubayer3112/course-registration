/* eslint-disable react/prop-types */
const Cart = ({ selectedItem, credit, remainCredit, total }) => {
  console.log(selectedItem);
  return (
    <div className="card lg:w-[1180px] w-full card-compact bg-white p-4 sticky top-0">
      <div className="card-body">
        <h1 className="text-[#2F80ED] text-2xl font-bold">
          Credit Hour Remaining {remainCredit} hr
        </h1>
        <hr />
        <h1 className=" text-2xl font-bold">Course Name</h1>
        {selectedItem.map((selected, index) => (
          <p key={selected.id} className="text-[#737272] text-lg">
            {index + 1} {selected.course_title}
          </p>
        ))}

        <hr />
        <h1 className="text-[#474747] text-xl font-semibold">
          Total Credit Hour : {credit}
        </h1>
        <hr />
        <h1 className="text-[#474747] text-xl font-bold">
          Total Price : {total} USD
        </h1>
      </div>
    </div>
  );
};

export default Cart;
