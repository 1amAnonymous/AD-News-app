import React, { useContext, useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useParams } from 'react-router-dom';
import { NewsContext } from '../hooks/NewsContext';

const NewsBoard = () => {
  
  const [newsData,setNewsData] = useState();
  const [dataJson,setDataJson] = useState([]);
  const News = useContext(NewsContext);
  useEffect(()=>{
    
      newsFetchHome();  //for first reload
    
  },[])
  useEffect(()=>{
    if(News.News){
      newsFetchHome(News.News); //for country selection
      
    }
  },[News.News])

  useEffect(()=>{
     if(News.searchContent) {
      newsFetchSearch(News.searchContent); //for search topic
     }
  },[News.searchContent])

  const newsFetchSearch = async(content)=>{
    
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if(dd<10) 
      {
          dd='0'+dd;
      }
    if(mm<10) 
      {
          mm='0'+(mm-1);
      } 
      today = yyyy +'-'+ mm+'-'+dd;
    const url=`https://newsapi.org/v2/everything?q=${content}&from=${today}&sortBy=publishedAt&apiKey=67f3265bc4304c27a62fc9d81b5966ca`;
      const response = await fetch(url);
      const data = await response.json();
      setDataJson(data.articles);
      console.log(data.articles);
  }

  const newsFetchHome = async(country="in")=>{
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if(dd<10) 
      {
          dd='0'+dd;
      }
    if(mm<10) 
      {
          mm='0'+mm;
      } 
      today = yyyy +'-'+ mm+'-'+dd;
      const url=`https://newsapi.org/v2/top-headlines?country=${country}&from=${today}&sortBy=publishedAt&apiKey=67f3265bc4304c27a62fc9d81b5966ca`;
      const response = await fetch(url);
      const data = await response.json();
      setDataJson(data.articles);
      console.log(data.articles);
      
  }
  return (
        <>
        <div className='d-flex justify-content-center'>
          <h1 className=' display-1 ' style={{fontWeight:"bold",color:"gray"}}>Head Lines</h1>
        </div>
       <div className='d-flex justify-content-center'>
           <span className='d-flex justify-content-md-center flex-wrap flex-column flex-lg-row'>
           {dataJson?.map((data,index)=>(
            <NewsCard key={index} data={data} />
           ))}
           </span>
       </div>
       </>
   
  )
}

export default NewsBoard