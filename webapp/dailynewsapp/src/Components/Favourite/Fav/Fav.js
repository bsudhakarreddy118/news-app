import React, { useState, useEffect } from 'react'
import FavNews from '../FavNews/FavNews';
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
export default function Fav() {

    const [favNews, setfavNews] = useState([])

    

    useEffect(() => {
        // let token = localStorage.getItem('token');
        let emailid1=localStorage.getItem('email');
        fetch(`http://localhost:8084/favorite-service/api/v1/favourite/${emailid1}/getAllFavourites`, {
            // fetch(`http://localhost:8084/favoriteservice/api/v1/favourite/jeeva12345@gamil.com/getAllFavourites`, {
            // headers: {
            //     'token': token
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setfavNews(data.news

                    );
                localStorage.getItem('token', data.token);
                
            })

    }, [])
console.log(favNews);
    function DeleteFavNews(favId) {
        let emailid2=localStorage.getItem('email');
        console.log(favId);
        
        let filteredNews = favNews.filter(x =>x.favoriteId !=favId);
        console.log(filteredNews);
        setfavNews([...filteredNews]);
        let token = localStorage.getItem('token');
        fetch(`http://localhost:8084/favorite-service/api/v1/favourite/${emailid2}/deleteFromFavourite/${favId}`, {
            method: 'DELETE',
            // headers: {
            //     'token': token
            // }
        })
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <Link to="/dashboard" className="nav-link"><h2>DailyNews</h2></Link>
                    <div className="text-right">
                    {/* <button className="btn btn-outline-success" ></button> */}
          {/* <Link to="/dashboard"><Button style={myStyle}><p>Click Me!</p></Button>
</Link> */}
                    </div>
                    </div>
            </nav>
        <div className="col">
              <section >

              
               
                    {
                    favNews.map(item => 
                    <FavNews DeleteFav={DeleteFavNews}
                        key={item.favoriteId}
                        favouriteId={item.favoriteId}
                        favauthor={item.author}
                        favtitle={item.title}
                        favurl={item.url}
                        favurlToImage={item.urlToImage}
                        favpublishedAt={item.publishedAt}
                        favdescription={item.description}
                        favcontent={item.content}

                       
                    />
                    )}
            </section>
            <div data-testid="footdiv" className="footer">
    <span><h4>News Manager &copy; 2021 </h4></span>
    </div>
        </div>
        </div>
    )
}