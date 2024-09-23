import React, { useContext, useState, useEffect } from "react";
import { Store } from "../../context/store";
import { ReactComponent as Cross } from "../../assets/svgs/cross.svg";
import swal from "sweetalert";
import axios from "axios";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { type } from "@testing-library/user-event/dist/type";

const Imageupload = ({ images, handleFirebaseUpload }) => {
  return (
    <div className="mt-2 mb-7">
      <form>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => { handleFirebaseUpload(e.target.files); }
          }
          className="hidden"
          id="imageInput"
        />
        <label
          htmlFor="imageInput"
          className="bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-4 rounded cursor-pointer"
        >
          Select Images
        </label>
      </form>
      <div className="mt-4">
        <h2>Selected Images:</h2>
        <div className="flex flex-wrap">
          {images?.length > 0 && images.map((image, index) => (
            <div
              key={index}
              className="w-1/4 p-2 relative">
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imageupload;
