import InputField from "../components/InputBox";
import Button from "../components/mainButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Form } from "antd";

export default function Signup() {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = async () => {
    try {
      await form.validateFields(["firstname", "lastname", "email"]);
      setCurrentStep(2);
    } catch (error) {
      console.log("Validation error", error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      console.log("Success: ", values);
      // Add signup logic here
    } catch (error) {
      console.log("Submission error:", error);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex shadow-2xl">
        {/* Left card - Signup form */}
        <div className="bg-white w-[500px] h-[600px] rounded-l-2xl border border-gray-300 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-[#9f3247] text-center mb-6">
            Signup
          </h1>

          {/* Step indicator */}
          <div className="flex justify-center mb-6">
            <div
              className={`w-6 h-6 rounded-full ${currentStep === 1 ? "bg-[#9f3247]" : "bg-gray-300"
                } flex items-center justify-center text-white text-xs`}
            >
              1
            </div>
            <div
              className={`w-16 h-1 mt-2 ${currentStep === 2 ? "bg-[#9f3247]" : "bg-gray-300"
                }`}
            ></div>
            <div
              className={`w-6 h-6 rounded-full ${currentStep === 2 ? "bg-[#9f3247]" : "bg-gray-300"
                } flex items-center justify-center text-white text-xs`}
            >
              2
            </div>
          </div>

          <Form
            form={form}
            layout="vertical"
            className="w-[400px]"
            onFinish={handleSubmit}
            onFinishFailed={(errorInfo) => console.log("Fail:", errorInfo)}
          >
            {/* Step 1 - Personal Information */}
            <div className={currentStep === 1 ? 'block' : 'hidden'}>
              <h2 className="text-lg font-medium text-gray-700 mb-2">
                Personal Information
              </h2>

              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
                className="mb-4"
              >
                <InputField placeholder="Enter your first name" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
                className="mb-4"
              >
                <InputField placeholder="Enter your last name" />
              </Form.Item>

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

              <Button type="button" onClick={handleNext} className="w-full">
                {/* Next */}
                <p className="-mt-[4px]">Next</p>
              </Button>
            </div>

            {/* Step 2 - Account Security */}
            <div className={currentStep === 2 ? 'block' : 'hidden'}>
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Account Security
              </h2>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                  { min: 8, message: "Password must be at least 8 characters" },
                ]}
                className="mb-4"
              >
                <InputField type="password" placeholder="Enter your password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Passwords do not match"));
                    },
                  }),
                ]}
                className="mb-6"
              >
                <InputField type="password" placeholder="Confirm your password" />
              </Form.Item>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={handleBack}
                  className="bg-gray-300 text-gray-700 hover:bg-gray-400 flex-1"
                >
                  <p className="-mt-[4px]">Back</p>
                </Button>
                <Button type="submit" className="flex-1">
                  <p className="-mt-[4px]">Sign up</p>
                </Button>
              </div>
            </div>
          </Form>
        </div>

        {/* Right card - Welcome message */}
        <div className="rounded-r-2xl bg-gradient-to-r from-[#7b2334] to-[#9f3247] w-[500px] h-[600px] flex flex-col justify-center items-center text-center border border-gray-300 border-l-0">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to BidBuy</h1>
          <p className="text-white text-sm p-5 mb-4">
            "Join Bidbuyy today and unlock access to exclusive auctions worldwide! Create your account to start bidding on unique items, track your favorite auctions, and get personalized recommendations. Your next great deal is waiting - sign up now and begin your bidding adventure!"
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <p className="text-white text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-white hover:text-gray-200 hover:underline transition-colors duration-200 font-medium"
              >
                Signin here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
