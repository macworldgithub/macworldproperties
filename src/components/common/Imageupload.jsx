import React, { useContext, useState, useEffect } from "react";
import { Store } from "../../context/store";
import { ReactComponent as Cross } from "../../assets/svgs/cross.svg";
import swal from "sweetalert";
import axios from "axios";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Imageupload = ({ images, setImages, handleUpdateImage, handleFirebaseUpload }) => {
  const { state } = useContext(Store);
  const [updateScreen, setUpdateScreen] = useState(false)
  const [firebaseImages, setFirebaseImages] = useState([])

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setFirebaseImages([...firebaseImages, ...selectedImages]);
  };

  const handleUpdateImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setFirebaseImages(selectedImages);
  };

  const handleRemoveImage = async (imageUrl) => {
    try {
      await axios.get(`${process.env.REACT_APP_SERVERURL}/property/delete-photo/${imageUrl}`)
      swal({
        title: "Success",
        text: "Image Deleted Successfully",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Error",
        text: error,
        icon: "error",
      });
    }
  }

  return (
    <div className="mt-2 mb-7">
      <form>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={
            // state?.updatePropertyToggle
            //   ? handleUpdateImageChange
            //   : 
            (e) => {
              handleImageChange(e);
              handleFirebaseUpload(e.target.files);
            }

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

      {/* {firebaseImagesLinks?.length > 0 && ( */}
      <div className="mt-4">
        <h2>Selected Images:</h2>
        <div className="flex flex-wrap">
          {firebaseImages.map((image, index) => (

            <div
              key={index}
              className="w-1/4 p-2 relative"
              onClick={() => {
                if (state?.updatePropertyToggle) {
                  handleRemoveImage(image || '')
                }
                const array = [...images];
                array.splice(index, 1);
                setImages(array);
              }}
            >
              {/* {console.log('wouerwier', image)}
              <Cross
                className="absolute right-0 rounded-full bg-slate-200"
                height={12}
                width={12}
              /> */}
              <img
                src={URL?.createObjectURL(image)}
                alt={`Image ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

      </div>
      {/* )} */}
      {/* <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={handleFirebaseUpload}
        class="mt-10 font-bold mb-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
      >
        Firebase Image Upload
      </button> */}
    </div>
  );
};

export default Imageupload;
