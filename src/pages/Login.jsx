import InputField from "../components/InputBox";
import CheckBox from "../components/checkBox";
import Button from "../components/mainButton";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="flex justify-center items-center p-15">
          <div className="bg-white w-[500px] h-120 rounded-l-lg">
            <h1 className="text-4xl font-bold text-[#9f3247] pl-13 pt-10">
              Login
            </h1>
            <div className="mt-8 ml-13">
              <label htmlFor="" className="text-gray-600">
                Email *
              </label>
              <InputField />
            </div>
            <div className="mt-6 ml-13">
              <label htmlFor="" className="text-gray-600">
                Password *
              </label>
              <InputField />
            </div>
            <div className="mt-6 ml-13">
              <CheckBox />
            </div>
            <div className="w-[400px] ml-13 mt-5">
              <Button>
                <p className="-mt-[6px]">Login</p>
              </Button>
            </div>
          </div>
          <div className="rounded-r-lg bg-gradient-to-r from-[#7b2334] to-[#9f3247] w-[500px] h-120 flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mt-40">
              Welcome Back!
            </h1>
            <p className="text-white text-sm p-5">
              "Welcome back! We're thrilled to see you again. Log in to Bidbuyy
              and resume your journey into the world of exclusive auctions. Your
              next winning bid could be just a click away. Happy bidding!"
            </p>
            <div className="mt-2 text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <p className="text-white text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-white hover:text-gray-200 hover:underline transition-colors duration-200 font-medium"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
