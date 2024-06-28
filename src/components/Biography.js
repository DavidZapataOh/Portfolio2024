import React from 'react';
import { SiSolidity, SiJavascript, SiGit, SiReact, SiWeb3Dotjs, SiChainlink, SiIpfs, SiRust, SiNodedotjs  } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";

  const socialLinks = [
    { href: "https://soliditylang.org/", icon: SiSolidity },
    { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: SiJavascript },
    { href: "https://react.dev/", icon: SiReact },
    { href: "https://web3js.org/", icon: SiWeb3Dotjs },
    { href: "https://hardhat.org/", icon: FaHardHat },
    { href: "https://git-scm.com/", icon: SiGit },
    { href: "https://chain.link/", icon: SiChainlink },
    { href: "https://ipfs.tech/", icon: SiIpfs },
    { href: "https://www.rust-lang.org/", icon: SiRust },
    { href: "https://nodejs.org/en", icon: SiNodedotjs },
  ];

const Biography = () => {
  return (
    <section className="py-20 px-20 lg:px-12 md:px-6 bg-dark">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 items-center">
        <div className='flex justify-center'>
          <img src="/davidavax.jpg" alt="David Avalanche" className="rounded-full w-3/4 mx-auto" />
        </div>
        <div>
          <h2 className="text-3xl md:text-2xl font-bold mb-4">Biography</h2>
          <p className="text-xl md:text-lg mb-4">I am a technology and innovation enthusiast with a special focus on full-stack blockchain development. I love participating in hackathons and sharing my knowledge through IRL talks, events, and digital content.</p>
          <h3 className="text-2xl  md:text-xl font-bold mb-2">About Me</h3>
          <p className="text-xl md:text-lg"><span className="text-primary">Location:</span> Medellín, Colombia</p>
          <p className="text-xl md:text-lg"><span className="text-primary">Age:</span> 22 years old</p>
          <p className="text-xl md:text-lg"><span className="text-primary">Hobbies:</span> Football, Tokenomics, Content Creation, Streaming, Traveling, Public Speaking</p>
          <p className="text-xl md:text-lg">Hackathon Enthusiast</p>
          <div>
            <h3 className="text-3xl md:text-2xl font-bold mt-4 mb-2">Stack</h3>
            <div className="mt-2 space-y-4">
            <div className="flex space-x-4">
              {socialLinks.slice(0, 5).map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-thirty bg-primary rounded-full sm:p-2 md:p-4 p-6 hover:bg-secundary"
                >
                  <Icon size={40} />
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              {socialLinks.slice(5).map(({ href, icon: Icon }, index) => (
                <a
                  key={index + 5}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-thirty bg-primary rounded-full sm:p-2 md:p-4 p-6 hover:bg-secundary"
                >
                  <Icon size={40} />
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
