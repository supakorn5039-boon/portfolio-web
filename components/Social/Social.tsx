"usecl";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  const Socials = [
    {
      icon: <FaGithub />,
      path: "https://github.com/supakorn5039-boon",
    },
    {
      icon: <FaLinkedinIn />,
      path: "",
    },
    {
      icon: <FaPhone />,
      path: "",
    },
    {
      icon: <MdEmail />,
      path: "",
    },
  ];

  return (
    <div className={containerStyles}>
      {Socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
