import React, { useEffect, useState } from "react";
import { Menu,ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MenuItem } from "@/@Typings/interface"

interface SideBarProps {
  menus: MenuItem[];
}

const SideBar:React.FC<SideBarProps> = ({menus}) => {

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
  
    // Initial check when component mounts
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
  
    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="inline-flex fixed top-[64px] w-full">
      <div className={`bg-component min-h-screen ${open ? "w-60" : "w-20"} duration-500 text-white px-4`}>
        <div className={`py-3 flex ${!open && "pr-3"} justify-end`}>
          <Menu size={26} className="cursor-pointer" onClick={() => {
            setOpen(!open);
            if (open) setOpenSubMenu(null);
          }} />
        </div>
        <div className="flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <div key={i}>
              <Link
                to={menu.to}
                className={`group flex items-center text-sm text-white gap-3.5 font-medium p-1.5 hover:bg-hover rounded-md`}
                onClick={() => menu.content && handleSubMenuToggle(menu.label)}
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
                {menu.content && open && (
                  <span className="ml-auto">
                    {openSubMenu === menu.label ? <ChevronRight size={20} className="rotate-90 duration-300"/> : <ChevronRight size={20} className="duration-300"/>}
                  </span>
                )}
              </Link>
              {menu.content && open && (
                <div className={`flex flex-col pl-8 duration-200 overflow-hidden ${openSubMenu === menu.label ? "max-h-screen" : "max-h-0"}`}>
                  {menu.content.map((contentItem, j) => (
                    <div className="mt-2 p-1.5 border-l-2 border-white hover:bg-hover" key={j}>
                      <Link to={contentItem.to} className="text-gray-300 text-sm hover:text-white pb-2 pl-4 hover:rounded-md">
                        {contentItem.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full bg-pink-50 mr-3 ml-3 mt-16"></div> */}
    </section>
  );
};

export default SideBar;


// import { useState } from 'react';
// import { User, Plus, List, ChevronDown, ChevronUp, Settings, Home, LogOut, UserCircle, Menu } from 'lucide-react';

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isUsersOpen, setIsUsersOpen] = useState(false);

//   return (
//     <div className={`flex flex-col h-screen p-3 bg-gray-800 shadow ${isCollapsed ? 'w-20' : 'w-60'}`}>
//       <div className="space-y-3">
//         <div className="flex items-center justify-between">
//           <h2 className={`text-xl font-bold text-white ${isCollapsed ? 'hidden' : 'block'}`}>Sidebar</h2>
//           <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
//             <Menu className="w-5 h-5" />
//           </button>
//         </div>
//         <div className="flex-1">
//           <ul className="pt-2 pb-4 space-y-1 text-sm">
//             <li className="rounded-sm">
//               <a href="#" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
//                 <Home className="w-5 h-5" />
//                 {!isCollapsed && <span>Dashboard</span>}
//               </a>
//             </li>
//             <li className="rounded-sm">
//               <div>
//                 <button
//                   onClick={() => setIsUsersOpen(!isUsersOpen)}
//                   className="flex items-center w-full p-2 space-x-3 rounded-md text-gray-100 focus:outline-none"
//                 >
//                   <User className="w-5 h-5" />
//                   {!isCollapsed && <span>Users</span>}
//                   {!isCollapsed && (
//                     <span className="ml-auto">
//                       {isUsersOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
//                     </span>
//                   )}
//                 </button>
//                 {!isCollapsed && isUsersOpen && (
//                   <ul className="pl-6 space-y-1">
//                     <li className="rounded-sm">
//                       <a href="#" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
//                         <Plus className="w-5 h-5" />
//                         <span>Add</span>
//                       </a>
//                     </li>
//                     <li className="rounded-sm">
//                       <a href="#" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
//                         <List className="w-5 h-5" />
//                         <span>List</span>
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </li>
//             <li className="rounded-sm">
//               <a href="#" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
//                 <Settings className="w-5 h-5" />
//                 {!isCollapsed && <span>Settings</span>}
//               </a>
//             </li>
//             <li className="rounded-sm">
//               <a href="#" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
//                 <UserCircle className="w-5 h-5" />
//                 {!isCollapsed && <span>Profile</span>}
//               </a>
//             </li>
//             <li className="rounded-sm">
//               <a href="#" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
//                 <LogOut className="w-5 h-5" />
//                 {!isCollapsed && <span>Logout</span>}
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
