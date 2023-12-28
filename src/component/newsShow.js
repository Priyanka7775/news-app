import React, { useEffect, useState } from 'react';
import "./newsShow.css";

const NewShow = () => {

    const [newsData, setNewsData] = useState([]);
    const fetchNews = async () => {
        let ressponse = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=1be81700c0264242ba225968e91f8305")
        let data = await ressponse.json();
        setNewsData(data.articles);
    }

    useEffect(() => { fetchNews() }, [])

    return (
        <div className='container'>
        <>
            {
                newsData.map((val) => {
                    console.log(val);
                    return (
                       
                            <div  class='card'>
                            <img src={val.urlToImage} style={{ height: "200px", width: "300px", marginLeft:"40px",marginTop:"10px"}} class="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 class='author'>{val.author}</h5>
                               <hr/>
                                <p className="desc">{val.description} </p>
                                <a href={val.url} class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    )
                })
            }


        </>
        </div>
    )
}

export default NewShow