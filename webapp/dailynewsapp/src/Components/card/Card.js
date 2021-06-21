import React from 'react';

export default function Card({ news, saveFunction, disableButton }) {
  const handleSave = () => {
    saveFunction(news);
    alert('Data saved locally');
  };
  return (
    <div className="card mb-3">
      {news.category ? (
        ''
      ) : (
        <img
          className="card-img-top h-25"
          src={news ? news.urlToImage : ''}
          alt="Sorry was not able to fetch img"
        />
      )}
      <div className="card-body">
        <h5 className="card-title h2 text-secondary">
          {news ? news.title : ''}
        </h5>
        <h5 className="card-title h2 text-secondary">
          {news.name ? news.name : ''}
        </h5>
        <p className="card-text">{news ? news.description : ''}</p>
        <p className="card-text">
          {news.category ? 'Category: ' + news.category : ''}
        </p>
        <p className="card-text  text-secondary">
          <small className="text-muted">{news ? news.author : ''}</small>
        </p>
        <p className="card-text">
          <a href={news ? news.url : ''}>Link to news</a>
        </p>
        {disableButton ? (
          <button className="btn btn-primary " onClick={handleSave}>
            Save
          </button>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
