package com.tackroute.favoriteservice.service;

import com.tackroute.favoriteservice.exception.FavoriteAlreadyExistException;
import com.tackroute.favoriteservice.model.Favorite;
import com.tackroute.favoriteservice.model.News;

import java.util.List;
import java.util.Optional;

public interface NewsService  {
    Favorite addToFavorite(Favorite favorite) throws FavoriteAlreadyExistException;

    Optional<Favorite> getAllFavorites(String email);

    List<News> deleteFavouriteByFavouriteId(String email, String favouriteId);

    Favorite createFavoriteList(String email, Favorite favorite);



    // List<News> getFavorite(String email) throws FavoriteListDoesNotExistException;
    // we are creating this for logged user ...for empty list
    // Favorite deleteFromFavorite(String email, String newsTitle) throws FavoriteListDoesNotExistException;
}
