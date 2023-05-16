import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, kevv, text } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <img src={kevv} alt="logo" className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain" />
          <img src={text} alt="logo" className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'} hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center top-4 mt-4">
          {toggle ? (
            <div className={`pt-8 pb-6 px-4 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen z-10 menu ${toggle ? 'menu-open' : 'menu-close'}`}>
              <div className="flex justify-end">
                <img src={close} alt="close" className="w-[22px] h-[22px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
              </div>
              <ul className="list-none flex flex-col gap-[1rem] items-end justify-end mt-[2rem] h-[25vh] -ml-[1rem]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${active === nav.title 
                      ? 'text-french' : 'text-eerieBlack'}
                       hover:text-taupe text-[12px] sm:text-[10px] font-normal font-mova uppercase 
                       tracking-[3px] cursor-pointer nav-links px-6 h-[10vh] right-0 text-right`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`} className='text-[20px] text-right m-auto'>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img src={menu} alt="menu" className="w-[34px] h-[34px] object-contain
cursor-pointer" onClick={() => setToggle(!toggle)} />
)}
</div>
</div>
</nav>
);
};

export default Navbar;