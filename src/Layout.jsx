import React from 'react';
import Header from './Components/Header/header';
import Footer,{src} from './Components/Footer/footer';


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <main>
          {
            children
          }
        </main>
      <Footer/>
    </>
  );
}

export default Layout;