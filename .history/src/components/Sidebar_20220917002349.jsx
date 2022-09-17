import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { FaTimesCircle } from "react-icons/fa";
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/data/dummy";
const Sidebar = () => {
  const [activeMenu] = useState(true);
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link
              to="/"
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              onClick={() => {}}
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="text-xl text-black rounded-full hover:bg-light-gray mt-4 block md:hidden"
              >
                <FaTimesCircle />
              </button>
            </TooltipComponent>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
