import React, { useState } from "react";
import {
  AddIcon,
  AddressBookIcon,
  LeftArrow,
  MailIcon,
  PencilIcon,
  PhoneIcon,
  TrashIcon,
} from "../../../assets/Svgs";
import SideDrawer from "../../SideDrawer";

const Contact = () => {
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [tempEmails, setTempEmails] = useState([]);
  const [tempPhones, setTempPhones] = useState([]);
  const [data, setData] = useState([
    {
      title: "Sales Team",
      emails: ["salesteam@break.in", "salesteam2@break.in"],
      phones: ["9133019310", "8923242443"],
    },
    {
      title: "Management Team",
      emails: ["salesteam@break.in", "salesteam2@break.in"],
      phones: ["9133019310", "8923242443"],
    },
    {
      title: "Marketing Team",
      emails: ["salesteam@break.in", "salesteam2@break.in"],
      phones: ["9133019310", "8923242443"],
    },
    {
      title: "Marketing Team",
      emails: ["salesteam@break.in", "salesteam2@break.in"],
      phones: ["9133019310", "8923242443"],
    },
  ]);
  const [tempData, setTempData] = useState([...data]);
  const handleSave = () => {
    setData(tempData);
  };
  const handleDelete = (i) => {
    setTempData(tempData.filter((value, e) => e !== i));
  };
  const handleEdit = (i) => {
    setEditIndex(i);
    setEdit(true);
  };

  return (
    <>
      <SideDrawer open={true}>
        <div>
          <h4 className='text-xl font-semibold flex items-center'>
            <LeftArrow className='h-4 w-4 mr-2' />
            Contact
          </h4>
          <span className='text-sm text-gray1'>
            Please provide compony's email & contacts
          </span>
        </div>

        {edit ? (
          <div className='flex flex-col '>
            <div className='my-4 mt-10'>
              <div className='flex flex-col gap-2 mb-4'>
                <label className='text-xs font-semibold'>Email ID</label>
                <input
                  placeholder='eg. salestam@br.in'
                  className=' bg-bg h-10 px-3 text-xs rounded-md'
                />
              </div>
              <button className='bg-pink w-full text-red font-semibold rounded-md h-10 text-sm flex items-center justify-center'>
                <AddIcon className='h-4 w-4 mr-1' stroke='#BE212A' /> Add More
              </button>
            </div>
            <div className='my-4'>
              <div className='flex flex-col gap-2 mb-4'>
                <label className='text-xs font-semibold'>Contact Number</label>
                <input
                  placeholder='eg. 8511591740'
                  className=' bg-bg h-10 px-3 text-xs rounded-md'
                />
              </div>
              <button className='bg-pink w-full text-red font-semibold rounded-md h-10 text-sm flex items-center justify-center'>
                <AddIcon className='h-4 w-4 mr-1' stroke='#BE212A' /> Add More
              </button>
            </div>
          </div>
        ) : (
          <div className='flex flex-col flex-grow overflow-y-scroll scroll-hide gap-4 py-4 '>
            {tempData.map((item, i) => {
              return (
                <div
                  key={i}
                  className='border rounded-md p-4 shrink-0  h-40    font-medium  '
                >
                  <div className='flex justify-between '>
                    <div className='text-sm font-semibold flex items-center'>
                      <AddressBookIcon
                        fill='#bababa'
                        className='w-5 h-5 mr-2'
                      />{" "}
                      {item.title}
                    </div>
                    <div className='flex gap-4'>
                      <div
                        className=' cursor-pointer h-8 w-8  rounded-full flex justify-center items-center hover:bg-pink'
                        onClick={() => handleDelete(i)}
                      >
                        <TrashIcon fill='#BE212A' className='w-4 h-4  ' />
                      </div>
                      <div
                        onClick={() => handleEdit(i)}
                        className=' cursor-pointer h-8 w-8  rounded-full flex justify-center items-center hover:bg-pink'
                      >
                        <PencilIcon
                          fill='#BE212A'
                          className='w-4 h-4 cursor-pointer'
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className='flex   mt-6'>
                    <MailIcon
                      fill='#bababa'
                      className='w-4 h-4 mr-1 mt-[2px]'
                    />
                    <div className=' text-sm pr-4'>
                      <span>
                        {item?.emails?.map((email, i) => {
                          let string = `${email} ${
                            i < tempData[i]?.emails.length - 1 ? " / " : ""
                          }`;
                          return string;
                        })}
                      </span>
                    </div>
                  </div>
                  <div className='flex mt-3'>
                    <PhoneIcon
                      fill='#bababa'
                      className='w-4 h-4 mr-1 mt-[2px]'
                    />
                    <div className=' text-sm pr-4'>
                      <span>
                        +91{" "}
                        {item?.phones?.map((phone, i) => {
                          let string = `${phone} ${
                            i < tempData[i]?.phones.length - 1 ? " / " : ""
                          }`;
                          return string;
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={() => handleSave()}
          className='bg-red rounded-md  text-white py-2 mt-auto'
        >
          Save
        </button>
      </SideDrawer>
      <div className='border rounded-md p-4 shrink-0  h-40   w-[32%] font-medium  '>
        <div className='flex justify-between '>
          <div className='text-lg font-semibold flex items-center'>
            <AddressBookIcon fill='#bababa' className='w-5 h-5 mr-2' /> Contact{" "}
          </div>
          <div className=' cursor-pointer h-8 w-8  rounded-full flex justify-center items-center hover:bg-pink'>
            <PencilIcon fill='#BE212A' className='w-4 h-4 cursor-pointer' />{" "}
          </div>
        </div>
        {data[0]?.emails && (
          <div className='flex justify-between  mt-6'>
            <MailIcon fill='#bababa' className='w-4 h-4 mr-1 mt-[2px]' />
            <div className=' text-sm pr-4'>
              <span>
                {data[0]?.emails?.map((email, i) => {
                  let string = `${email} ${
                    i < data[0].emails.length - 1 ? " / " : ""
                  }`;
                  return string;
                })}
              </span>
            </div>
            {data.length - 1 > 0 && (
              <div className=' shrink-0 w-8 h-8 font-bold bg-pink rounded-full flex justify-center items-center'>
                <span className=' text-red text-xxs'>+ {data.length - 1}</span>
              </div>
            )}
          </div>
        )}
        {data[0]?.phones && (
          <div className='flex mt-3'>
            <PhoneIcon fill='#bababa' className='w-4 h-4 mr-1 mt-[2px]' />
            <div className=' text-sm pr-4'>
              <span>
                +91{" "}
                {data[0]?.phones?.map((phone, i) => {
                  let string = `${phone} ${
                    i < data[0].phones.length - 1 ? " / " : ""
                  }`;
                  return string;
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
