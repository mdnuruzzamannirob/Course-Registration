import PropTypes from "prop-types";

const CourseCart = ({ courseCartData, credit }) => {
  const totalPrice = courseCartData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  return (
    <div className="col-span-1 ">
      <div className="shadow-xl rounded-lg px-4 xl:px-6">
        <h3 className="xl:text-xl text-[#2F80ED] font-bold py-2 border-b md:border-b-2">
          <small className="">Credit Hour Remaining : {20 - credit} hr</small>
        </h3>
        <h3 className="md:text-xl lg:text-2xl font-bold px-1 py-2 ">
          <small>Course Name :</small>
        </h3>
        <ul className="list-decimal list-inside text-[#1C1B1B99] pb-4 border-b-2">
          {courseCartData.map((cartData) => {
            return (
              <li
                key={cartData.id}
                className="text-xs md:text-sm lg:text-base font-medium"
              >
                {cartData.title}
              </li>
            );
          })}
        </ul>
        <h3 className="md:text-xl lg:text-2xl font-bold px-1 py-2 md:py-4 border-b-2 text-[#1C1B1B99]">
          <small className="">Total Credit Hour : {credit}</small>
        </h3>
        <h3 className="md:text-xl lg:text-2xl font-bold px-1 py-2 md:py-4 text-[#1C1B1B99]">
          <small className="">Total Price : {Math.round(totalPrice)} USD</small>
        </h3>
      </div>
    </div>
  );
};

CourseCart.propTypes = {
  courseCartData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  credit: PropTypes.number.isRequired,
};

export default CourseCart;
