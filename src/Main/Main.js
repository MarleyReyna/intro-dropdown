import React from 'react';
import data from './assets/client-databiz.svg';
import audio from './assets/client-audiophile.svg';
import meet from './assets/client-meet.svg';
import maker from './assets/client-maker.svg';

const Main = (props) => {

    const menu = props.menu;
    const width = props.width;
    const logos = [data, audio, meet, maker];

    return (
        <main className='flex md:flex-row flex-col-reverse max-w-main w-full md:mt-0 mt-6 md:justify-between justify-center items-center mx-auto'>
            <div className='md:items-start flex flex-col items-center md:mt-auto'>
                <h1 className='lg:text-7xl font-bold md:max-w-h1 lg:tracking-h1 md:text-medium md:text-left text-4xl md:mt-0 mt-12 text-center'>
                    Make remote work
                </h1>
                <p className='lg:text-lg md:text-base text-gray-500 lg:max-w-main-text md:max-w-xs md:my-12 md:font-medium mt-4 mb-6 md:px-0 px-4 max-w-sm md:text-left text-center'>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <button className='bg-black text-white rounded-2xl px-7 py-4 font-bold border-solid border-1 border-black hover:bg-transparent hover:text-black transition-all duration-300'>
                    Learn more
                </button>
                <ul className={menu && width <= 768 ? 'lg:flex items-center lg:gap-10 md:gap-6 lg:mt-27 md:grid md:grid-cols-2 md:mt-20 md:mb-0 mb-6 grid grid-cols-4 gap-7 md:px-0 px-4 mt-12 brightness-50 -z-10' : 'lg:flex items-center lg:gap-10 md:gap-6 lg:mt-27 md:grid md:grid-cols-2 md:mt-20 md:mb-0 mb-6 grid grid-cols-4 gap-7 md:px-0 px-4 mt-12'}>
                    {logos.map((item, index) =>{
                        return(
                            <li className='w-fit' key={index}>
                                <img src={item} alt=''/>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={menu && width <= 768 ? 'md:bg-hero-pattern bg-hero-pattern-mobile bg-center md:bg-repeat bg-no-repeat md:w-img w-full md:h-img h-img-mobile bg-contain brightness-50 -z-10' : 'md:bg-hero-pattern bg-hero-pattern-mobile bg-center md:bg-repeat bg-no-repeat md:w-img w-full md:h-img h-img-mobile bg-contain'}/>
        </main>
    );
}
 
export default Main;