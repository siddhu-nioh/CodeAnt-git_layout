import React, { useState } from 'react';
import { AiOutlineAppstore, AiOutlineCloud, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineLogout, AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/reset.css';

function Sidebar() {
  const [active, setActive] = useState('Repositories');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActive(menu);
    localStorage.setItem('activeMenu', menu);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Account Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="top-navbar">
        <div className="top-navbar-left">
          <img
            className="logo"
            src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" style={{ width: '35px', height: '35px',marginRight:"0.5vw" }}
            alt="ant-logo"
          />
          <span>CodeAnt AI</span>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '1vw' }}>
      <img
            className="logo"
            src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" style={{ width: '35px', height: '35px',marginRight:"0.5vw" }}
            alt="ant-logo"
          />
          <h2>CodeAnt AI</h2></div>
        <Dropdown overlay={userMenu} trigger={['click']}>
          <div className="dropdown">
            <span style={{ color: '#666' }}>UtkarshDhairyaPathak</span> <AiOutlineDown />
          </div>
        </Dropdown>
        <ul>
          <li
            className={active === 'Repositories' ? 'active' : ''}
            onClick={() => handleMenuClick('Repositories')}
          >
            <AiOutlineAppstore /> Repositories
          </li>
          <li
            className={active === 'AI Code Review' ? 'active' : ''}
            onClick={() => handleMenuClick('AI Code Review')}
          >
            <AiOutlineCloud /> AI Code Review
          </li>
          <li
            className={active === 'Cloud Security' ? 'active' : ''}
            onClick={() => handleMenuClick('Cloud Security')}
          >
            <AiOutlineCloud /> Cloud Security
          </li>
          <li
            className={active === 'How to Use' ? 'active' : ''}
            onClick={() => handleMenuClick('How to Use')}
          >
            <AiOutlineQuestionCircle /> How to Use
          </li>
          <li
            className={active === 'Settings' ? 'active' : ''}
            onClick={() => handleMenuClick('Settings')}
          >
            <AiOutlineSetting /> Settings
          </li>
        </ul>
        <div className="sidebar-footer">
          <button>
            <BiSupport /> Support
          </button>
          <button>
            <AiOutlineLogout /> Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
