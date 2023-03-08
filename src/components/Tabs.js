import React, { useEffect, useRef, useState } from "react";

const Tabs = ({ tabs, tabsComponents }) => {
  const [activeTab, setActiveTab] = useState(0);
  const ulRef = useRef(null);
  const tabRef = useRef(null);
  const refs = useRef([]);

  const handleClick = (index) => {
    const style = getComputedStyle(ulRef.current);
    let length = 0;

    for (let i = 0; i < index; i++) {
      length += refs.current[i].offsetWidth + parseInt(style.gap);
    }

    tabRef.current.style.width = `${refs.current[index].offsetWidth}px`;
    tabRef.current.style.left = `${length}px`;
    setActiveTab(index);
  };

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    tabRef.current.style.width = `${refs.current[0].offsetWidth}px`;
  }, []);

  return (
    <div>
      <div>
        <ul ref={ulRef} className='text-xs flex gap-8 font-medium text-gray1'>
          {tabs.map((tab, i) => {
            return (
              <li
                onClick={() => handleClick(i)}
                className='pb-2 px-1 cursor-pointer'
                key={i}
                ref={addToRefs}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <div className=' h-[1px] relative rounded-3xl bg-[#eee]'>
          <div
            className=' absolute bg-red rounded-3xl h-full transition-all'
            ref={tabRef}
          ></div>
        </div>
      </div>
      <div>{tabsComponents[activeTab]}</div>
    </div>
  );
};

export default Tabs;
