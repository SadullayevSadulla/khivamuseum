import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/header';  
import MenuBar from './components/MenuBar/menuBar';  
import HeaderInfo from './pages/HeaderInfo/headerInfo';  
import Main from './pages/Main/main';  
import MainTez from './pages/MainTez/MainTez';
import MainBoy from './pages/MainBoy/mainBoy';  
import MainG from './pages/MainG/mainG';  
import MainCard from './pages/MainCard/mainCard';  
import About from './pages/About/About';  
import Collection from './pages/collection/collection';  
import GalleryComp from './pages/GALEREYA/galereya';  
import News from './pages/News/news';  
import Announcements from './pages/Announcements';  
import Aloqa from './pages/Aloqa/aloqa';  
import Profil from './pages/Profil/Profil';  
import Footer from './components/Footer/footer';  

import "./App.css"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function onLoad() {
      setTimeout(() => setLoading(false), 200);
    }

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header />
        <MenuBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeaderInfo />
                <Main />
                <MainTez />
                <MainBoy />
                <MainG />
                <MainCard />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/gallery" element={<GalleryComp/>} />
          <Route path="/news" element={<News />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/contact" element={<Aloqa />} />
          <Route path="/profil" element={<Profil/>} />
        </Routes>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;