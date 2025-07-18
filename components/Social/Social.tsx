"usecl";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

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
      icon: <FaInstagram />,
      path: "https://www.instagram.com/boonspk_/",
    },
  
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/supakorn.boon.2024",
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
