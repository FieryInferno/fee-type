import React, {useState} from 'react';
import {Nav} from 'react-bootstrap';
import home from '../assets/images/home-run.svg';
import briefcase from '../assets/images/briefcase.svg';

const MENU = [
  {
    icon: home,
    title: 'Dashboard',
  },
  {
    icon: briefcase,
    title: 'Master Data Management',
    children: [
      {title: 'Standard Mark Up'},
      {title: 'Standard Service Fee'},
      {title: 'Fee Type'},
      {title: 'Frequent Traveler Program'},
      {title: 'Standard Ancillary Fee'},
      {title: 'Rating Type'},
      {title: 'Setup Flight Commision'},
      {title: 'Special Dates'},
      {title: 'Corporate Rating'},
    ],
  },
];

/* eslint-disable max-len */
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`ml-0 ${isOpen ? 'w-[17.5rem]' : 'w-[4.6rem]'} overflow-x-hidden bottom-0 float-none left-0 fixed top-0 drop-shadow-lg h-screen z-[1038] bg-[#027F71] transition-all duration-1000`} onMouseOver={(e) => setIsOpen(true)} onMouseOut={(e) => setIsOpen(false)}>
      <Nav defaultActiveKey="/home" className="flex-column mt-[45px] px-[8px] whitespace-nowrap" style={{paddingLeft: '8px'}}>
        {MENU.map(({icon, title, children}, key) =>
          <div key={key}>
            <Nav.Link style={{padding: '8px 20px'}} className={`${isOpen ? 'w-full' : 'w-[3.6rem]'} ${title === 'Master Data Management' ? 'active' : ''}`}>
              <img src={icon} width="18px" className="inline" />
              <p className={`inline ${isOpen ? 'visible text-white ml-2' : 'invisible'}`}>{title}</p>
            </Nav.Link>
            {children?.map(({title: childTitle}, index) =>
              <Nav.Link style={{padding: '8px 20px 8px 40px'}} className={`w-full`} key={index}>
                <p className={`inline ${isOpen ? 'visible ml-2' : 'invisible'} ${childTitle === 'Fee Type' ? 'text-[#FDC300]' : 'text-white'}`}>{childTitle}</p>
              </Nav.Link>,
            )}
          </div>,
        )}
      </Nav>
    </aside>
  );
};

export default Sidebar;
