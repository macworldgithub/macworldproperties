import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

import ProgressButton from "../components/Dashboard/progressButton";
import { Store } from "../context/store";
import Layout from "../components/Layout";
import Imageupload from "../components/common/Imageupload";
import Videoupload from "../components/common/Videoupload";
import Navbar from "../components/common/Navbar";
import { stubTrue } from "lodash";
import { storage } from "../config/firebase";
import ReactLoading from 'react-loading';
import Loading from "react-loading";

const Dashboardpage3 = () => {
  const [stepcount, setStepcount] = useState(3);
  const [isChecked, setIsChecked] = useState(false);
  const [images, setImages] = useState([]);
  const [firebaseImagesLinks, setFirebaseImagesLinks] = useState([])
  const [loading, setLoading] = useState(false);

  const [videoLinks, setVideoLinks] = useState([]);

  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state?.updatePropertyToggle) {
      setImages(state?.updateProperty?.upload?.images || []);
      setVideoLinks(state?.updateProperty?.upload?.videos);
    } else {
      setImages(state?.form?.upload?.upload || []);
      setVideoLinks(state?.form?.upload?.videos);
    }
    console.log('vvvvvvv', state.form)
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate();

  const submitForm = () => {
    setStepcount(stepcount + 1);
  };

  const prevPage = () => {
    dispatch({
      type: "ADD_MEDIA",
      payload: { images: images, videos: videoLinks },
    });
    setStepcount(stepcount - 1);
    navigate("/dashboard");
  };

  const handleUpload = () => {

    if (images?.length < 3) {
      swal({
        title: "Error",
        text: "At least 3 images required",
        icon: "success",
      });
      return
    }
    const temp = JSON.stringify(state.form);
    const temp1 = JSON.parse(temp);
    temp1.upload.images = images;
    temp1.upload.videos = videoLinks;
    // const formData = new FormData();

    // for (let i = 0; i < firebaseImagesLinks?.length; i++) {
    //   formData.append("photos", firebaseImagesLinks);
    // }
    // const check = { ...state.form.upload }
    // check.images = firebaseImagesLinks
    // formData.append("bodyOfData", );
    console.log("imagesss", state.form.upload);
    axios
      .post(`${process.env.REACT_APP_SERVERURL}/property/upload`, temp1)
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Success",
          text: res?.data?.message,
          icon: "success",
        });
        dispatch({ type: "EMPTY_FORM" });
        setImages([]);
        setVideoLinks([]);
        setFirebaseImagesLinks([]);
        navigate('/listing-inventory')
      });
  };

  const handleUpdateImage = async (newImages) => {

    const formData = new FormData();
    for (let i = 0; i < newImages.length; i++) {
      formData.append("photos", newImages[i]);
    }
    const res = await axios.post(
      `${process.env.REACT_APP_SERVERURL}/property/add-photos`,
      formData
    );
    console.log('trrtrtrt', res.data.data)
    setImages((state) => [...state, ...res.data.data]);
    const temp = [...state?.updateProperty?.upload?.images, ...res.data.data];
    console.log('lqwerqwe', temp)
    dispatch({
      type: "UPDATE_PROPERTY_MEDIA",
      payload: { images: temp, videos: videoLinks },
    });
  };

  const handleUpdateCompleteProperty = () => {
    dispatch({
      type: "UPDATE_PROPERTY_MEDIA",
      payload: { images: images, videos: videoLinks },
    });
    axios
      .post(`${process.env.REACT_APP_SERVERURL}/property/update-property`, state?.updateProperty)
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Success",
          text: res?.data?.message,
          icon: "success",
        });
        dispatch({ type: "UPDATE_TOGGLE", payload: false });
        dispatch({ type: "EMPTY_UPDATE_FORM" });
        setImages([]);
        setVideoLinks([]);
      });
  }

  const getImage = async (bannerImage) => {
    const storageRef = storage.ref(`/images/${Date.now()}`);
    await storageRef.put(bannerImage);
    // Get download URL
    const url = await storageRef.getDownloadURL();
    // const url = await storageRef.child(bannerImage).getDownloadURL();
    return url;
  }

  const handleFirebaseUpload = async (fileArray) => {
    setLoading(true)
    const temp = [...fileArray];
    console.log('irpwoeruweru', temp)
    const temp2 = temp?.length > 0 && await Promise.all(temp.map(async (item) => {
      return getImage(item)
    }))
    if (temp2?.length > 0 && images?.length < 1) {
      setImages(temp2)
    } else {
      setImages([...images, temp2]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    if (state?.updatePropertyToggle) {
      dispatch({
        type: "ADD_MEDIA",
        payload: { images: [...state?.updateProperty?.upload.images, temp2], videos: [...state?.updateProperty?.upload?.videos] },
      });
    }
  }


  // const handleFirebaseUpload = (fileArray) => {
  //   setLoading(true)
  //   const temp = [...fileArray];
  //   const temp2 = [];
  //   for (let i = 0; i < fileArray.length; i++) {
  //     const imageName = Date.now();
  //     storage.ref(`/images/${imageName + '.png'}`).put(fileArray[i])
  //       .on('state_changed', alert('success'), alert, () => {

  //         storage.ref('images').child(imageName + '.png').getDownloadURL().then((url) => {
  //           console.log('trian', url);
  //           // temp.map(item => {
  //           //   if (item == url) {
  //           //     return
  //           //   }
  //           temp2.push(url)
  //           // setUpdateScreen(state => !state);
  //           // })
  //         })
  //       })
  //     setFirebaseImagesLinks(temp2)
  //   }

  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 8000);

  //   if (state?.updatePropertyToggle) {
  //     dispatch({
  //       type: "ADD_MEDIA",
  //       payload: { images: [...state?.updateProperty?.upload.images, temp2], videos: [...state?.updateProperty?.upload?.videos] },
  //     });
  //   }
  //   // for (let i = 0; i < firebaseImages.length; i++) {
  //   //   let imgRef = ref(imageDB, `/files/${Date.now()}`);
  //   //   let imageUrl = uploadBytes(imgRef, firebaseImages[i]).then((snapshot) => {
  //   //     console.log('Img')
  //   //     snapshot.ref.getDownloadURL()
  //   //       .then((url) => {
  //   //         // Returns the Download URL from Firebase Storage.
  //   //         console.log('erererreer', url)
  //   //       })
  //   //   })
  //   // }
  // }

  return (
    <Layout style={{ position: 'relative', backgroundColor: 'blue', zIndex: 999, overFlow: 'hidden' }}>
      {console.log('AAAAAAAAAAAAAA', images)}
      {loading && (
        <div className={`h-full ${state.open ? "w-[80%]" : "w-[95%]"} flex basis-full bg-transparent absolute z-40`}>
          <div className="h-full w-full backdrop-blur-sm flex justify-center items-center flex-col text-center" >
            <ReactLoading type='balls' color='#facc15' width={100} />
            <h1 className="text-lg mt-7">Image Uploading ...</h1>
          </div>
        </div>
      )}

      <div
        className="bg-gradient-to-r from-gradient via-ordinary to-ordinary h-screen overflow-x-hidden"

      >

        <div
          className="relative h-full inset-0 p-10"
        // style={{
        //     backgroundColor: "rgba(0, 0, 0, 0.1)",
        //     backdropFilter: "brightness(0.8)",
        // }}
        >
          <div className="relative block rounded-[25px] bg-white px-6 pt-4 pb-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <ProgressButton step={stepcount} />
          </div>

          <div className="bg-white m-10 rounded-md flex flex-col items-center justify-center">
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center p-1 mt-10">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${!isChecked ? "text-primary bg-white" : "text-body-color"
                  }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                >
                  <g clipPath="url(#clip0_3122_652)">
                    <path fillRule="evenodd" clipRule="evenodd"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3122_652">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Upload Images
              </span>
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${isChecked ? "text-primary bg-white" : "text-body-color"
                  }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                >
                  <path fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                Upload Video
              </span>
            </label>
            {isChecked ? (
              <Videoupload
                videoLinks={videoLinks}
                setVideoLinks={setVideoLinks}
              />
            ) : (
              <Imageupload
                images={images}
                setImages={setImages}
                handleUpdateImage={handleUpdateImage}
                handleFirebaseUpload={handleFirebaseUpload}
                firebaseImagesLinks={firebaseImagesLinks}
              />
            )}

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={prevPage}
                class="mt-10 font-bold mb-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
              >
                Previous
              </button>
              {state?.updatePropertyToggle ? (
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleUpdateCompleteProperty}
                  class="mt-10 font-bold mb-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
                >
                  Edit
                </button>
              ) : (
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleUpload}
                  class="mt-10 font-bold mb-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
                >
                  Submit
                </button>
              )}

            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboardpage3;
