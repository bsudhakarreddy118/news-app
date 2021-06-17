package com.stackroute.favoriteservice.service;

import com.stackroute.favoriteservice.exception.FavoriteAlreadyExistException;
import com.stackroute.favoriteservice.exception.FavoriteDoesNotExistException;
import com.stackroute.favoriteservice.exception.UserAlreadyExistsException;
import com.stackroute.favoriteservice.exception.UserNotFoundException;
import com.stackroute.favoriteservice.model.Favorite;
import com.stackroute.favoriteservice.model.News;
import com.stackroute.favoriteservice.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsServiceImpl implements NewsService {
    private NewsRepository newsRepository;


    @Autowired
    public NewsServiceImpl(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public Favorite addToFavorite(Favorite favorite) throws FavoriteAlreadyExistException {
        Optional<Favorite> favoriteResult = newsRepository.findById(favorite.getEmail());
        if (favoriteResult.isPresent()) {
            List<News> newsList = favoriteResult.get().getNews();
            boolean present = false;
            for (News news : newsList) {
                if (news.getTitle().equals(favorite.getNews().get(0).getTitle())) {
                    present = true;
                }
            }
            if (present) throw new FavoriteAlreadyExistException();
            favoriteResult.get().getNews().add(favorite.getNews().get(0));
            return newsRepository.save(favoriteResult.get());
        } else return newsRepository.save(favorite);
    }

    @Override
    public Optional<Favorite> getAllFavorites(String email) {
        final Optional<Favorite> allFavorite = this.newsRepository.findById(email);
        return allFavorite;
    }


  /*  @Override
    public List<News> getFavoriteNews(String email) throws FavoriteListDoesNotExistException {
        Optional<Favorite> favoriteResult = newsRepository.findById(email);
        if (favoriteResult.isPresent()) {
            List<News> newss = favoriteResult.get().getNewss();
            if (newss.size() >= 1) {
                return newss;
            } else {
                throw new FavoriteListDoesNotExistException();
            }

        }
        return null;
    }*/


    @Override
    public List<News> deleteFavouriteByFavouriteId(String email, String favouriteId) throws FavoriteDoesNotExistException, UserNotFoundException {
        Optional<Favorite> fav = getAllFavorites(email);
        int index = 0;
        boolean found = false;
        if (fav != null) {
            List<News> details = fav.get().getNews();
            for (int i = 0; i < details.size(); i++) {
                if (details.get(i).getFavoriteId().equals(favouriteId)) {
                    index = i;
                    found = true;
                    break;
                }
            }
            if (found) {
                News favdetail = details.get(index);
                details.remove(index);
                fav.get().setNews(details);
                newsRepository.save(fav.get());
                return details;
            } else {
                throw new FavoriteDoesNotExistException("Favourite Not Found");
            }
        } else {
            throw new UserNotFoundException("User Not Found");
        }
    }

    @Override
    public Favorite createFavoriteList(String email, Favorite favorite) throws UserAlreadyExistsException {
        final Optional<Favorite> user = newsRepository.findById(email);
        if (user.isPresent()) {
            throw new UserAlreadyExistsException("User Already Exist");
        } else {
            return newsRepository.save(favorite);
        }
    }


}