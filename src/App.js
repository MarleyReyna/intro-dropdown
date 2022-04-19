import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import useWindowWidth from './getWindowWidth'
import './App.css';

function App() {

  const width = useWindowWidth()
  const [menu, setMenu] = useState(false);

  return (
    <div className={menu && width <= 768  ? 'flex flex-col md:justify-center min-h-screen md:px-4 sm:px-0 font-global backdrop-brightness-50 overflow-x-hidden' : 'flex flex-col md:justify-center min-h-screen md:px-4 sm:px-0 font-global overflow-x-hidden'}>
      <Header menu={menu} setMenu={setMenu}/>
      <Main menu={menu} width={width}/>
    </div>
  );
}

export default App;
