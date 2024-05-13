import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const INFORMATION = [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
    {
      title: "Manufactures",
      link: "#",
    },
    {
      title: "Tracking Order",
      link: "#",
    },
    {
      title: "Privacy & Policy",
      link: "#",
    },
    {
      title: "Terms & Conditions",
      link: "#",
    },
  ];
  const ACCOUNTS = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Login",
      link: "#",
    },
    {
      title: "My Cart",
      link: "#",
    },
    {
      title: "My Account",
      link: "#",
    },
  ];
  return (
    <footer class="bg-gray-800 text-white">
      <div class=" w-11/12 mx-auto grid max-w-full gap-y-8 gap-x-12  py-10 md:grid-cols-2 xl:grid-cols-4">
        <div class="max-w-sm">
          <div class="mb-6 flex h-12 items-center space-x-2">
            <span class="text-2xl font-bold">
              Logo-<span class="text-orange-500">Here</span>.
            </span>
          </div>
          <div class="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </div>
          <div
            className="flex gap-3 mt-5"
            style={{ fontSize: "clamp(18px,4vw,30px)" }}
          >
            <FaFacebook />

            <FaXTwitter />

            <FaLinkedin />

            <FaYoutube />
          </div>
        </div>

        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4 text-[16px]">
            INFORMATION
          </div>
          <nav aria-label="Footer Navigation">
            <ul class="space-y-3">
              {INFORMATION?.map((item) => (
                <li>
                  <Link
                    class="hover:text-orange-500 hover:underline underline-offset-4"
                    to={item?.link}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4 text-[16px]">MY ACOUNT</div>
          <nav aria-label="Footer Navigation ">
            <ul class="space-y-3">
              {ACCOUNTS?.map((item) => (
                <li>
                  <Link
                    class="hover:text-orange-500 hover:underline underline-offset-4"
                    to={item?.link}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4 text-[16px] font-Raleway">
            NEWSLETTER
          </div>
          <div class="flex flex-col">
            <div class="mb-4">
              <input
                type="email"
                class="focus:outline mb-2 block h-14 w-full  bg-transparent border  px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button class="block  bg-[#ff7004] px-6 py-3 font-medium text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class=" w-11/12 mx-auto flex max-w-full flex-col gap-y-4 py-3 text-center  sm:flex-row sm:justify-between sm:text-left">
          <div class="">
            © 2024 Developer | All Rights Reserved | By Muhammad Ali
          </div>
          <div class="flex text-center items-center justify-center gap-3">
            <a class="" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a class="" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
