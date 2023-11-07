/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import Logo1 from '../../logo/logo3.png'
import Share from "../Share";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <img src={Logo1} className="w-40 h-15 mb-10"></img>
            <h2 className="text-xl font-semibold">Discover</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#">DIP</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Marina</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Al Jaddaf</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Palm Jumeirah</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Jumeirah Village Circle</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] lg:mt-[75px]">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <ul>
              <li className="my-3 text-muted">
                <div className="flex flex-row gap-2">
                  <MdPlace className="text-primary" />
                  <a>The Exchange Tower, Business Bay</a>
                </div>
              </li>
              <li className="my-3 text-muted">
                <div className="flex flex-row gap-2">
                  <MdPhone className="text-primary" />
                  <a>+971 43219202</a>
                </div>
              </li>
              <li className="my-3 text-muted">
                <div className="flex flex-row gap-2">
                  <MdEmail className="text-primary" />
                  <a href={`mailto:${'info@macworldproperties.com'}`}>info@macworldproperties.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2 mt-3 justify-center align-center border-t text-muted border-dark flex lg:flex-row sm:flex-col gap-10">
        <div className="flex flex-row gap-2 mt-1">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
          <div className="text-primary hover:bg-hover-color-dark">
            <FiFacebook />
          </div>
          </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURI(`Visit Macworld Properties`)}`} target="_blank"> 
            <div className="text-primary hover:bg-hover-color-dark">
              <FaTwitter />
            </div>
          </a>

          {/* <div className="text-primary hover:bg-hover-color-dark">
            <FaInstagram />
          </div> */}

          {/* <div className="text-primary hover:bg-hover-color-dark">
            <FaLinkedin />
          </div> */}
        </div>
        <p>
          <span className="text-primary">Macworld Properties</span> | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
