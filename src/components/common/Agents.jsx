import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
// import img3 from "3d-house-2.png"
import { AiFillStar } from "react-icons/ai";
import { agent } from "../../data/dummyData";
import { Link } from 'react-router-dom';
import UserImg from '../../assets/agents/agents.jpg'
import { Footer } from '../../components/common';
import '../../App.css'
import { FormControl, Select, Box, MenuItem, InputLabel, TextField } from "@mui/material";
import { Button } from "antd";
// bg-zinc-200 
const Agents = () => {
  return (
    <div className="h-screen">
      {/* <div className="relative w-screen flex items-center justify-center mt-10"> */}
      {/* <video
          id="v"
          poster=""
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          className="w-full" // Use "w-full" to make it responsive
          alt=""
          width="640" // Set the width of your video
          height="160" // Set the height of your video
        >
          <source
            src={video} // Use the imported video file as the source
            type="video/mp4"
          />
        </video> */}

      <header
        className="h-1/2 mt-12 flex items-center w-screen"
        style={{
          backgroundImage: "url('/hero-banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <h1 className="backdrop-blur-[3px] text-white font-semibold tracking-wider mx-auto text-xl sm:text-2xl md:text-3xl">
          Find your agent to find a home
        </h1>
      </header>
      <div className="px-4 md:px-8">
        <section className="mx-auto button-style-progress-button agents-forms-2 px-5 py-4">
          <div className="flex gap-x-3">
            <span className="inline-block px-3 py-2 rounded bg-yellow-400 rounded-lg button-style-progress-button">Agents</span>
            <span className="inline-block px-3 py-2 bg-yellow-400 rounded-lg button-style-progress-button">Companies</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center flex-row flex-wrap px-4 xl:px-12 sm:gap-4 md:gap-3 gap-4 py-2 w-full mt-3">
            <Box sx={{ minWidth: 290 }} className="mb-5 sm: mb-0">
              <FormControl fullWidth size="small">
                <TextField
                  size="small"
                  name="location"
                  value={'Agent'}
                  // ref={ref}
                  // onChange={(e) => setLocationData(e.target.value)}
                  placeholder="Please enter your location"
                  className={`border-2 border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  rounded-lg p-6 bg-transparent hover:border-green-500 placeholder-footer h-4 w-full bg-white mb-5`}
                />
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 290 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label" className="bg-white">
                  Service needed
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={bathrooms}
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
                // onChange={(e) => {
                //   // setBathrooms(e.target.value);
                //   // params.append('bathRooms', e.target.value);
                //   // if (state.some(item => item.key == 'bathRooms')) {
                //   //   const temp = [...state];
                //   //   const temp2 = temp.filter(e => e.key !== 'bathRooms');
                //   //   temp2.push({ key: 'bathRooms', value: e.target.value })
                //   //   console.log('ppopopiokp', temp2);
                //   //   return temp2;
                //   // }
                //   setSearchArray((state) => {
                //     if (state.some((item) => item.key == "bedRooms")) {
                //       const temp = [...state];
                //       const temp2 = temp.filter((e) => e.key !== "bedRooms");
                //       temp2.push({ key: "bedRooms", value: e.target.value });
                //       console.log("ppopopiokp", temp2);
                //       return temp2;
                //     }
                //     return [
                //       ...state,
                //       { key: "bathRooms", value: e.target.value },
                //     ];
                //   });
                // }}
                >
                  {[]?.map((opt, i) => (
                    <MenuItem
                      key={i}
                      selected={opt?.key == '' ? true : false}
                      value={opt?.key == "All" ? "" : opt.key}
                      name={opt?.key}
                    >
                      {opt?.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 290 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label" className="bg-white">
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={bathrooms}
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
                // onChange={(e) => {
                //   // setBathrooms(e.target.value);
                //   // params.append('bathRooms', e.target.value);
                //   // if (state.some(item => item.key == 'bathRooms')) {
                //   //   const temp = [...state];
                //   //   const temp2 = temp.filter(e => e.key !== 'bathRooms');
                //   //   temp2.push({ key: 'bathRooms', value: e.target.value })
                //   //   console.log('ppopopiokp', temp2);
                //   //   return temp2;
                //   // }
                //   setSearchArray((state) => {
                //     if (state.some((item) => item.key == "bedRooms")) {
                //       const temp = [...state];
                //       const temp2 = temp.filter((e) => e.key !== "bedRooms");
                //       temp2.push({ key: "bedRooms", value: e.target.value });
                //       console.log("ppopopiokp", temp2);
                //       return temp2;
                //     }
                //     return [
                //       ...state,
                //       { key: "bathRooms", value: e.target.value },
                //     ];
                //   });
                // }}
                >
                  {[]?.map((opt, i) => (
                    <MenuItem
                      key={i}
                      selected={opt?.key == '' ? true : false}
                      value={opt?.key == "All" ? "" : opt.key}
                      name={opt?.key}
                    >
                      {opt?.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 290 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label" className="bg-white">
                  Nationality
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={bathrooms}
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
                // onChange={(e) => {
                //   // setBathrooms(e.target.value);
                //   // params.append('bathRooms', e.target.value);
                //   // if (state.some(item => item.key == 'bathRooms')) {
                //   //   const temp = [...state];
                //   //   const temp2 = temp.filter(e => e.key !== 'bathRooms');
                //   //   temp2.push({ key: 'bathRooms', value: e.target.value })
                //   //   console.log('ppopopiokp', temp2);
                //   //   return temp2;
                //   // }
                //   setSearchArray((state) => {
                //     if (state.some((item) => item.key == "bedRooms")) {
                //       const temp = [...state];
                //       const temp2 = temp.filter((e) => e.key !== "bedRooms");
                //       temp2.push({ key: "bedRooms", value: e.target.value });
                //       console.log("ppopopiokp", temp2);
                //       return temp2;
                //     }
                //     return [
                //       ...state,
                //       { key: "bathRooms", value: e.target.value },
                //     ];
                //   });
                // }}
                >
                  {[]?.map((opt, i) => (
                    <MenuItem
                      key={i}
                      selected={opt?.key == '' ? true : false}
                      value={opt?.key == "All" ? "" : opt.key}
                      name={opt?.key}
                    >
                      {opt?.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 160 }}>
              <Button
                // onClick={async () => {
                //   const params = new URLSearchParams();
                //   searchArray.length > 0 &&
                //     searchArray.map((item) => {
                //       params.append(item.key, item.value);
                //     });
                //   const response = await axios.get(
                //     `${process.env.REACT_APP_SERVERURL
                //     }/property/get-property?find=check&category=residential&${params.toString()}`
                //   );
                //   navigate(
                //     `/property/forSale?category=residential&${params.toString()}`
                //   );
                //   dispatch({ type: "FORSALE_SCREEN_TOGGLE", payload: true });
                // }}
                size="large"
                className="text-black button-style-progress-button bg-primary border-0 text-lg tracking-widest  hover:bg-primary/75 rounded-md mx-auto"
              >
                Search Property
              </Button>
            </Box>
          </div>
        </section>

      </div>

      <section className="grid gap-y-4 gap-x-2 grid-cols-1 lg:grid-cols-[minmax(400px,_1fr)_minmax(400px,_1fr)] mt-12 px-5 xl:px-12">
        {
          [1, 2, 3].map(ele => (
            <div className="flex rounded-lg button-style-progress-button gap-x-3">
              <div className="rounded-bl-lg rounded-tl-lg">
                <img src={UserImg} className="rounded-bl-lg rounded-tl-lg" style={{ height: '260px', width: '220px' }} />
              </div>
              <div className="flex flex-col justify-between py-5">
                <div className="flex flex-col gap-y-1">
                  <h1 className="text-3xl font-semibold">Asad</h1>
                  <h4 className="text-slate-400">Property Consultant</h4>
                  <span className="w-40 flex justify-center px-2 py-1 rounded bg-yellow-400 rounded-lg border-[#243c5a] font-semibold">SUPER AGENT</span>
                  <h4><span className="text-slate-400">Nationality:</span> <span className="text-black font-semibold">Ukraine</span></h4>
                  <h4><span className="text-slate-400">Languages:</span> <span className="text-black font-semibold">English, Russian, Ukrainian</span></h4>
                </div>
                <div className="flex gap-x-3">
                  <span className="bg-yellow-400 button-style-progress-button py-1 px-2 rounded font-semibold">For Sale: 7</span>
                  <span className="bg-yellow-400 button-style-progress-button py-1 px-2 rounded font-semibold">For Rent: 7</span>
                </div>
              </div>

            </div>
          ))
        }
      </section>



      {/* <div
            className="inset-0 flex flex-col items-center h-full justify-center align-center mx-auto"
          // style={{ }
          > */}
      {/* <div className="mx-auto lg:mt-[15vh] backdrop-blur-[3px] p-6"> */}
      {/* <h1 className="text-center heading-h1 2xla:text-5xl">
                SAFEST WAY TO BUY, RENT & SELL YOUR PROPERTIES
              </h1> */}
      {/* <h2 className="justify-center text-center	 sub-heading1 align-center mx-auto 2xla:text-3xl pb-1">
                Find your agent to find a home
              </h2>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="my-10 w-full floating-forms-2">
        <Filters />
      </div> */}

      {/* <div className="w-4/5 mx-auto bg-zinc-200 flex flex-col xl:flex-row" style={{ maxWidth: '1100px' }}>
        <div className="w-full bg-zinc-200 xl:w-3/4" >
          {agent.map((item) => (
            <Link to="/agentdetails">
              <div className="shadow-md mdr:mb-0 sm:w-[40rem] lg:w-56 mb-3 hover:shadow-lg">
                <div className=" w-full lg:w-full xs:flex lg:flex rounded-[2rem]" style={{ boxShadow: '-2px 3px 14px gray' }}>
                  <div
                    className="h-48 lg:rounded-none lg:h-auto lg:w-[14rem] bg-white md:w-full justify-center items-center flex py-3 flex-none bg-cover rounded-t-2xl md:rounded-l-2xl text-center overflow-hidden"
                  >
                    <img height={200} width={200} src={UserImg} alt="" />
                  </div>

                  <div className=" bg-white rounded-b  lg:rounded-r p-4 flex flex-col justify-between  ">
                    <div>
                      <div className="text-gray-900 font-bold text-xl mb-1 w-45 flex gap-x-1 ">

                        {item.name} <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                      </div>
                      <p className="text-black-700 text-base">
                        {item.task}
                      </p>
                      <div className="h-50 sm:w-[13rem] md:w-[36rem] lg:w-[25rem] text-sm md:text-lg smr:w-[33rem] mt-1">
                        <div className="flex w-full justify-between  border-b-2 border-gray-600 my-2">
                          <p className="font-bold text-1xl text-black">office</p>
                          <p className="font-bold text-1xl text-gray-700">
                            {item.Office}
                          </p>
                        </div>
                        <div className="flex w-full justify-between  border-b-2 border-gray-600 my-3">
                          <p className="font-bold text-1xl text-black">Mobile</p>
                          <p className="font-bold text-1xl text-gray-700 ">
                            {item.Mobile}
                          </p>
                        </div>
                        <div className="flex w-full justify-between  border-b-2 border-gray-600 my-3">
                          <p className="font-bold text-1xl text-black">Fax</p>
                          <p className="font-bold text-1xl  text-gray-700 ">
                            {item.Fax}
                          </p>
                        </div>
                        <div className="flex w-full justify-between flex-wrap my-3">
                          <p className="font-bold text-1xl text-black">Email</p>
                          <p className="font-bold text-1xl  text-gray-700 ">
                            {item.Email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          ))}
        </div>

        <div className="xl:w-1/4 bg-white p-4 border-4 border-gray-400 rounded-2xl smr:w-full   h-[20rem]        shadow-gray-100 smr:mx-auto         my-4">
          <div className="w-full  flex flex-col ">
            <h2 className="my-1 mdr:mx-auto font-bold">Find Agent</h2>
            <input class="border border-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 rounded-2xl hover:border-black" placeholder="Enter agent name" />

            <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-800 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline my-2 rounded-2xl">
              <option>All Categories..</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-800 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline my-2 rounded-2xl">
              <option>All Cities..</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <button className="hover:bg-yellow-600 text-black rounded-2xl my-2 py-2 bg-yellow-300 border-2 border-gray-500">
              <h4 className="text-black  font-bold ">Search Agent</h4>
            </button>
          </div>
        </div>
      </div> */}


      {/* ////////////////////////////////////////SEARCHBAR */}
      {/* <div className="mdr:max-w-[90%] w-full mx-auto relative my-2 hidden">
        <div
          className=" flex-col bg-white gap-x-4 flex-center-between mdr:gap-y-0 mdr:flex-row card card-shadow dark:shadow-none mt-6"
          style={{ marginTop: "4rem" }}
        >
          <div className="flex flex-1 w-auto gap-x-2">
            <BiMap />
            <select
              name=""
              id=""
              className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
            >
              <option value="<45000">Less than 45,000</option>
              <option value="=45000">Equal to 45,000</option>
              <option value=">45000">Greater than 45,000</option>
            </select>
          </div>
          <button className="w-full hover:bg-yellow-400 btn bg-yellow-500 smr:w-fit text-white font-semibold">
            search
          </button>
        </div>
      </div> */}

      {/* ///////////////////////////////left side  */}

      {/*     box-shadow: -1px 1px 3px gray; */}

      {/* <div className="w-full  bg-zinc-200 h-full"> */}
      {/* <div className="w-4/5 mx-auto">
          <h2 className="font-bold text-5xl my-6 mx-2 ">Agents</h2>
        </div> */}
      {/* <div className="w-4/5 mx-auto bg-zinc-200 flex flex-col xl:flex-row" style={{ maxWidth: '1100px' }}>
          <div className="w-full bg-zinc-200 xl:w-3/4" >
            {agent.map((item) => (
              <Link to="/agentdetails">
                <div className="shadow-md mdr:mb-0 sm:w-[40rem] lg:w-56 mb-3 hover:shadow-lg">
                  <div className=" w-full lg:w-full xs:flex lg:flex rounded-[2rem]" style={{ boxShadow: '-2px 3px 14px gray' }}>
                    <div
                      className="h-48 lg:rounded-none lg:h-auto lg:w-[14rem] bg-white md:w-full justify-center items-center flex py-3 flex-none bg-cover rounded-t-2xl md:rounded-l-2xl text-center overflow-hidden"
                    >
                      <img height={200} width={200} src={UserImg} alt="" />
                    </div>

                    <div className=" bg-white rounded-b  lg:rounded-r p-4 flex flex-col justify-between  ">
                      <div>
                        <div className="text-gray-900 font-bold text-xl mb-1 w-45 flex gap-x-1 ">

                          {item.name} <AiFillStar color="orange" />
                          <AiFillStar color="orange" />
                          <AiFillStar color="orange" />
                          <AiFillStar color="orange" />
                          <AiFillStar color="orange" />
                        </div>
                        <p className="text-black-700 text-base">
                          {item.task}
                        </p>
                        <div className="h-50 sm:w-[13rem] md:w-[36rem] lg:w-[25rem] text-sm md:text-lg smr:w-[33rem] mt-1">
                          <div className="flex w-full justify-between  border-b-2 border-gray-600 my-2">
                            <p className="font-bold text-1xl text-black">office</p>
                            <p className="font-bold text-1xl text-gray-700">
                              {item.Office}
                            </p>
                          </div>
                          <div className="flex w-full justify-between  border-b-2 border-gray-600 my-3">
                            <p className="font-bold text-1xl text-black">Mobile</p>
                            <p className="font-bold text-1xl text-gray-700 ">
                              {item.Mobile}
                            </p>
                          </div>
                          <div className="flex w-full justify-between  border-b-2 border-gray-600 my-3">
                            <p className="font-bold text-1xl text-black">Fax</p>
                            <p className="font-bold text-1xl  text-gray-700 ">
                              {item.Fax}
                            </p>
                          </div>
                          <div className="flex w-full justify-between flex-wrap my-3">
                            <p className="font-bold text-1xl text-black">Email</p>
                            <p className="font-bold text-1xl  text-gray-700 ">
                              {item.Email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

            ))}
          </div>
*/}
      {/* <div className="xl:w-1/4 bg-white p-4 border-4 border-gray-400 rounded-2xl smr:w-full   h-[20rem]        shadow-gray-100 smr:mx-auto         my-4">
            <div className="w-full  flex flex-col ">
              <h2 className="my-1 mdr:mx-auto font-bold">Find Agent</h2>
              <input class="border border-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 rounded-2xl hover:border-black" placeholder="Enter agent name" />

              <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-800 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline my-2 rounded-2xl">
                <option>All Categories..</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-800 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline my-2 rounded-2xl">
                <option>All Cities..</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <button className="hover:bg-yellow-600 text-black rounded-2xl my-2 py-2 bg-yellow-300 border-2 border-gray-500">
                <h4 className="text-black  font-bold ">Search Agent</h4>
              </button>
            </div>
          </div>
        </div>  */}
      {/* <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
        <div className="mt-20">
          <Footer />
        </div>
      </div> */}
    </div>
  );
};
export default Agents;