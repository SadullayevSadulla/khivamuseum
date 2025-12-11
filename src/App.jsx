import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/header";
import MenuBar from "./components/MenuBar/menuBar";
import Footer from "./components/Footer/footer";
import About from "./pages/About/About";  
import HeaderInfo from "./pages/HeaderInfo/headerInfo";
import Main from "./pages/Main/main";
import MainTez from "./pages/MainTez/MainTez";
import MainBoy from "./pages/MainBoy/mainBoy";
import MainG from "./pages/MainG/mainG";
import MainCard from "./pages/MainCard/mainCard";
import Collection from './pages/collection/collection';  
import Gallery from './pages/MainG/mainG';
import GalleryPage from './pages/MainG/mainG';
import GalleryComp from './pages/GALEREYA/galereya';
import News from './pages/News/news';
import Elonlar from './pages/Elonlar/elonlar';
import Aloqa from './pages/Aloqa/aloqa';
import Profil from './pages/Profil/Profil';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1) Agar siz sahifadagi barcha rasm/font kabi resurslarni kutmoqchi bo'lsangiz:
    // window.load hodisasini tinglang
    function onLoad() {
      // kichik kechiktirishni qo'shamiz, vizual uchun
      setTimeout(() => setLoading(false), 200);
    }

    if (document.readyState === 'complete') {
      // agar allaqachon yuklangan bo'lsa
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  // Agar loading true bo'lsa, faqat preloader ko'rsatish (agar xohlasangiz Header/MenuBar ko'rsatilmasin)
  if (loading) {
    return <Preloader />;
  }

  return (
    <>
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
        <Route path="/elonlar" element={<Elonlar/>} />
        <Route path="/contact" element={<Aloqa/>} />
        <Route path="/profil" element={<Profil/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;