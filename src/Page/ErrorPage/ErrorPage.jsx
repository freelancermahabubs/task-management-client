import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import ErrorMessage from "../../assets/Group185.png";

const ErrorPage = () => {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-center">
        <BsArrowLeft className="text-3xl" />
        <Link
          to="/"
          className="btn text-3xl font-semibold header-text text-white text-center "
        >
          Back to home
        </Link>
      </div>
      <div className="lg:my-8  lg:mx-80">
        <img src={ErrorMessage} alt="" />
      </div>
    </section>
  );
};

export default ErrorPage;
