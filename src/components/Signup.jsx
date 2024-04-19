import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-toastify/dist/ReactToastify.css";
import Otp from "./Otp";
import swal from "sweetalert";
import '../App.css';
function Signup() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    accountType: "",
    borkerId: "",
    nationalId: "",
  });
  const [toggleAgentForm, setAgentForm] = useState(false);

  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('new_vales', value);
    if(value =='agent'){
      setAgentForm(true);
    }  else {
      
      setAgentForm(false);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = {};

    if (!formData.firstname) {
      fieldErrors.firstname = "First name is required";
    }
    if (!formData.lastname) {
      fieldErrors.lastname = "Last name is required";
    }
    if (!formData.name) {
      fieldErrors.name = "User name is required";
    }
    if (!formData.email) {
      fieldErrors.email = "Email is required";
    }
    if (!formData.phoneNumber) {
      fieldErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.password) {
      fieldErrors.password = "Password is needed";
    }
    if (!formData.accountType) {
      fieldErrors.accountType = "Account type is required";
    }




    if (Object.keys(fieldErrors).length > 0) {
      const errorKeys = Object.keys(fieldErrors);
      window.scroll({
        top: 0,
        behavior: "auto",
      });

      toast.error(errorKeys.join(", "), {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVERURL}/users/register`, formData);
        localStorage.setItem("userId", response.data.data);
        if (response.data.message == "Success") {
          openPopup();
          // console.error("checkerror", error);
        }
        // navigate("/otp");
      } catch (error) {
        // console.error(error?.response?.data?.message, "checkerror");
        swal({
          title: 'Error',
          text: error?.response?.data?.message,
          icon: "error",
        });
      }
    }
  };

  return (
    <div
      class="font-sans antialiased w-screen min-h-screen flex items-center justify-center md:mt-[-10vh] overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <div
        class="w-full h-full sma3:h-auto "
        style={{
          paddingTop: "4rem",
          backgroundImage: "url('/images/bgimage3.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div class="container mx-auto h-full pt-[13.5rem] pb-[6.5rem]">
            <div class="w-5/6 h-1/2 lg:h-1/2 lg:w-1/2 mx-auto bg-slate-600 rounded shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg mt-10 ">
              <div class="py-8 px-8 text-yellow-500 text-2xl font-bold border-b border-grey-lighter">
                Register for a free account
              </div>

              <div class="py-8 px-8">
                <div class="flex mb-4">
                  <div class="w-1/2 mr-1">
                    <label class="block text-white text-sm font-bold mb-2">
                      First Name
                    </label>
                    <input
                      class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-white
"
                      name="firstname"
                      type="text"
                      placeholder="Your first name"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="w-1/2 ml-1">
                    <label class="block text-white text-sm font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-white
"
                      id="last_name"
                      type="text"
                      placeholder="Your last name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label class="block text-white text-sm font-bold mb-2">
                    Username
                  </label>
                  <input
                    class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-white
"
                    id="user_name"
                    type="text"
                    placeholder="Your user name"
                    name="name"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-white text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-white
"
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-white text-sm font-bold mb-2">
                    Phone
                  </label>
                  <PhoneInput
                    className="appearance-none border-b rounded w-full py-2 px-3 text-white"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData((state) => ({ ...state, phoneNumber: e }))

                    }
                    }
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-white text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-white"
                    id="password"
                    type="password"
                    placeholder="Your secure password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <p class="text-white text-xs mt-1">At least 6 characters</p>
                </div>
                {/* ==================================== Agent Form Start ======================== */}
                {toggleAgentForm && <div class="flex mb-4">
                  <div class="w-1/2 mr-1">
                    <label class="block text-white text-sm font-bold mb-2">
                      Broker Id
                    </label>
                    <input
                      class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-white
"
                      name="brokerId"
                      type="text"
                      placeholder="Your Broker id"
                      value={formData.brokerId}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="w-1/2 ml-1">
                    <label class="block text-white text-sm font-bold mb-2">
                      National Id
                    </label>
                    <input
                      class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-white
"
                      id="nationalId"
                      type="text"
                      placeholder="Your National id"
                      name="nationalId"
                      value={formData.nationalId}
                      onChange={handleChange}
                    />
                  </div>
                </div>}
                {/* ==================================== Agent Form End ======================== */}
                <div class="mb-4">
                  <label class="block text-white text-sm font-bold mb-2">
                    Choose an Account Type
                  </label>
                  <select
                    class="appearance-none bg-transparent border-b rounded w-full py-2 px-3 text-black
"
                    id="account_type"
                    name="accountType"
                    value={formData.chooseaccount}
                    onChange={handleChange}
                  >
                    <option value="">select your account type</option>
                    <option name="agent" value="agent">Agent</option>
                    {/* <option name="checking" value="checking">Agency</option> */}
                    <option name="credit" value="credit">Owner</option>
                    <option name="loan" value="loan">Buyer</option>
                  </select>
                </div>
                <div class="flex items-center justify-center mt-8  ">
                  <button
                    class="bg-yellow-600 w-[500px] hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="mt-4  font-semibold 2xla:text-3xl text-sm text-black text-center md:text-left lg:text-center">
                  Already have an account?
                  <a
                    className="text-yellow-600 ml-2 hover:underline hover:underline-offset-4 2xla:text-3xl"
                    href="/login"
                  >
                    SignIn
                  </a>
                  {""}
                </div>
                <ToastContainer position="fixed" />
              </div>
            </div>
          </div>
        </form>
      </div>
      {isPopupOpen && <Otp onClose={closePopup} />}
    </div>
  );
}
export default Signup;
