import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import swal from "sweetalert";

import { Store } from "../context/store";
import Layout from "../components/Layout";
import SelectOption from "../components/Dashboard/selectOption";
import { updatePropertyData } from '../app/slices/PopertySlice';
import '../App.css'

const words = ["Sharjah", "Dubai", "Abu Dhabi", "UAE"];
const options = ["forSale", "forRent", "offPlan"];

const ManageListings = () => {
  const [catOptions, setCatOptions] = useState([]);
  const [catvalue, setCatvalue] = useState();
  const [inputValue, setInputValue] = useState("");
  const [activeProperty, setActiveProperty] = useState(true);
  const [filteredProperty, setFilteredProperty] = useState([]);

  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const { state, fetchData, dispatch } = useContext(Store);
  const userProperty = state.userProperty;

  const handleInputChange = async (e) => {
    const userInput = e.target.value.toLowerCase();

    setInputValue(userInput);
  };

  const handleEditClick = (propertyId) => {
    const propertyToEdit = userProperty.find((item) => item._id === propertyId);
    if (propertyToEdit) {

      console.log("Edit_Property", {
        _id: propertyToEdit._id,
        images: propertyToEdit?.upload?.images,
        videos: propertyToEdit?.upload?.videos,
        typesAndPurpose: propertyToEdit?.typesAndPurpose,
        locationAndAddress: propertyToEdit?.locationAndAddress,
        propertyDetails: propertyToEdit?.propertyDetails,
        rentalDetails: propertyToEdit?.rentalDetails,
        contactDetails: propertyToEdit?.contactDetails,
        amenities: propertyToEdit?.amenities,
        ownerId: propertyToEdit?.ownerId
      }); 

      reduxDispatch(updatePropertyData({
        _id: propertyToEdit._id,
        images: propertyToEdit?.upload?.images,
        videos: propertyToEdit?.upload?.videos,
        typesAndPurpose: propertyToEdit?.typesAndPurpose,
        locationAndAddress: propertyToEdit?.locationAndAddress,
        propertyDetails: propertyToEdit?.propertyDetails,
        rentalDetails: propertyToEdit?.rentalDetails,
        contactDetails: propertyToEdit?.contactDetails,
        amenities: propertyToEdit?.amenities,
        ownerId: propertyToEdit?.ownerId
      }))
      
      // dispatch({
      //   type: "SET_UPDATE_PROPERTY",
      //   payload: {
      //     _id: propertyToEdit._id,
      //     images: propertyToEdit?.upload?.images,
      //     videos: propertyToEdit?.upload?.videos,
      //     typesAndPurpose: propertyToEdit?.typesAndPurpose,
      //     locationAndAddress: propertyToEdit?.locationAndAddress,
      //     propertyDetails: propertyToEdit?.propertyDetails,
      //     rentalDetails: propertyToEdit?.rentalDetails,
      //     contactDetails: propertyToEdit?.contactDetails,
      //     amenities: propertyToEdit?.amenities,
      //     ownerId: propertyToEdit?.ownerId
      //   }
      // });
      // dispatch({ type: "UPDATE_TOGGLE", payload: true });
      navigate("/update-page-one");
    } else {
      console.log("Property nae arhi", propertyId);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVERURL}/lov/category`)
      .then((res) => setCatOptions(res.data.data));

    fetchData();
  }, []);

  const applyFilters = () => {
    const newFilteredProperty = userProperty.filter(
      (property) =>
        (!inputValue ||
          property.propertyDetails.title.toLowerCase().includes(inputValue)) &&
        (selectedOption === "All" ||
          property.typesAndPurpose.purpose === selectedOption) &&
        (!catvalue || property.typesAndPurpose.category === catvalue)
    );
    setFilteredProperty(newFilteredProperty);
  };

  useEffect(() => {
    applyFilters();
  }, [inputValue, selectedOption, catvalue]);

  const handleDeleteProperty = (ids) => {
    axios.get(`${process.env.REACT_APP_SERVERURL}/property/delete-property/${ids}`).then(res => {
      // setUpdateScreen(state => !state)
      fetchData(setFilteredProperty);
      swal({
        title: "Success!",
        text: "Property deleted successfully",
        icon: "success",
      });
      window.location.reload();
    })
  }

  return (
    <Layout>
      <div className="h-screen overflow-x-hidden bg-ordinary px-6">
        <div className="block rounded-[15px] bg-white px-6 pt-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-6 sma2:h-auto sma2:mx-0 sma3:h-auto sma3:mx-0 h-full py-10">
          <div className="flex flex-row justify-center gap-4 pt-6 pb-8">
            <button className={`text-lg py-2 px-3 button-style-progress-button rounded rounded-lg ${activeProperty == true ? 'bg-primary button-style-inset': 'text-slate-400 button-style-outset' }`} onClick={() => setActiveProperty(true)}>Active Properties</button>
            <button className={`text-lg py-2 px-3 button-style-progress-button rounded rounded-lg ${activeProperty == false ? 'bg-primary button-style-inset': 'text-slate-400 button-style-outset'}`} onClick={() => setActiveProperty(false)}>Inactive Properties</button>
          </div>
          <hr />
          <div flex flex-col>
            <div className="flex flex-row items-center flex-wrap gap-4 mt-4">
              <div className="container w-[30%]">
                <input
                  id="search"
                  type="text"
                  placeholder="Location"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>

              <div className="flex mr-16  ">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionChange(option)}
                    className={`${selectedOption === option
                      ? "bg-green-500 text-white"
                      : "bg-white text-green-500"
                      } ${index === 0 ? "rounded-l-lg " : ""} ${index === options.length - 1 ? "rounded-r-lg " : ""
                      } ${index !== options.length - 1 ? "border-l border-r " : ""
                      } } p-2 w-[100px] border border-green-500 hover:bg-green-500 hover:text-white focus:outline-none`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="w-[300px]">
                <SelectOption
                  _options={catOptions}
                  _selectedValue={catvalue}
                  _onSelectChange={(e) => {
                    setCatvalue(e.target.value);
                  }}
                  label="Category  "
                />
              </div>
            </div>
            {/* <div className="max-w-2xl overflow-auto rounded-lg">
              <table class="w-full">
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <div className="block bg-white px-2 pt-4 justify-center items-center mt-10 mx-6 sma3:w-full sma3:mx-0 sma:px-0 sma:mx-0 sma2:px-0 sma2:mx-0 ssma3:px-0 h-full">
              <div class="overflow-x-auto shadow-md sm:rounded-lg">
                
                <table class="text-md text-left text-gray-500 dark:text-gray-400 w-full h-full">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Property Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Purpose
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Owner
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProperty.map((item) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.propertyDetails.title}
                        </th>
                        <td class="px-6 py-4">
                          {item.typesAndPurpose.category}
                        </td>
                        <td class="px-6 py-4">
                          {item.typesAndPurpose.purpose}
                        </td>
                        <td class="px-6 py-4">{item.contactDetails.email}</td>
                        <td class="px-6 py-4">
                          {item.propertyDetails.InclusivePrice}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <button
                            class="px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:shadow-outline-blue active:bg-green-700 transition duration-150 ease-in-out"
                            onClick={() => handleEditClick(item._id)}
                          >
                            Edit
                          </button>
                          <button onClick={() => handleDeleteProperty(item._id)} class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageListings;
