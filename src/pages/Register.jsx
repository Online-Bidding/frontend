import InputField from "../components/InputBox";
import Button from "../components/mainButton";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [currentStep, setCurrentStep] = useState(1); // Track current step

  const handleNext = () => {
    // Basic validation before proceeding
    if (name && username && email) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="flex justify-center items-center p-1">
          <div className="bg-white w-[500px] h-160 rounded-l-lg">
            <h1 className="text-4xl font-bold text-[#9f3247] pl-13 pt-10">
              Signup
            </h1>
            
            {/* Step indicator */}
            <div className="flex justify-center mt-4 mb-8">
              <div className={`w-6 h-6 rounded-full ${currentStep === 1 ? 'bg-[#9f3247]' : 'bg-gray-300'} flex items-center justify-center text-white text-xs`}>1</div>
              <div className={`w-16 h-1 mt-2 ${currentStep === 2 ? 'bg-[#9f3247]' : 'bg-gray-300'}`}></div>
              <div className={`w-6 h-6 rounded-full ${currentStep === 2 ? 'bg-[#9f3247]' : 'bg-gray-300'} flex items-center justify-center text-white text-xs`}>2</div>
            </div>

            {currentStep === 1 ? (
              /* Personal Information Section */
              <div className="mt-4 ml-13">
                <h2 className="text-lg font-medium text-gray-700 mb-6">Personal Information</h2>
                
                <div className="mb-6">
                  <label htmlFor="" className="text-gray-600">
                    Name *
                  </label>
                  <InputField 
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="" className="text-gray-600">
                    Username *
                  </label>
                  <InputField 
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="" className="text-gray-600">
                    Email *
                  </label>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="w-[400px] mt-8">
                  <Button onClick={handleNext}>
                    <p className="-mt-[6px]">Next</p>
                  </Button>
                </div>
              </div>
            ) : (
              /* Password Section */
              <div className="mt-4 ml-13">
                <h2 className="text-lg font-medium text-gray-700 mb-6">Account Security</h2>
                
                <div className="mb-6">
                  <label htmlFor="" className="text-gray-600">
                    Password *
                  </label>
                  <InputField
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="" className="text-gray-600">
                    Confirm Password *
                  </label>
                  <InputField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-4 w-[400px]">
                  <Button 
                    onClick={handleBack}
                    className="bg-gray-300 text-gray-700 hover:bg-gray-400"
                  >
                    <p className="-mt-[6px]">Back</p>
                  </Button>
                  <Button type="submit">
                    <p className="-mt-[6px]">
                      <Link to="/login">Sign Up</Link>
                    </p>
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Right side remains unchanged */}
          <div className="rounded-r-lg bg-gradient-to-r from-[#7b2334] to-[#9f3247] w-[500px] h-160 flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mt-40">
              Welcome to BidBuy
            </h1>
            <p className="text-white text-sm p-5">
              "Join Bidbuyy today and unlock access to exclusive auctions
              worldwide! Create your account to start bidding on unique items,
              track your favorite auctions, and get personalized
              recommendations. Your next great deal is waiting - sign up now and
              begin your bidding adventure!"
            </p>
            <div className="mt-2 text-center">
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
      </div>
    </div>
  );
}