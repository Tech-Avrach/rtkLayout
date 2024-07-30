import SideBar from "../AppSidebar"
import { menus } from "./NavItems"

function Nav() {
  return (
    <>
    <div className="">
      <SideBar menus={menus} />
    </div>
    </>
  )
}

export default Nav