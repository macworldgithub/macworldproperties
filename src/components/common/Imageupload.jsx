import React, { useContext, useState, useEffect } from "react";
import { Store } from "../../context/store";
import { ReactComponent as Cross } from "../../assets/svgs/cross.svg";
import swal from "sweetalert";
import axios from "axios";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { type } from "@testing-library/user-event/dist/type";

const Imageupload = ({ images, setImages, handleUpdateImage, handleFirebaseUpload, firebaseImagesLinks }) => {
  const { state, dispatch } = useContext(Store);
  const [updateScreen, setUpdateScreen] = useState(false)
  const [firebaseImages, setFirebaseImages] = useState([]);

  // useEffect(() => {
  //   console.log('ewrofskdmfsdk', state?.updateProperty?.upload?.images)
  //   if (state?.updatePropertyToggle) {
  //     setFirebaseImages(state?.updateProperty?.upload?.images);
  //     // setFirebaseImages(state?.updateProperty?.upload?.images);
  //     // setVideoLinks(state?.updateProperty?.upload?.videos);
  //   } else {
  //     // setFirebaseImages(state?.form?.upload?.images);
  //     // setVideoLinks(state?.form?.upload?.videos);
  //   }
  //   console.log('vvvvvvv', state.form)
  // }, [state?.updateProperty?.upload?.images]);

  useEffect(() => {
    if (state?.updatePropertyToggle) {
      setFirebaseImages([...state?.updateProperty?.upload?.images]);
    }
  }, [state?.updateProperty?.upload?.images])

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

  const handleImageDisplay = (image) => {
    if(typeof image == 'object'){
      return URL?.createObjectURL(image)
    }
    return image 
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
              console.log("wqeqweqweqwewqeqweqweqwe", typeof e.target.files[0])
              handleImageChange(e);
              handleFirebaseUpload(e.target.files);
              if (state?.updatePropertyToggle) {
                dispatch({
                  type: "ADD_MEDIA",
                  payload: { images: [...state?.updateProperty?.upload?.images, ...e.target.files], videos: [...state?.form?.upload?.videos] },
                });
              } 
              // else {
              //   dispatch({
              //     type: "ADD_MEDIA",
              //     payload: { images: e.target.files, videos: [...state?.form?.upload?.videos] },
              //   });
              // }
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
                src={handleImageDisplay(image)}
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
