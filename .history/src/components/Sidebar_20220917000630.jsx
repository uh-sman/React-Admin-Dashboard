import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancle } from "react-icons/md";
import { Tooltip } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link to="/" className="items-center" onClick={() => {}}>
              <SiShopware />
              <span>Shoppy</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
