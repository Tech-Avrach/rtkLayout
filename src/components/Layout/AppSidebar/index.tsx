import React, { useEffect, useState } from "react";
import { Menu, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MenuItemWithContent, MenuItemWithLink, MenuItem } from "@/@Typings/interface";

// Type guard functions
function isMenuItemWithLink(menu: MenuItem): menu is MenuItemWithLink {
  return (menu as MenuItemWithLink).to !== undefined;
}

function isMenuItemWithContent(menu: MenuItem): menu is MenuItemWithContent {
  return (menu as MenuItemWithContent).content !== undefined;
}

interface SideBarProps {
  menus: MenuItem[];
}

const SideBar: React.FC<SideBarProps> = ({ menus }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`bg-component h-screen ${open ? "w-60" : "w-20"} duration-500 text-white px-4`}>
      <div className={`py-3 flex ${!open && "pr-[0.85rem]"} justify-end`}>
        <Menu size={26} className="cursor-pointer" onClick={() => {
          setOpen(!open);
          if (open) setOpenSubMenu(null);
        }} />
      </div>
      <div className="flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <div key={i}>
            {isMenuItemWithLink(menu) ? (
              <Link
                to={menu.to}
                className={`group flex items-center text-sm text-white gap-3.5 font-medium p-1.5 hover:bg-hover rounded-md`}
              >
                <div onClick={() => setOpen(true)}>{React.createElement(menu.icon, { size: 25 })}</div>
                <h2
                  className={`whitespace-pre duration-500 text-white ${!open && "opacity-0 translate-x-10 overflow-hidden"}`}
                >
                  {menu.label}
                </h2>
                <h2
                  className={`${open && "hidden"} absolute left-48 bg-component font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.label}
                </h2>
              </Link>
            ) : isMenuItemWithContent(menu) ? (
              <div
                className={`group flex items-center text-sm text-white gap-3.5 font-medium p-1.5 hover:bg-hover rounded-md cursor-pointer`}
                onClick={() => handleSubMenuToggle(menu.label)}
              >
                <div onClick={() => setOpen(true)}>{React.createElement(menu.icon, { size: 25 })}</div>
                <h2
                  className={`whitespace-pre duration-500 text-white ${!open && "opacity-0 translate-x-10 overflow-hidden"}`}
                >
                  {menu.label}
                </h2>
                <h2
                  className={`${open && "hidden"} absolute left-48 bg-component font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.label}
                </h2>
                {open && 
                <span className="ml-auto">
                  {openSubMenu === menu.label ? <ChevronRight size={20} className="rotate-90 duration-300" /> : <ChevronRight size={20} className="duration-300" />}
                </span>}
              </div>
            ) : null}
            {isMenuItemWithContent(menu) && open && (
              <div className={`flex flex-col pl-8 duration-200 overflow-hidden ${openSubMenu === menu.label ? "max-h-screen" : "max-h-0"}`}>
                {menu.content.map((contentItem, j) => (
                  <Link to={contentItem.to}>
                  <div className="mt-2 p-1.5 border-l-2 border-white hover:bg-hover" key={j}>
                    <h3 className="text-gray-300 text-sm hover:text-white pt-1 pb-1 pl-4 hover:rounded-md">
                      {contentItem.label}
                    </h3>
                  </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
