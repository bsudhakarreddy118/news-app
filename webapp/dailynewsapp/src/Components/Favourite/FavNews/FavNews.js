import React from 'react'

export default function FavNews(props) {
    function DeleteFavNewsHandler(favouriteId){
        props.DeleteFav(props.favouriteId);
         }
    return (
        
           
        <div className="container">
        <section>
        
        <div className="row"> 
                    
                    <div className="col-md-3">
                    
                            <div className="card">
                                
                                
                                <div className="card-body">
                                    <div className="text">
                        <i className="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteFavNewsHandler.bind(this,props.favouriteId)}></i>

                        <p className="card-title ">FavouriteId:{props.favouriteId}</p>
                        <p className="card-text ">News Title:{props.favtitle}</p>
                        <p className="card-text ">Author::{props.favauthor}</p>
                        <p className="card-text ">Url:{props.favurl}</p>
                        <p className="card-text ">UrlToImage:{props.favurlToImage}</p>
                        <p className="card-text ">PublishedAt:{props.favpublishedAt}</p>
                        <p className="card-text ">Description:{props.favdescription}</p>
                        <p className="card-text ">Content:{props.favcontent}</p>
                      </div>
                    </div>
                    </div>
                </div>
               
            </div>
            </section>
            </div>
          
 )

    
}
