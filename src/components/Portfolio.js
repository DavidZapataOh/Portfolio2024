"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const projects = [
  {
    name: "Interactive Mural AI",
    description:
      "Unity project that represents the history of the municipality of El Peñol, Antioquia. Integrated with OpenAI and Google Cloud APIs (for TTS).",
    tags: [
      {
        name: "unity",
        color: "text-blue-500",
      },
      {
        name: "openai",
        color: "text-green-500",
      },
      {
        name: "googlecloud",
        color: "text-pink-500",
      },
    ],
    image: "/portfolio/mural.jpeg",
    source_code_link: "https://github.com/",
  },
  {
    name: "RareSoups",
    description:
      "Multiple NFT collection project (ERC1155). 3 pieces each with 10 units available.",
    tags: [
      {
        name: "nfts",
        color: "text-blue-500",
      },
      {
        name: "rarible",
        color: "text-green-500",
      },
      {
        name: "erc1155",
        color: "text-pink-500",
      },
    ],
    image: "/portfolio/rare.jpeg",
    source_code_link: "https://davidzapata5885.wixsite.com/raresoups",
  },
  {
    name: "ZOBETS",
    description:
      "Web3 Betting Platform Focused on Sports and Streamers.",
    tags: [
      {
        name: "hardhat",
        color: "text-blue-500",
      },
      {
        name: "web3js",
        color: "text-green-500",
      },
      {
        name: "solidity",
        color: "text-pink-500",
      },
    ],
    image: "/portfolio/tripguide.png",
    source_code_link: "https://streamfightersbet.tokendev.io/",
  },
  {
    name: "dAgro",
    description:
      "Linking producers and consumers with blockchain technology for transparent and sustainable agriculture.",
    tags: [
      {
        name: "solidity",
        color: "text-blue-500",
      },
      {
        name: "nextjs",
        color: "text-green-500",
      },
      {
        name: "hackathonwinner",
        color: "text-pink-500",
      },
    ],
    image: "/portfolio/dagro.jpg",
    source_code_link: "https://github.com/0xluisrico/DAgroo",
  },
  {
    name: "KETTE",
    description:
      "We provide solutions in the traceability of supply chains with blockchain technology.",
    tags: [
      {
        name: "hardhat",
        color: "text-blue-500",
      },
      {
        name: "solidity",
        color: "text-green-500",
      },
      {
        name: "hackathonwinner",
        color: "text-pink-500",
      },
    ],
    image: "/portfolio/kette.jpg",
    source_code_link: "https://github.com/DavidZapataOh/KETTE",
  },
  {
    name: "Experia",
    description:
      "Facilitating web3 adoption in restaurants, offering exclusive experiences and crypto payment gateway.",
    tags: [
      {
        name: "solidity",
        color: "text-blue-500",
      },
      {
        name: "web3js",
        color: "text-green-500",
      },
      {
        name: "hackathonwinner",
        color: "text-pink-500",
      },
    ],
    image: "/portfolio/tripguide.png",
    source_code_link: "https://github.com/0xluisrico/Avalanche-bogota",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className=" w-full">
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-thirty p-5 rounded-2xl  w-full"
      >
        <div className="relative w-full h-0 pb-[100%]">
          <img
            src={image}
            alt={name}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/portfolio/website.png"
                alt="source code"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-light text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="p-40 sm:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">See My Modern Works</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
