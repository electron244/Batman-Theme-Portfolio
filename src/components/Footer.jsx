import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1b1f24] text-center py-6 mt-12">
      <div className="flex flex-col items-center gap-2">
        <p>© 2025 Sidharth | All Rights Reserved</p>
        <div className="flex gap-4">
          {[
            {
              icon: "linkedin.svg",
              link: "https://www.linkedin.com/in/sidharth-sinh-48a731321/",
            },
            {
              icon: "instagram.svg",
              link: "https://www.instagram.com/sidharth_sinh24?igsh=MWlkcWhvMjE5bTVsZQ==",
            },
            { icon: "github.svg", link: "https://github.com/electron244" },
            { icon: "gmail.svg", link: "mailto:zalasidharth244@gmail.com" },
          ].map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`./${item.icon}`}
                alt={item.icon}
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
