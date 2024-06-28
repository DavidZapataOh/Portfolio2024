"use client";
import React from 'react';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const experiences = [
  {
    title: "Audiovisual Producer",
    company_name: "Darcztops",
    icon: "/company/darcz.png",
    iconBg: "#383E56",
    date: "March 2019 - September 2021",
    points: [
      "Creating engaging top-ranking videos using professional video editing tools and technologies.",
      "Working autonomously to deliver high-quality content for a YouTube channel, managing all aspects from conceptualization to post-production.",
      "Implementing creative design to ensure engaging viewer experience and optimize video performance across various platforms.",
      "Reviewing and enhancing video content to ensure top-notch quality, utilizing constructive feedback from audience engagement and analytics.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Workana",
    icon: "/company/workana.png",
    iconBg: "#E6DEDD",
    date: "September 2021 - February 2022",
    points: [
      "Building custom web applications with technologies such as React.js for a diverse client base.",
      "Independently managing the full project lifecycle, from initial client consultation to final delivery.",
      "Ensuring a seamless user experience through responsive design and cross-browser compatibility.",
      "Iteratively improving code quality and functionality through constant self-review and learning.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Fiverr",
    icon: "/company/fiverr.png",
    iconBg: "#383E56",
    date: "March 2022 - July 2023",
    points: [
      "Developing robust smart contracts using Solidity, catering to a broad range of client needs on Fiverr.",
      "Administering the full smart contract development process, from initial design to final testing and deployment.",
      "Guaranteeing the security and efficiency of the contracts through rigorous testing and optimization.",
      "Augmenting my Solidity expertise through continuous learning and adaptation to the evolving blockchain landscape.",
    ],
  },
  {
    title: "CoFounder & CEO",
    company_name: "HighBlockAcademy",
    icon: "/company/highblock.png",
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Launching a dedicated academy offering comprehensive blockchain development courses.",
      "Designing a diverse curriculum covering areas such as smart contracts, ERC20 tokens, and blockchain integration.",
      "Empowering students with practical skills and knowledge to excel in the blockchain industry.",
      "Contributing to the growing blockchain community by fostering a platform for continuous learning and innovation.",
    ],
  },
  {
    title: "Founder",
    company_name: "TokenDev",
    icon: "/company/tokendev.png",
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Launching TokenDev to provide bespoke blockchain development solutions and consulting services to businesses and entrepreneurs.",
      "Developing a wide range of services including the creation of ERC20, ERC721 tokens, NFT solutions, and advising on blockchain investment strategies.",
      "Empowering clients with practical skills and knowledge to excel in the blockchain ecosystem, from idea conception to project implementation.",
      "Contributing to the expansion of the blockchain community by offering a dedicated platform for continuous learning, innovation, and specialized technical support.",
    ],
  },
  {
    title: "Ambassador",
    company_name: "Avalanche Ambassador DAO",
    icon: "/company/AvalancheAmbassador_Logo.png",
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Promoting and amplifying the Avalanche network, highlighting its features, use cases, and benefits to a global audience.",
      "Organizing and coordinating both in-person and digital events designed to educate and attract new users to the Avalanche platform.",
      "Creating engaging and educational content about Avalanche, including tutorials, articles, and social media posts, to increase visibility and awareness of the platform.",
      "Collaborating closely with other ambassadors, sharing knowledge and supporting their efforts, while also guiding new DAO members and fostering a learning environment.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#231e1f",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #231e1f" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={60}
            height={60}
            objectFit="contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Work = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">See My Experience</h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Work;
