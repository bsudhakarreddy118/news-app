import React from 'react'

export default function Card(props) {
    return (
       
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    {/* <i className="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteContactHandler.bind(this, props.id)}></i> */}
                    {/* <Link to={`/edit/${props.id}`}><i className="fas fa-pencil-alt fa-lg float-end text-primary px-2"></i></Link> */}
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.urlToImage}</p>
                    <p className="card-text">{props.author}</p>
                    <p className="card-text">{props.description}</p>

                    <p>giuashiudhwaliuhfoq iudiuwqhiuhiufq iuhwiudhiuwfhliuwqf iuewliugfewq</p>
                    
                </div>
            </div>
        </div>
            
     
    )
}
