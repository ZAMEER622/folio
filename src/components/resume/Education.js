import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      {/* Part One */}
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl font-bold md:text-4xl">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA & COMPUTER SCIENCE"
            subTitle="MANIPAL ONLINE"
            result="4.75/5"
            des="MANIPAL UNIVERSITY."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="NWAC"
            result="5.00/5"
            des="Northwest Accreditation Commission (NWAC)."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;