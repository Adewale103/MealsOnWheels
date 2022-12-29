import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      <div className="lg:pt-10 md:pt-10 pt-20">
        <h1 className="text-center font-bold text-primary lg:text-6xl md:text-4xl text-2xl  lg:py-20 md:py-15 py-8">
          All Restaurants
        </h1>
        <div>
          <Link to="/order">
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              className="card text-center h-full rounded-lg "
            >
              <div className="">
                <img
                  className="mx-auto"
                  width="70%"
                  src="./chicken.png"
                  alt="jghfu"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold py-2 text-primary">
                  Chicken Republic
                </h2>
                <p className="lg:text-xl text-md text-dark p-2">
                  Fancy something to eat? Order food from home from Chicken
                  Republic. providing our customers with tasty, everyday
                  affordable value meals in clean, cool ambient restaurants that
                  offer good customer service.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Service;
