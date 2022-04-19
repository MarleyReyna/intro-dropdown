import React, { useState } from 'react';
import logo from './logo.svg';
import hamburger from './assets/icon-menu.svg';
import close from './assets/icon-close-menu.svg';
import arrowDown from './assets/icon-arrow-down.svg';
import todo from './assets/icon-todo.svg';
import calendar from './assets/icon-calendar.svg';
import reminders from './assets/icon-reminders.svg';
import planning from './assets/icon-planning.svg';

const Header = (props) => {

    const menu = props.menu;
    const setMenu = props.setMenu
    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);

    const featuresList = [
        {
            icon: todo,
            name: 'Todo List'
        },
        {
            icon: calendar,
            name: 'Calendar'
        },
        {
            icon: reminders,
            name: 'Reminders'
        },
        {
            icon: planning,
            name: 'Planning'
        }
    ];

    const companyList = [
        'History',
        'Our Team',
        'Blog'
    ];

    return (
        <header className='flex items-center top-0 left-0 w-full px-4 pt-4 md:px-10 md:pt-5 md:absolute'>
            <img src={logo} alt='snap'/>
            <nav className={menu ? 'flex flex-col items-start absolute w-3/5 right-0 min-h-screen bg-white top-0 pt-20 pl-6 md:items-center md:relative md:w-full md:min-h-0 md:bg-transparent md:flex-row md:justify-between md:pt-0 md:pl-0 transition-all duration-500' : 'md:flex justify-between items-center w-full text-gray-500 md:right-0 md:opacity-100 opacity-0 absolute md:relative -right-full'}>
                <ul className='md:flex lg:ml-15 md:ml-6 lg:gap-10 md:gap-6 md:text-sm text-base font-medium grid grid-cols-1 gap-4'>
                    <li  className='flex flex-col md:items-end hover:cursor-pointer' 
                    onClick={() => setFeatures(!features)}>
                        <button className='hover:text-black flex items-center'>
                            Features <img  className={features ? 'ml-2.5 -rotate-180 transition-all duration-300' : 'ml-2.5 transition-all duration-700'} src={arrowDown} alt=''/>
                        </button>
                        <ul className={features ? 'grid grid-cols-1 gap-y-4 md:shadow-xl md:p-6 md:rounded-2xl md:ml-0 ml-6 md:my-0 my-6 md:absolute md:mt-7 z-10' : 'hidden'}>
                            {featuresList.map((item, index) =>{
                                return(
                                    <li key={index} className='flex items-center'>
                                        <img className='mr-4 max-h-4 w-auto'src={item.icon} alt={item.name}/>
                                        <p className='text-small'>
                                            {item.name}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li onClick={() => setCompany(!company)}>
                        <button className='hover:text-black flex items-center' href='https://github.com/MarleyReyna'>
                            Company <img  className={company ? 'ml-2.5 -rotate-180 transition-all duration-300' : 'ml-2.5 transition-all duration-700'} src={arrowDown} alt=''/>
                        </button>
                        <ul className={company ? 'grid grid-cols-1 gap-y-4 md:shadow-xl md:p-6 md:rounded-2xl md:ml-0 ml-6 md:my-0 my-6 md:absolute md:mt-7 z-10' : 'hidden'}>
                            {companyList.map((item, index) =>{
                                return(
                                    <li className='text-small' key={index}>
                                        <p>
                                            {item}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li>
                        <a className='hover:text-black' href='https://github.com/MarleyReyna'>
                            Careers
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-black' href='https://github.com/MarleyReyna'>
                            About
                        </a>
                    </li>
                </ul>
                <div className='md:flex items-center hidden'>
                    <a className='hover:text-black' href='https://github.com/MarleyReyna'>
                        Login
                    </a>
                    <button className='lg:ml-10 md:ml-6 px-6 py-3 border-2 border-gray-500 border-solid rounded-xl hover:cursor-pointer hover:text-black'>
                        Register
                    </button>
                </div>
            </nav>
            <button className='md:hidden ml-auto z-10' onClick={() => setMenu(!menu)}>
                        <img src={menu ? close : hamburger} alt='open menu button'/>
            </button>
        </header>
    );
}
 
export default Header;