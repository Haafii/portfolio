import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 750);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} h-20 bg-primary w-full flex
      items-center py-5 fixed top-0 z-10
      `}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center "
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Hafis&nbsp;
            <span className="sm:block hidden">Muhammed </span>
          </p>
        </Link>
        {!isMobile ? (
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative ml-auto">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            {toggle && (
              <div className="absolute right-0 top-9 bg-primary py-4 px-10 rounded-lg shadow-lg z-10 ">
                <ul className="list-none flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`font-poppins font-medium cursor-pointer  text-[16px] hover:text-white ${active === link.title ? 'text-white' : 'text-secondary'
                        }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;