import InputField from "../components/InputBox";
import CheckBox from "../components/checkBox";
import Button from "../components/mainButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { checkBackendConnection } from "../api/auth"
import { Form } from "antd";


export default function Login() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      console.log("Success: ", values);
    } catch (error) {
      console.log("Submision error: ", error);
    }
  }

  useEffect(() => {
    const verifyBackend = async () => {
      try {
        const data = await checkBackendConnection();
        console.log("Backend status: ", data);
      } catch (error) {
        console.error("Backend connection failed:", error);
        // Add user feedback here (e.g., toast notification)
      }
    };
    verifyBackend();
  }, []);


  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="bg-white w-[500px] h-[600px] rounded-l-2xl shadow-2xl border border-gray-300 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-[#9f3247] mb-10">
              Login
            </h1>
            <div className="w-[400px]">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                onFinishFailed={(errorInfo) => console.log("Fail:", errorInfo)}
              >
                <div className="">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Invalid email" },
                    ]}
                    className="mb-6"
                  >
                    <InputField placeholder="Enter your email" />
                  </Form.Item>
                </div>
                <div className="">
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: "Please enter your password!" },
                    ]}
                    className="mb-4"
                  >
                    <InputField type="password" placeholder="Enter your password" />
                  </Form.Item>
                </div>
                <div className="mt-6">
                  <CheckBox />
                </div>
              </Form>
              <div className="w-[400px] mt-5">
                <Button>
                  <p className="-mt-[6px]"><Link to="/dashboard">Login</Link></p>
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-r-2xl bg-gradient-to-r from-[#7b2334] to-[#9f3247] w-[500px] h-[600px] flex flex-col justify-center items-center text-center border border-gray-300 border-l-0 shadow-2xl">
            <h1 className="text-4xl font-bold text-white">
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
                    to="/register"
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
