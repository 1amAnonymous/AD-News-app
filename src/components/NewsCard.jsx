import React from 'react'
import newsig from '/news.jpg'
const NewsCard = ({data}) => {
  const description = data?.description?.slice(0,90);
  const title = data?.title?.slice(0,30);

  return (
    <div className="card d-inline-block my-3 mx-3 px-2 py-2 position-relative" style={{width: "21rem", minHeight:"30rem"}}>
    <img src={data.urlToImage? data.urlToImage :  newsig} className="card-img-top h-50 mw-100" alt="..." />
    <div className="card-body ">
        <h5 className="card-title">{title}...</h5>
        <div className='d-flex flex-column '>
        <p className="card-text">{description?description:"See The News"}...</p>
        <a href={data.url??data.url} className="btn btn-primary position-absolute w-75" style={{bottom: "1rem",left:"2.5rem"}} target='_blank'>Read This Article</a>
        </div>
    </div>
    </div>
  )
}

export default NewsCard