import React, { useRef, useState } from "react";
import { PencilIcon, TickIcon } from "../assets/Svgs";

const Editable = ({ text }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState({ text });
  const ref = useRef(null);
  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      document.getElementById("text").tabIndex(1);
      ref.current.focus();
    } else {
      setEdit(false);
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className=' relative  '>
      {/* border p-4 */}
      <div
        id='text'
        ref={ref}
        value={value}
        onChange={(e) => handleChange(e)}
        contentEditable={edit}
        className={` focus:outline-none leading-7   rounded-md text-sm text-textGray  ${
          edit && "border p-4"
        }`}
      >
        Sunt excepteur consectetur quis commodo ullamco cillum cupidatat
        pariatur elit laboris excepteur exercitation voluptate officia.
      </div>
      {edit ? (
        <div
          className='absolute top-0 right-0 h-8 w-8 rounded-full flex items-center justify-center  hover:bg-green-100 cursor-pointer'
          onClick={handleEdit}
        >
          <TickIcon stroke='#328930' className=' w-4 h-4' />
        </div>
      ) : (
        <div
          className='absolute top-0 right-0 h-8 w-8 rounded-full flex items-center justify-center  hover:bg-pink cursor-pointer'
          onClick={() => setEdit(true)}
        >
          <PencilIcon fill='#BE212A' className='w-4 h-4 ' />
        </div>
      )}
    </div>
  );
};

export default Editable;
