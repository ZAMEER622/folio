import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="object-cover w-full h-64 mb-2 rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ahamed Zameerul</h3>
        <p className="text-lg font-normal text-gray-400">
          Beginner MERN Stack Developer
        </p>
        <p className="text-base tracking-wide text-gray-400">
          I am a passionate MERN stack developer eager to learn and grow in the field of web development. I enjoy building dynamic web applications and am excited to tackle new challenges.
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Phone: <span className="text-lightText">+91 9344812187</span>
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Email: <span className="text-lightText">zzameer2092@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;