import { Link } from "react-router-dom";
import { NavigationScreen } from "../model/routes";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Pain Location Selector</h1>
      <div className="flex flex-col md:flex-row justify-between items-center w-3/4 md:w-1/2">
        <Link
          className="bg-blue-600 border-2 w-full md:w-52 text-center border-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          to={NavigationScreen.Abdomen}
        >
          Abdominal Selection
        </Link>
        <Link
          className="border-2 mt-3 md:mt-0 w-full md:w-52 text-center text-blue-600 font-bold hover:text-white hover:bg-blue-600 border-blue-600 px-4 py-2 rounded-md"
          to={NavigationScreen.Finger}
        >
          Finger Selection
        </Link>
      </div>
    </>
  );
};

export default Home;
