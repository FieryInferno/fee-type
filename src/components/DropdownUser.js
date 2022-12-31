import React from 'react';
import {Dropdown} from 'react-bootstrap';
import user from '../assets/images/user.jpeg';

// eslint-disable-next-line react/display-name, react/prop-types
const CustomToggle = React.forwardRef(({onClick}, ref) => (
  <img
    src={user}
    width="46px"
    className="rounded-full h-[46px] border-4 cursor-pointer"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

/* eslint-disable max-len */
const DropdownUser = () => (
  <Dropdown align="end">
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"/>

    <Dropdown.Menu align="end">
      <Dropdown.Item eventKey="1" className="flex gap-3 mb-4">
        <img src={user} width="46px" className="rounded-full h-[46px] border-4 cursor-pointer" />
        <div className="flex flex-col">
          <div className="text-[#333333] font-semibold">Patrick Jane</div>
          <div>Administrator</div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item eventKey="1" className="flex gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4">
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
        </svg>
        My Profile
      </Dropdown.Item>
      <Dropdown.Item eventKey="3" className="flex gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4">
          <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"/>
        </svg>
        Change Password
      </Dropdown.Item>
      <Dropdown.Item eventKey="3" className="flex gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4">
          <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/>
        </svg>
        Sign Out
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownUser;
