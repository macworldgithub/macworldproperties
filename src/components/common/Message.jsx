import { Button } from "@mui/material";
import React from "react";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

const Message = ({ listingOwner, contactPerson, email, phone }) => {
  return (
    <div class="container mx-auto">
      <section class="mx-auto mb-32 lg:mt-[-25vh]">
        {" "}
        <div class="container px-3">
          <div class="block rounded-lg min-w-[250px] bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] -mt-[100px] backdrop-blur-[30px]">
            <div class="mb-12 px-4 w-full shrink-0 grow-0 basis-auto">
              <h3 className="font-bold text-xl mb-4 text-center">
                Property Owner Details
              </h3>
              <h3 className="font-bold mb-4 text-center">Listing Owner </h3>

              <div className="flex lg:flex-row sm:flex-col gap-4 mb-[12px] ml-[-2vh] justify-center  items-center">
                <div className="rounded-full  border-2 h-18 w-20 p-1 border-primary">
                  <img
                    className=" h-full w-full rounded-full"
                    src="https://images.bayut.com/thumbnails/172555990-120x90.webp"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-xl">{listingOwner}</h2>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">Contact Person</h3>
                  <p>{contactPerson}</p>
                </div>
                <hr className="border-gray-500" />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">Email</h3>
                  <p>{email}</p>
                </div>
                <hr className="border-gray-500" />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">Phone Number</h3>
                  <p>{phone}</p>
                </div>
                <hr className="border-gray-500" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-semibold text-center">
                  Want to see the Site??
                </h3>
              </div>
              <div className="mt-6 text-center =">
                <a
                  href={`https://wa.me/${phone}`}
                  class="whatsapp_float"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    sx={{ width: "170px" }}
                    variant="contained"
                    color="success"
                  >
                    <AiOutlineWhatsApp size={26} className="mr-2" />
                    Watsapp Me
                  </Button>
                </a>
              </div>
              <div className="mt-6 text-center ">
                <a href={`mailto:${email}`}>
                  <Button sx={{ width: "170px" }} variant="contained">
                    <AiOutlineMail size={26} className="mr-2" />
                    Email ME
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;
