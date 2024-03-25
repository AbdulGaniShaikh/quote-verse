import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TrendingTopics from '../components/TrendingTopics';
import UserInfo from '../components/UserInfo';
import { useState } from 'react';

const MainContent = () => {
  const [topicsVisible, setTopicsVisible] = useState(true);
  const onHamburgerClick = () => {
    setTopicsVisible(true);
  };
  return (
    <div>
      <Navbar onHamburgerClick={onHamburgerClick} />
      <div className="flex mt-[60px]">
        <div className="fixed top-[60px] left-0 max-lg:hidden w-[400px] max-xl:w-[300px] ">
          <UserInfo />
        </div>
        <div className="mx-[400px] max-lg:mx-0 max-xl:mx-[300px] w-full border-x border-b border-borderColor">
          <Outlet />
        </div>
        <div className="fixed top-[60px] right-0 max-lg:hidden w-[400px] max-xl:w-[300px] ">
          <TrendingTopics />
        </div>
        <div
          className={`fixed flex flex-row items-center h-screen w-3/4 lg:hidden top-0 ${
            topicsVisible ? 'left-1/4' : 'left-full'
          } duration-300 ease-in-out`}
        >
          <div onClick={() => setTopicsVisible(false)} className="cursor-pointer">
            <i className="fa-solid fa-chevron-right text-[20px] darkBg p-2 border border-borderColor"></i>
          </div>
          <div className="darkBg w-full h-full border-l border-borderColor">
            <TrendingTopics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
