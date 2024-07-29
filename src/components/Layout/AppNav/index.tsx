import Header from "../AppHeader"
import SideBar from "../AppSidebar"
import { menus } from "./NavItems"

function Nav() {
  return (
    <>
         <div className="flex flex-col h-full">
      <Header />
      <SideBar menus={menus} />
    </div>
    </>
  )
}

export default Nav