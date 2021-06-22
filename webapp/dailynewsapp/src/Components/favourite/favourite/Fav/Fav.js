import React,{useState,useEffect} from 'react'
import Favbooks from '../FavNews/FavNews';

export default function Fav(favoriteId) {

    let [favNews ,setFavNews] = useState([]);

    useEffect(() => {
        let token=localStorage.getItem('token');
       fetch(`http://localhost:8084/favorite-service/v1/api/favourite/rishnn@gmail.com/getAllFavourites`,{
           headers:{
               'token':token
           }
       })

       .then(res=>res.json())
       .then(data=>{
           setFavNews(data.favourite);
          // localStorage.getItem('token', data.token);
          // console.log(data);
          favNews=data.favorite;
          console.log(favNews);
       })
       
    }, [])

    function DeleteFavNews(){
        let filteredNews=favNews.filter(x=>x.favoriteId !==favoriteId);
        setFavNews(filteredNews);
      fetch(`http://localhost:8084/favoriteservice/api/v1/favourite/"krishnn@gmail.com"/deleteFromFavourite/124`,{
          method:'DELETE'
      })
    }
    return (
        <div>
             <div className="container mt-3">
            <div className="row">
            <h2 className="bg-warning">Favourite News</h2>
            {
                    favNews.map(item=> 
                    <Favbooks DeleteFav={DeleteFavNews} 
                    key={item.favoriteId} 
                    favoriteId={item.favoriteId}
                    newsTitle={item.newsTitle}
                    source={item.source}
                    author={item.author}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    publishedAt={item.publishedAt}
                    content={item.content}
                   
                    />)
                    

    

            }
            </div>         
        </div>
        </div>
    )
}
