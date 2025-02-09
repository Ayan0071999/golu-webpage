"use client";
import { useState } from "react";
import { Menu, X, Home, Image, Music, Heart, MessageCircle, Star, Clock, Gift, Smile, Feather, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleNavbar}
        className="fixed top-6 left-6 z-50 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Navbar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-pink-300 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Close Button */}
        <button
          onClick={toggleNavbar}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition"
        >
          <X size={24} />
        </button>

        {/* Navbar Content */}
        <nav className="flex flex-col p-6 space-y-4 mt-10">
          {[
            { name: "Home", icon: <Home />, id: "message" },
            { name: "Gallery", icon: <Image />, id: "gallery" },
            { name: "Music", icon: <Music />, id: "music" },
            { name: "Valentine", icon: <Heart />, id: "valentine" },
            { name: "Question", icon: <MessageCircle />, id: "question" },
            { name: "LoveYou", icon: <Heart />, id: "loveyou" },
            { name: "Quotes", icon: <Star />, id: "quotes" },
            { name: "Timeline", icon: <Clock />, id: "timeline" },
            { name: "Favourites", icon: <Gift />, id: "herfav" },
            { name: "Click Me", icon: <Smile />, id: "momo" },
            { name: "Love Notes", icon: <Feather />, id: "lovenotes" },
            { name: "Anniversary", icon: <Sparkles />, id: "surprise" },
          ].map(({ name, icon, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeNavbar}
              className="flex items-center space-x-3 text-lg hover:bg-pink-400 px-4 py-2 rounded-lg transition-all"
            >
              {icon}
              <span>{name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
