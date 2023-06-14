import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine, RiTranslate } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Início",
    page: "#home",
  },
  {
    label: "Sobre",
    page: "#about",
  },
  {
    label: "Projetos",
    page: "#projects",
  },
];
function handleNavigation() {
  window.location.href = "/En";
}
export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="#home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Gabriel Henrique</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounder-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 mr:space-x-6">
              {NAV_ITEMS.map((item, id) => {
                return (
                  <Link
                    key={id}
                    href={item.page}
                    className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                );
              })}

              {currentTheme === "dark" ? (
                <button
                  className="bg-slate-100 p-2 rounded-xl mr-5"
                  onClick={() => setTheme("ligh")}
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  className="bg-slate-100 p-2 rounded-xl mr-5"
                  onClick={() => setTheme("dark")}
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
              <button
                onClick={() => handleNavigation()}
                className="bg-slate-100 p-2 rounded-xl "
              >
                <RiTranslate size={25} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
