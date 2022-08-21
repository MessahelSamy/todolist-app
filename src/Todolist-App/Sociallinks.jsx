import React from "react";
import "./SociallinksStyles.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Sociallinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/messahel-samy-salaheddine/",
      style: "rounded-tr-md bg-gradient-to-r from-[#0096FF]  to-[#1363DF]",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MessahelSamy",
      style: " bg-gradient-to-r from-[#29435C]  to-[#152A38] ",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/samy_messahel/?hl=fr",
      style: " bg-gradient-to-r from-[#f6d327] via-[#e725a1] to-[#872bff] ",
    },
    {
      id: 4,
      child: (
        <>
          Gmail <SiGmail size={30} />
        </>
      ),
      href: "mailto:messahel8samy23@gmail.com",
      style:
        "rounded-br-md bg-gradient-to-r from-[#00701a] via-[#ffc400] to-[#d50000] ",
    },
  ];

  return (
    <div className="sociallinks-container">
      <ul>
        <li className="li-sociallinks-linkedin ">
          <a
            className="a-sociallinks"
            href="https://www.linkedin.com/in/messahel-samy-salaheddine/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="li-sociallinks-github">
          <a
            className="a-sociallinks"
            href="https://github.com/MessahelSamy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="li-sociallinks-instagram">
          <a
            className="a-sociallinks"
            href="https://www.instagram.com/samy_messahel/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <FaInstagram size={30} />
          </a>
        </li>

        <li className="li-sociallinks-gmail">
          <a
            className="a-sociallinks"
            href="mailto:messahel8samy23@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Gmail <SiGmail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sociallinks;
