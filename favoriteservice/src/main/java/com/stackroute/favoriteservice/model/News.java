package com.stackroute.favoriteservice.model;

public class News {

        private String favoriteId;
        private String newsTitle;
        private String source;
        private String author;
        private String title;
        private String description;

   public News(){}

    public News(String favoriteId, String newsTitle, String source, String author, String title, String description) {
        this.favoriteId = favoriteId;
        this.newsTitle = newsTitle;
        this.source = source;
        this.author = author;
        this.title = title;
        this.description = description;
    }

    public String getFavoriteId() {
        return favoriteId;
    }

    public void setFavoriteId(String favoriteId) {
        this.favoriteId = favoriteId;
    }

    public String getNewsTitle() {
        return newsTitle;
    }

    public void setNewsTitle(String newsTitle) {
        this.newsTitle = newsTitle;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}



