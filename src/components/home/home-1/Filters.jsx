import { useState, useEffect } from "react";
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import { useContext } from "react";
import { Store } from "../../../context/store";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel, TextField } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import { Button } from "antd";

const Filters = () => {
  const category = "residential";
  const [locationData, setLocationData] = useState("");

  const [searchArray, setSearchArray] = useState([]);

  const [MyURL] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [subcatvalue, setsubcatvalue] = useState(
    MyURL.get("subCategory") ? MyURL.get("subCategory") : ""
  );
  const [subcatOptions, setsubcatOptions] = useState([]);

  const [bathrooms, setBathrooms] = useState(
    MyURL.get("bathRooms") ? MyURL.get("bathRooms") : ""
  );
  const [bedrooms, setBedrooms] = useState(
    MyURL.get("bedRooms") ? MyURL.get("bedRooms") : ""
  );

  const { getPropertyData, state, dispatch } = useContext(Store);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVERURL}/lov/sub-category/${category}`)
      .then((res) =>
        setsubcatOptions([{ key: "All", value: "All" }, ...res.data.data])
      );
  }, [category]);

  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: "AIzaSyCN5_vVFCU-LZ2sQHmUzch_-fXkJq2THjA",
    onPlaceSelected: (place) => {
      // console.log('yupyupyupyup', place);
      // setKey("AIzaSyCN5_vVFCU-LZ2sQHmUzch_-fXkJq2THjA");
      // setLanguage("en");
      // setRegion("ae");
      console.log("now_wheat", place?.formatted_address);
      // setLocationData(state => ({ ...state, location: place?.formatted_address }))
      setLocationData(place?.formatted_address);
      // Get latitude & longitude from place_id.
      // fromPlaceId(place?.place_id)
      //   .then(({ results }) => {
      //     const { lat, lng } = results[0].geometry.location;
      //     console.log('90909090', { lat: lat, lng: lng });
      //   })
      //   .catch(console.error);

      // Set default response language and region (optional).
      // This sets default values for language and region for geocoding requests.
      // setDefaults({
      //   key: "AIzaSyCN5_vVFCU-LZ2sQHmUzch_-fXkJq2THjA", // Your API key here.
      //   language: "ae", // Default language for responses.
      //   region: "ae", // Default region for responses.
      // });

      // geocode(RequestType.ADDRESS, "AIzaSyCN5_vVFCU-LZ2sQHmUzch_-fXkJq2THjA").then(res => {
      //   console.log('tuctuctuc', res);
      // })
      // console.log('tutuututc', placeIdResponse)
    },
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "ae" },
    },
  });

  const handleSearchClick = (category, subcatvalue, bedrooms, bathrooms) => {
    // const params = new URLSearchParams();
    const filterarr = [
      { key: "subCategory", value: subcatvalue },
      { key: "bedRooms", value: bedrooms },
      { key: "bathRooms", value: bathrooms },
    ];
    filterarr.map((element) => {
      if (element.value != "") {
        console.log(element.key, element.value, "..");
        // params.append(element.key, element.value);
      }
    });
    // getPropertyData(
    //   category,
    //   subcatvalue,
    //   bedrooms,
    //   bathrooms,

    // );
  };
  useEffect(() => {
    handleSearchClick(
      category || "",
      subcatvalue == "" ? "" : subcatvalue,

      bedrooms || "",
      bathrooms || ""
    );
  }, [
    MyURL.get("subCategory"),
    MyURL.get("bedRooms"),
    MyURL.get("bathRooms"),
    category,
  ]);
  // if I want to clear all the filters on category change
  // useEffect(() => {
  //   handleSearchClick(
  //     category || "",
  //     "",
  //     area || "",
  //     bedrooms || "",
  //     bathrooms || "",
  //     price || "",
  //     showPage
  //   );
  // }, [category]);
  const bathRoomsData = [
    { key: "All", value: "All" },
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
    { key: "5andAbove", value: "5 or above" },
  ];

  const propertydataArr = state.propertydataArr;

  return (
    <div className="xl:w-[1200px]  mx-auto relative px-4 md:px-8  ">
      <div className="flex-col  rounded-xl gap-x-4 flex-center-between gap-y-4  md:flex-row card card-shadow dark:shadow-none  w-[100%]  ">
        <div className="  lg:sticky lg:top-20  w-full ">
          <div className="flex justify-center  flex-row flex-wrap lg:flex-nowrap px-4 xl:px-12 gap-8 py-2 w-full ">
            <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label" className="bg-white">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subcatvalue}
                  label="category"
                  MenuProps={{ PaperProps: { style: { maxHeight: "40vh" } } }}
                  sx={{
                    "&:before": {
                      borderColor: "yellow !important",
                    },
                    "&:after": {
                      borderColor: "yellow !important",
                    },
                  }}
                  onChange={(e) => {
                    setsubcatvalue(e.target.value);
                    // params.append('subCategory', e.target.value);
                    setSearchArray((state) => {
                      if (state.some((item) => item.key == "subCategory")) {
                        const temp = [...state];
                        const temp2 = temp.filter(
                          (e) => e.key !== "subCategory"
                        );
                        temp2.push({
                          key: "subCategory",
                          value: e.target.value,
                        });
                        console.log("ppopopiokp", temp2);
                        return temp2;
                      }
                      return [
                        ...state,
                        { key: "subCategory", value: e.target.value },
                      ];
                    });
                  }}
                >
                  {subcatOptions?.map((opt, i) => (
                    <MenuItem
                      key={i}
                      selected={opt.key == subcatvalue ? true : false}
                      value={opt.key == "All" ? "" : opt.key}
                      name={opt.key}
                    >
                      {opt.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label" className="bg-white">
                  Bathrooms
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bathrooms}
                  label="category"
                  MenuProps={{ PaperProps: { style: { maxHeight: "40vh" } } }}
                  sx={{
                    "&:before": {
                      borderColor: "yellow !important",
                    },
                    "&:after": {
                      borderColor: "yellow !important",
                    },
                  }}
                  onChange={(e) => {
                    setBathrooms(e.target.value);
                    // params.append('bathRooms', e.target.value);
                    // if (state.some(item => item.key == 'bathRooms')) {
                    //   const temp = [...state];
                    //   const temp2 = temp.filter(e => e.key !== 'bathRooms');
                    //   temp2.push({ key: 'bathRooms', value: e.target.value })
                    //   console.log('ppopopiokp', temp2);
                    //   return temp2;
                    // }
                    setSearchArray((state) => {
                      if (state.some((item) => item.key == "bedRooms")) {
                        const temp = [...state];
                        const temp2 = temp.filter((e) => e.key !== "bedRooms");
                        temp2.push({ key: "bedRooms", value: e.target.value });
                        console.log("ppopopiokp", temp2);
                        return temp2;
                      }
                      return [
                        ...state,
                        { key: "bathRooms", value: e.target.value },
                      ];
                    });
                  }}
                >
                  {bathRoomsData?.map((opt, i) => (
                    <MenuItem
                      key={i}
                      selected={opt.key == bathrooms ? true : false}
                      value={opt.key == "All" ? "" : opt.key}
                      name={opt.key}
                    >
                      {opt.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label" className="bg-white">
                  Bed Rooms
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bedrooms}
                  label="category"
                  MenuProps={{ PaperProps: { style: { maxHeight: "40vh" } } }}
                  sx={{
                    "&:before": {
                      borderColor: "yellow !important",
                    },
                    "&:after": {
                      borderColor: "yellow !important",
                    },
                  }}
                  onChange={(e) => {
                    setBedrooms(e.target.value);
                    // params.append('bedRooms', e.target.value);

                    setSearchArray((state) => {
                      if (state.some((item) => item.key == "bedRooms")) {
                        const temp = [...state];
                        const temp2 = temp.filter((e) => e.key !== "bedRooms");
                        temp2.push({ key: "bedRooms", value: e.target.value });
                        console.log("ppopopiokp", temp2);
                        return temp2;
                      }
                      return [
                        ...state,
                        { key: "bedRooms", value: e.target.value },
                      ];
                    });
                  }}
                >
                  {bathRoomsData?.map((opt, i) => (
                    <MenuItem
                      key={i}
                      selected={opt.key == bedrooms ? true : false}
                      value={opt.key == "All" ? "" : opt.key}
                      name={opt.key}
                    >
                      {opt.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth size="small">
                <TextField
                  size="small"
                  name="location"
                  value={locationData}
                  ref={ref}
                  onChange={(e) => setLocationData(e.target.value)}
                  placeholder="Please enter your location"
                  className={`border-2 border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  rounded-lg p-6 bg-transparent hover:border-green-500 placeholder-footer h-4 w-full bg-white`}
                />
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 160 }}>
              <Button
                onClick={async () => {
                  const params = new URLSearchParams();
                  searchArray.length > 0 &&
                    searchArray.map((item) => {
                      params.append(item.key, item.value);
                    });
                  const response = await axios.get(
                    `${
                      process.env.REACT_APP_SERVERURL
                    }/property/get-property?find=check&category=all&${params.toString()}`
                  );
                  navigate(
                    `/property/forSale?category=all&${params.toString()}`
                  );
                  dispatch({ type: "FORSALE_SCREEN_TOGGLE", payload: true });
                }}
                size="large"
                className="bg-primary border-0 hover:text-white text-white text-lg tracking-widest  hover:bg-primary/75 rounded-md"
              >
                search property
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
