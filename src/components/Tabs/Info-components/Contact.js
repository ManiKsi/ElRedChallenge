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
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    if (edit) {
      let array = [...tempData];
      if (tempEmails) {
        array[editIndex].emails.push(...tempEmails);
      }
      if (tempEmails) {
        array[editIndex].phones.push(...tempPhones);
      }
      setTempData(array);
      setEdit(false);
    }
    if (!edit) {
      setDrawerOpen(false);
    }
    setData(tempData);
  };
  const handleDelete = (i) => {
    setTempData(tempData.filter((value, e) => e !== i));
  };
  const handleEdit = (i) => {
    setEditIndex(i);
    setEdit(true);
  };
  const addEmail = (e) => {
    e.preventDefault();

    setTempEmails([...tempEmails, e.target[0].value]);
    e.target.reset();
  };
  const addPhone = (e) => {
    e.preventDefault();
    setTempPhones([...tempPhones, e.target[0].value]);
    e.target.reset();
  };
  const handleBackBtn = () => {
    if (!edit) {
      setDrawerOpen(false);
    }
    if (edit) {
      setEdit(false);
    }
  };

  return (
    <>
      <SideDrawer open={drawerOpen}>
        <div>
          <h4 className='text-xl font-semibold flex items-center'>
            <div className=' cursor-pointer' onClick={() => handleBackBtn()}>
              <LeftArrow className='h-4 w-4 mr-2' />
            </div>
            Contact
          </h4>
          <span className='text-sm text-gray1'>
            Please provide compony's email & contacts
          </span>
        </div>

        {edit ? (
          <div className='flex flex-col '>
            <form onSubmit={(e) => addEmail(e)} className='my-4 mt-10'>
              <div className='flex flex-col gap-2 mb-4'>
                <label className='text-xs font-semibold'>Email ID</label>
                {tempEmails?.length > 0 &&
                  tempEmails?.map((email) => (
                    <p key={email} className='text-xs '>
                      {email}
                    </p>
                  ))}
                <input
                  placeholder='eg. salestam@br.in'
                  required
                  type='email'
                  className=' bg-bg h-10 px-3 text-xs rounded-md focus:outline-none'
                />
              </div>
              <button
                type='submit'
                className='bg-pink w-full text-red font-semibold rounded-md h-10 text-sm flex items-center justify-center'
              >
                <AddIcon className='h-4 w-4 mr-1' stroke='#BE212A' /> Add More
              </button>
            </form>
            <form className='my-4' onSubmit={(e) => addPhone(e)}>
              <div className='flex flex-col gap-2 mb-4'>
                <label className='text-xs font-semibold'>Contact Number</label>
                {tempPhones?.length > 0 &&
                  tempPhones?.map((phone) => (
                    <p key={phone} className='text-xs '>
                      {phone}
                    </p>
                  ))}
                <input
                  placeholder='eg. 8511591740'
                  className=' bg-bg h-10 px-3 text-xs rounded-md focus:outline-none'
                />
              </div>
              <button
                type='submit'
                className='bg-pink w-full text-red font-semibold rounded-md h-10 text-sm flex items-center justify-center'
              >
                <AddIcon className='h-4 w-4 mr-1' stroke='#BE212A' /> Add More
              </button>
            </form>
          </div>
        ) : (
          <div className='flex flex-col flex-grow overflow-y-scroll scroll-hide gap-4 py-4 '>
            {tempData.map((item, i) => {
              return (
                <div
                  key={i}
                  className='border rounded-md p-4 shrink-0      font-medium  '
                >
                  <div className='flex justify-between '>
                    <div className='text-sm font-semibold flex items-center'>
                      <AddressBookIcon
                        fill='#bababa'
                        className='md:w-5 md:h-5 w-4 h-4 mr-2'
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
                  <div className='flex   md:mt-6 mt-4'>
                    <MailIcon
                      fill='#bababa'
                      className='w-4 h-4 mr-1 mt-[2px]'
                    />
                    <div className=' md:text-sm text-xs pr-4'>
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
                    <div className=' md:text-sm text-xs pr-4'>
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
      <div className='border rounded-md md:p-4 p-3 shrink-0  w-full   md:min-h-[160px] md:w-[32%] min-h-[120px]    font-medium  '>
        <div className='flex justify-between '>
          <div className='md:text-lg text-base font-semibold flex items-center'>
            <AddressBookIcon
              fill='#bababa'
              className='md:w-5 md:h-5 mr-2 w-4 h-4'
            />{" "}
            Contact{" "}
          </div>
          <div
            onClick={() => setDrawerOpen(!drawerOpen)}
            className=' cursor-pointer md:h-8 md:w-8  rounded-full flex justify-center items-center hover:bg-pink'
          >
            <PencilIcon fill='#BE212A' className='w-4 h-4 cursor-pointer' />{" "}
          </div>
        </div>
        {data[0]?.emails && (
          <div className='flex   md:mt-6 mt-4'>
            <MailIcon
              fill='#bababa'
              className='md:w-5 md:h-5 w-4 h-4 mr-1 mt-[2px]'
            />
            <div className=' md:text-sm text-xs pr-4'>
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
              <div className=' ml-auto shrink-0 md:w-8 md:h-8 w-7 h-7 font-bold bg-pink rounded-full flex justify-center items-center'>
                <span className=' text-red text-xxs'>+ {data.length - 1}</span>
              </div>
            )}
          </div>
        )}
        {data[0]?.phones && (
          <div className='flex mt-3'>
            <PhoneIcon
              fill='#bababa'
              className='md:w-4 md:h-4 w-3 h-3 mr-1 mt-[2px]'
            />
            <div className=' md:text-sm text-xs pr-4'>
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
