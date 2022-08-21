import React from "react";
import "./SociallinksStyles.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Sociallinks() {
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
