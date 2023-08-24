import React, { useState } from "react";
import {
  AiFillDollarCircle,
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Commandes",
      icon: TbTruckDelivery,
    },
    {
      id: 2,
      title: "Favoris",
      icon: MdFavorite,
    },
    {
      id: 3,
      title: "Portefeuille",
      icon: FaWallet,
    },
    {
      id: 4,
      title: "Aide",
      icon: MdHelp,
    },
    {
      id: 5,
      title: "Promotions",
      icon: AiFillTag,
    },
    {
      id: 6,
      title: "Meilleures Ventes",
      icon: AiFillDollarCircle,
    },
    {
      id: 7,
      title: "Invitez vos amis",
      icon: FaUserFriends,
    },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex items-center justify-between p-4">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Top<span className="font-bold">Foods</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm cursor-pointer">
          <p className="bg-black text-white rounded-full p-2">Livraison</p>
          <p className="p-2">Collecte</p>
        </div>
      </div>
      {/* search bar */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Gros faim ? Cherchez ici"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>
      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full hover:bg-white hover:text-black duration-150">
        <BsFillCartFill size={20} className="mr-2" /> Panier
      </button>
      {/* mobile menu */}
      {/* overlay */}
      {toggle ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* side menu */}
      <div
        className={
          toggle
            ? "fixed top-0 left-0 w-72 h-screen bg-white z-10 duration-300"
            : "fixed top-0 -left-[100%] w-72 h-screen bg-white z-10 duration-1000"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer hover:scale-125 duration-300"
          onClick={() => setToggle(!toggle)}
        />
        <h2 className="text-2xl p-4">
          Top<span className="font-bold">Foods</span>
        </h2>
        <nav>
          <ul className="flex flex-col px-4 gap-2 text-gray-800">
            {links.map((link) => (
              <li
                className="w-fit text-xl py-4 flex items-center cursor-pointer hover:scale-105 duration-300 hover:text-orange-500"
                key={link.id}
              >
                <link.icon size={25} className="mr-4" />
                {link.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
