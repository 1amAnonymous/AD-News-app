import React, { createContext, useState } from "react";


const NewsContext = createContext(null);
const NewsDispatchContext = createContext(null);

function NewsProvider({ children }) {
    const [News, setNews] = useState(null);
    const [searchContent,setSearchContent] = useState(null);
    return (
      <NewsContext.Provider value={{News,setNews,searchContent,setSearchContent}}>
        
          {children}
        
      </NewsContext.Provider>
    );
  }

  export { NewsProvider, NewsContext };