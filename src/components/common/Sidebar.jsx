import React, { useContext, useLayoutEffect } from 'react';
import {
    BsArrowLeftShort, BsSearch, BsChevronDown,
} from "react-icons/bs";
import {
    AiOutlineBarChart,
    AiFillPieChart,
    AiOutlineClose
} from "react-icons/ai";
import { ReactComponent as LogoSvg } from '../../assets/svgs/black_logo.svg'
import { ImList2 } from "react-icons/im";
import { useState, useEffect } from 'react';
import { RiDashboardFill } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../../context/store';
import { ReactComponent as PropertyFinder } from '../../assets/svgs/property_finder.svg'
import { ReactComponent as Bayut } from '../../assets/svgs/bayut_logo.svg'

const Sidebar = ({ toggleMobileOpen, setToggleMobileOpen }) => {
    const [submenuOpen1, setSubmenuOpen1] = useState(false);
    const [submenuOpen2, setSubmenuOpen2] = useState(false);
    const [submenuOpen3, setSubmenuOpen3] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const [screenWidth, setScreenWidth] = useState('laptop');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2)
    }

    const { state, dispatch } = useContext(Store);

    useLayoutEffect(() => {

    }, [window.innerWidth]);


    useEffect(() => {
        function reportWindowSize() {
            if (window.innerWidth > 1024) {
                setToggleMobileOpen(true);
            } else {
                setToggleMobileOpen(false);
            }
            setWindowWidth(window.innerWidth)
            // console.log(window.innerHeight, window.innerWidth)
        }
        // Trigger this function on resize
        window.addEventListener('resize', reportWindowSize);
        reportWindowSize();
        //  Cleanup for componentWillUnmount
        return () => window.removeEventListener('resize', reportWindowSize)
    }, []);


    const Menus = [
        { title: "Overview", icon: <AiFillPieChart className='hover:text-yellow-500 hover:animate-bounce duration-1000' />, path: '/portfolio' },
        {
            title: "listings",
            icons: <ImList2 className='hover:text-yellow-500 hover:animate-bounce duration-1000' />,
            submenu1: true,
            submenuItems: [
                { title: "Listing Inventory ", path: '/listing-inventory' },
            ],
        },
        {
            title: "Reports",
            submenu2: true,
            icon: <TbFileReport className='hover:text-yellow-500 hover:animate-bounce duration-1000' />,
            submenuItems: [
                { title: "Leads", path: '/reports' },
                { title: "Traffic", path: '/traffic' },
            ]
        },
        // {
        //     title: "Insights",
        //     icon: <AiOutlineBarChart className='hover:text-yellow-500 hover:animate-bounce duration-1000' />,
        //     submenu3: true,
        //     submenuItems: [
        //         { title: "Listings", path: '/home' },
        //         { title: "Market", path: '/home' },
        //         { title: "Transactions", path: '/home' }
        //     ]
        // },

    ];

    return (
        // <div className='lg:relative left-0 top-0 z-50 lg:z-50 min-h-dvh'>
        <div className={`bg-footer2 h-screen pt-8 absolute lg:relative ${state.open ? "lg:w-72" : "lg:w-20"} ${toggleMobileOpen ? "w-72 p-5" : "w-0"} duration-300`} style={{ maxHeight: '100%', overflowY: 'hidden' }}>
            <BsArrowLeftShort className={`hidden z-50 lg:block bg-ordinary text-footer text-3xl rounded-full absolute -right-0 z-50 top-16 border border-footer cursor-pointer ${!state.open && "rotate-180"}`} onClick={() => {
                // setOpen(state => !state)} 
                dispatch({ type: 'TOGGLE_SIDEBAR' });
            }}
            />
            <div className={`${toggleMobileOpen ? "flex" : "hidden"} flex flex-col gap-5 justify-center items-center mb-5`}>
                <h1 className={`text-gray-300 font-medium text-2xl ${!state.open && "scale-0"}`}>Portfolio <span className='text-xs mb-5'>TM</span></h1>
                <div className={`${!state.open && "hidden duration-50"}`}>
                    <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center bg-ordinary ml-[15px] rounded-md duration-75'>
                        <input
                            type='checkbox'
                            className='sr-only'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span
                            className={`flex items-center space-x-[6px] rounded py-2 px-4 text-sm font-medium ${!isChecked ? 'text-primary bg-white' : 'text-body-color'
                                }`}
                        >
                            <Link to="/home">
                                <LogoSvg width={90} height={40} />
                            </Link>
                        </span>
                        <span
                            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-md font-medium ${isChecked ? 'text-primary bg-white' : 'text-body-color'
                                }`}
                        >
                            <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                className='mr-[6px] fill-current'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                            Dubizzle
                        </span>
                    </label>
                </div>


            </div>

            {/* <div className={`flex items-center rounded-md bg-gray-400 mt-6 px-4 py-2 ${!open ? "px-2.5" : "px-4"}`}>
                <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
                <input type={"search"} placeholder="Search..." className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
            </div> */}

            <ul className={`pt-2 ${toggleMobileOpen ? "flex flex-col" : "hidden"}`}>
                {Menus.map((menu, index) => (
                    <>

                        <Link to='/graph' onClick={() => {
                            if (index == 1) {
                                setSubmenuOpen1(!submenuOpen1)
                            } else if (index == 2) {
                                setSubmenuOpen2(!submenuOpen2)
                            } else if (index == 3) {
                                setSubmenuOpen3(!submenuOpen3)
                            }
                            // transition duration-1000 ease-linear
                        }} key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 bg-footer3 hover:bg-footer rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            {/* < to={menu.path} > */}
                            <span className='text-white text-2xl block float-left'>
                                {menu.icon ? menu.icon : <RiDashboardFill className='hover:text-yellow-300 hover:animate-bounce duration-1000' />}
                            </span>
                            <span className={`text-base font-medium flex-1 duration-200 ${!state.open && "hidden"}`}>{menu.title}</span>

                            {menu.submenu1 && state.open && (
                                <BsChevronDown className={`${submenuOpen1 && "rotate-180"}`} />
                            )}
                            {menu.submenu2 && state.open && (
                                <BsChevronDown className={`${submenuOpen2 && "rotate-180"}`} />
                            )}
                            {menu.submenu3 && state.open && (
                                <BsChevronDown className={`${submenuOpen3 && "rotate-180"}`} />
                            )}

                        </Link>
                        {menu.submenu1 && submenuOpen1 && state.open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <Link to={submenuItem.path}>
                                        <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-footer rounded-md animate duration-1000 ease-linear group'>
                                            {submenuItem.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                        {menu.submenu2 && submenuOpen2 && state.open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <Link to={submenuItem.path}>
                                        <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-footer rounded-md animate duration-1000 ease-linear'>
                                            {submenuItem.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                        {menu.submenu3 && submenuOpen3 && state.open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <Link to={submenuItem.path}>
                                        <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-footer rounded-md animate duration-1000 ease-linear '>
                                            {submenuItem.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>

            <section className='flex gap-x-2 w-[250px] justify-between items-center rounded-full border mx-auto mt-5 bg-[#EFEFEF]'>
                <a href='https://www.bayut.com/' target='_blank' className='inline-block h-10'>
                    <PropertyFinder className='h-full px-3 py-1' />
                </a>
                <a href='https://www.propertyfinder.ae/' target='_blank' className='inline-block rounded-full border h-10 bg-[#E0E0E0]'>
                    <Bayut className='h-full px-3 py-1' />
                </a>
            </section>

            <Link className={`${toggleMobileOpen ? "block" : "hidden"}`} to="/page-one" onClick={() => {
                dispatch({ type: "UPDATE_TOGGLE", payload: false });
                navigate('/page-one');
                window.location.reload();
            }}>
                <button type="button" data-te-ripple-init data-te-ripple-color="light"
                    class={`${toggleMobileOpen ? "block" : "hidden"} ${!state.open && "hidden"} mt-10 font-bold mb-5 flex gap-7 w-full rounded bg-primary px-4 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh] transform hover:scale-105`}>
                    <FaHome className='text-white w-10 h-7' />
                    Add property
                </button>
            </Link>

            <div className={`absolute bottom-10 false${state.open ? "block" : "hidden duration-50"} bottom-10`}>
                <label className={`${state.open ? "block" : "hidden"} themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center border-2 border-white bg-footer2  ml-[15px] rounded-lg duration-75`}>
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={isChecked2}
                        onChange={handleCheckboxChange2}
                    />
                    <span
                        className={` ${state.open ? "block" : "hidden"} justify-center flex items-start justify-center rounded py-2 px-8 text-sm font-medium border-r border-white ${!isChecked2 ? 'text-white bg-footer' : 'text-white bg-footer3'
                            }`}
                    >
                        {/* <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                className='mr-[6px] fill-current'
                            >
                                <g clipPath='url(#clip0_3122_652)'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'

                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id='clip0_3122_652'>
                                        <rect width='16' height='16' fill='white'></rect>
                                    </clipPath>
                                </defs>
                            </svg> */}
                        English
                    </span>
                    <span
                        className={`${state.open ? "block" : "hidden"} flex justify-center items-start rounded py-2 px-8 text-sm font-medium ${isChecked2 ? 'text-white bg-footer2' : 'text-white bg-footer3'
                            }`}
                    >
                        {/* <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                className='mr-[6px] fill-current'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                ></path>
                            </svg> */}
                        العربية
                    </span>
                </label>
            </div>

        </div>
        // </div>
    )
}

export default Sidebar