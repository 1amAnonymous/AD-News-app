import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewsProvider } from './hooks/NewsContext';
const NewsType = createContext();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewsProvider>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsBoard/>}/> 
      </Routes>
      </BrowserRouter>
      </NewsProvider>
    </>
  )
}

export default App
