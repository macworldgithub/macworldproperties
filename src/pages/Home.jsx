// import {
//   Brands,
//   Counter,
//   Featured,
//   Projects,
//   Services,
//   Testimonial,
// } from "../components/common/page-componets";
import { useContext, useState } from "react";
import FeaturedSection from "../components/common/FeaturedSection";
import {
  Filters,
  Hero,
  Explore,
  OurAgents,
  Testimonials,
} from "../components/home/home-1";
import Explore2 from "../components/home/home-1/Explore2";
import Explore3 from "../components/home/home-1/Explore3";
import { Store } from "../context/store";
import AdvancedSearch from "../components/common/AdvancedSearch";
import { Footer } from "../components/common";
import PopUp from "./PopUp";

const Home = () => {
  const { isLoading, featuredProperties } = useContext(Store);
  const visited = localStorage.getItem("visited");

  console.log(visited, "polo");

  return (
    <div className="h-screen overflow-y-scroll">
      {!visited && <PopUp />}
      <Hero />
      <FeaturedSection />
      <Explore3 />
      <Explore2 />
      <OurAgents />
      <Testimonials />
      <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
        <div className="mt-20">
          <Footer />
        </div>
      </div>
      {/* not in use <Filters /> */}
    </div>
  );
};

export default Home;
