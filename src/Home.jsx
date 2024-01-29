import { useState } from "react";
import SideBar from "./components/SideBar";
import List from "./components/List";
import Header from "./components/Header";
import Csv from "./components/Csv";
const Home = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [showTable, setShowTable] = useState(false);
  function openNavBarFunc() {
    setNavOpen(false);
  }
  function closeNavBarFunc() {
    setNavOpen(true);
  }
  function tableOperation() {
    setShowTable((prev) => !prev);
  }
  return (
    <div className=" bg-[#FAFAFB] relative sm:flex">
      <div
        className={`absolute z-10 h-full bg-white ${
          navOpen ? "hidden" : "visible"
        }`}
      >
        <SideBar closeNavBar={closeNavBarFunc}></SideBar>
      </div>
      <div className="max-sm:hidden sm:h-full sm:bg-white">
        <SideBar></SideBar>
      </div>
      <div className="grow space-y-20">
        <Header openNavBar={openNavBarFunc}></Header>

        <Csv
          tableShow={tableOperation}
          tableStatus={showTable}
        ></Csv>

        <div className={`${showTable ? "visible" : "hidden"}`}>
          <List></List>
        </div>
      </div>
    </div>
  );
};

export default Home;
