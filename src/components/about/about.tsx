"use client";

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import LivingRoom from "/public/assets/images/LivingRoom.png";

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "-220px 0px 0px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Fade-in variant
  const elementVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      id="aboutus"
      className="pt-[220px] flex flex-col items-center justify-center"
    >
      <motion.div
        className="text-center space-y-7 lg:px-[58px]"
        initial="hidden"
        animate={controls}
        variants={elementVariants}
      >
        <h1 className="font-libre-baskerville italic text-2xl lg:text-4xl uppercase">
          WELCOME !
        </h1>
      </motion.div>

      <motion.div
        className="text-center space-y-7 lg:px-[58px]"
        initial="hidden"
        animate={controls}
        variants={elementVariants}
      >
        <h3 className="font-mourich font-bold text-xl lg:text-[80px] uppercase">
          HELLO, I&apos;M TOBY
        </h3>
      </motion.div>

      <motion.div
        className="text-center space-y-7 lg:px-[58px]"
        initial="hidden"
        animate={controls}
        variants={elementVariants}
      >
        <p className="font-the-youngest text-base lg:text-[32px]">
          Villa curator. Sunset chaser. Your Bali insider. I&apos;m here to
          transform your island escape into the getaway you&apos;ve been
          scrolling for. My villas aren&apos;t just places to stay—they&apos;re
          experiences designed for those moments worth posting. From sunrise
          coffee on private balconies to midnight dips under the stars,
          I&apos;ve crafted each space to be your perfect Bali backdrop.
        </p>
      </motion.div>

      <motion.div
        className="-rotate-[8.63deg] mt-20 text-left"
        initial="hidden"
        animate={controls}
        variants={elementVariants}
      >
        <h1 className="font-libre-baskerville italic text-4xl lg:text-[64px]">
          This is Villa Sophie,
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row-reverse my-[61.25px] text-center lg:items-end lg:justify-between lg:w-full lg:mx-8">
        <motion.div
          className="overflow-hidden relative w-[326px] h-[191.5px] lg:w-[969px] lg:h-[569.2px] mx-auto lg:mx-0"
          initial="hidden"
          animate={controls}
          variants={elementVariants}
        >
          <Image
            src={LivingRoom}
            alt="Living Room"
            fill
            priority
            className="rounded-3xl object-cover"
          />
        </motion.div>
        <div
          ref={ref}
          className="my-[20.5px] mx-[14.5px] lg:mx-14 max-w-[297px] space-y-6 font-roca-one text-base"
        >
          <div className="flex flex-col">
            <span className="font-bold xl:text-2xl">Located in Uluwatu,</span>
            <span className="xl:text-2xl">
              {" "}
              known for a peaceful escape in Bali
            </span>
          </div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={elementVariants}
          >
            <span className="lg:text-2xl">
              <span
                className={`${
                  inView ? "bg-toby-forest-ash text-toby-white" : ""
                }`}
              >
                {" "}
                4 Bedrooms{" "}
              </span>{" "}
              with swimming pool &{" "}
              <span
                className={`${
                  inView ? "bg-toby-forest-ash text-toby-white" : ""
                }`}
              >
                {" "}
                spacious living area{" "}
              </span>{" "}
              for you to{" "}
              <span className="font-extralight italic">
                {" "}
                Wine Down with Toby
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
