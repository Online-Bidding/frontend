import InputField from "../components/InputBox";
import CheckBox from "../components/checkBox";
import Button from "../components/mainButton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkBackendConnection, loginUser } from "../api/auth"
import { Form, Alert } from "antd";

export default function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // console.log("Login attempt with:", values);

      // Call the login API
      const data = await loginUser({
        email: values.email,
        password: values.password
      });

      // console.log("Login successful:", data);
      // console.log("Token received:", data.token);

      if (data.token) {
        setSuccess("Login successful! Redirecting...");

        // Store token based on remember me preference
        if (rememberMe) {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('userEmail', values.email);
        } else {
          sessionStorage.setItem('authToken', data.token);
          sessionStorage.setItem('userEmail', values.email);
        }

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      }
    } catch (error) {
      console.log("Login error:", error);

      // Extract error message
      let errorMessage = "Login failed. Please check your credentials.";

      if (error.message) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      // Handle specific error cases
      if (error.status === 401) {
        errorMessage = "Invalid email or password. Please try again.";
      } else if (error.status === 403) {
        errorMessage = "Account is disabled. Please contact support.";
      } else if (error.status === 0) {
        errorMessage = "Cannot connect to server. Please check your internet connection.";
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleRememberMeChange = (checked) => {
    setRememberMe(checked);
  };

  useEffect(() => {
    const verifyBackend = async () => {
      try {
        const data = await checkBackendConnection();
        console.log("Backend status:", data);
      } catch (error) {
        console.error("Backend connection failed:", error);
        setError("Cannot connect to server. Please try again later.");
      }
    };
    verifyBackend();

    // Check if user is already logged in
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    if (token) {
      // Optionally verify token validity with backend
      navigate("/dashboard");
      // console.log(token);
    }
  }, [navigate]);


  return (
    
    <div>
      {console.log(sessionStorage.getItem("authEmail"))}
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="bg-white w-[500px] h-[600px] rounded-l-2xl shadow-2xl border border-gray-300 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-[#9f3247] mb-10">
              Login
            </h1>

            {/* Error Alert */}
            {error && (
              <div className="w-[400px] mb-4">
                <Alert
                  message={error}
                  type="error"
                  showIcon
                  closable
                  onClose={() => setError(null)}
                />
              </div>
            )}

            {/* Success Alert */}
            {success && (
              <div className="w-[400px] mb-4">
                <Alert
                  message={success}
                  type="success"
                  showIcon
                />
              </div>
            )}

            <div className="w-[400px]">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                onFinishFailed={(errorInfo) => console.log("Validation failed:", errorInfo)}
              >
                <div className="">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Invalid email format" },
                    ]}
                    className="mb-6"
                  >
                    <InputField placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: "Please enter your password!" },
                      { min: 1, message: "Password cannot be empty" },
                    ]}
                    className="mb-4"
                  >
                    <InputField type="password" placeholder="Enter your password" />
                  </Form.Item>
                </div>
                <div className="mt-4 mb-4">
                  <CheckBox
                    onChange={handleRememberMeChange}
                    checked={rememberMe}
                  />
                </div>
                <Form.Item className="mb-0">
                  <Button
                    type="submit"
                    htmlType="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    <p className="-mt-[6px]">
                      {loading ? "Logging in..." : "Login"}
                    </p>
                  </Button>
                </Form.Item>
              </Form>

              <div className="text-center mt-4">
                <Link
                  to="/forgot-password"
                  className="text-[#9f3247] hover:text-[#7b2334] text-sm hover:underline"
                >
                  Forgot your password?
                </Link>
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
