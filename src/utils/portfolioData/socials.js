import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa";

const socials = [
  {
    platform: "GitHub",
    username: "fasakinhenry",
    url: "https://github.com/fasakinhenry",
    icon: <FaGithub size={24} />
  },
  {
    platform: "LinkedIn",
    username: "fasakin-henry",
    url: "https://linkedin.com/in/fasakin-henry",
    icon: <FaLinkedin size={24} />
  },
  {
    platform: "Twitter",
    username: "henqsoft",
    url: "https://x.com/henqsoft",
    icon: <FaTwitter size={24} />
  },
  {
    platform: "Dev.to",
    username: "fasakinhenry",
    url: "https://dev.to/fasakinhenry",
    icon: <FaDev size={24} />
  }
];

export default socials;