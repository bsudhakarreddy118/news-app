import React from 'react'
//import { Link } from 'react-router-dom';
export default function FavNews(props) {
    function DeleteFavNewsHandler(favoriteId){
        props.DeleteFav(favoriteId);
    }
    return (
        <div>
             <div className="col-md-3">
        <div className="card">
            <div className="card-body">
                <i className="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteFavNewsHandler.bind(this, props.favoriteId)}></i>
                {/* <Link to={`/edit/${props.id}`}><i className="fas fa-pencil-alt fa-lg float-end text-primary px-2"></i></Link> */}
                <h6 className="card-title text-success text">{props.favoriteId}</h6>
                <h6 className="card-text text-primary">{props.newsTitle}</h6>
                <h6 className="card-text text-danger">{props.source}</h6>
                <h6 className="card-text ">{props.author}</h6>
                <h6 className="card-text ">{props.title}</h6>
                <h6 className="card-text ">{props.description}</h6>
                <h6 className="card-text ">{props.url}</h6>
                <h6 className="card-text ">{props.urlToImage}</h6>
                <h6 className="card-text ">{props.publishedAt}</h6>
                <h6 className="card-text ">{props.content}</h6>
            </div>
        </div>
    </div>
        </div>
    )
}


