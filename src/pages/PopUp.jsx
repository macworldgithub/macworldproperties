import React from "react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import {
  FaCross,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const PopUp = () => {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState("");

  const HandleSubscribeModal = () => {
    setOpenModal(false);
    localStorage.setItem("visited", true);
  };

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Proceed with form submission
    axios
      .post(`${process.env.REACT_APP_SERVERURL}/users/news-letter-signup`, {
        email: email,
      })
      .then((response) => {
        setEmail("");
        toast.success("Successfully Subscribed");
      })
      .catch((error) => {
        console.log("Error:", error.response.data);
        toast.error(error.message);
      });
  };
  return (
    <div
      className={`w-[100vw] h-[100vh] flex justify-center items-center absolute z-[99999] bg-black/30 backdrop-blur-sm ${
        openModal ? "" : "hidden"
      }`}
    >
      <ToastContainer />
      <div className="w-[max] h-[max] bg-black rounded p-5 relative">
        <div
          onClick={HandleSubscribeModal}
          className=" absolute top-[-8%] right-[-7%] z-[9999999999] "
        >
          <MdCancel color="black" size={30} />
        </div>
        <div className="text-center flex flex-col justify-center items-center gap-5">
          <h1 className="text-white font-bold">
            Welocome to Macworld Properties
          </h1>
          <h1 className="text-white text-[12px]">
            Subscribe To Get a Exclusive Welcome discount code.
          </h1>
          <div
            id="seprator"
            className="w-[100%] h-[1px] bg-white my-[5px]"
          ></div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="youremail@email.com"
              className="rounded p-2 pl-10 w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="absolute inset-y-0 left-[50px] flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.94 3.66A2 2 0 014.66 3h10.68a2 2 0 011.72.66l.1.1a2 2 0 01.64 1.42v10.64a2 2 0 01-.64 1.42l-.1.1a2 2 0 01-1.42.64H4.66a2 2 0 01-1.42-.64l-.1-.1a2 2 0 01-.64-1.42V5.18a2 2 0 01.64-1.42zM4.5 4l5 4 5-4H4.5z" />
              </svg>
            </span>
            <button
              onClick={handleSubmit}
              className="bg-[#DFAF09] text-black w-[100%] h-[10%] p-2 rounded"
            >
              Subscribe
            </button>
          </div>
          <h1 className="text-white text-[10px]">
            Follow us to catch the latest promotions
          </h1>

          <div className="flex gap-1">
            <FaFacebook color="white" />
            <FaInstagram color="white" />
            <FaTwitter color="white" />
            <FaLinkedinIn color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
