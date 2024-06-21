import React, { useRef } from 'react'; 
import { Routes, Route } from 'react-router-dom';

import './styles/index.css';
import { Home, AboutMe, Project, Licenses, NotFound } from './pages';
import { Header, Footer } from './components';
function App() {
  const scrollUpRef = useRef();
  return (
    <div className="App">
      <Header scrollUpRef={scrollUpRef}/>
      <div className="main">
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route path='/projects/:slug' element={<Project/>}/>
          <Route path='/licenses' element={<Licenses/>}/>
          <Route path='/404-not-found' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer scrollUpRef={scrollUpRef}/>
    </div>
  );
}

export default App;
