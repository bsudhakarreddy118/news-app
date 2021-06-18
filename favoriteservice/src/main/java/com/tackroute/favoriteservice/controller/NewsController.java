package com.tackroute.favoriteservice.controller;

import com.tackroute.favoriteservice.exception.FavoriteAlreadyExistException;
import com.tackroute.favoriteservice.model.Favorite;
import com.tackroute.favoriteservice.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/v1/api/")
public class NewsController {


    private NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("welcome")
    public String welcome() {
        return "welcome";
    }

    @PostMapping("addnews")
    public ResponseEntity<?> addToFavorites(@RequestBody Favorite favorite) {
        try {
            Favorite response = newsService.addToFavorite(favorite);
            return new ResponseEntity<Favorite>(response, HttpStatus.OK);
        } catch (FavoriteAlreadyExistException exception) {
            return new ResponseEntity<String>("News already exists.", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("favourite/{email}/getAllFavourites")
    public ResponseEntity<?> getAllFavourites(@PathVariable String email) {
        return new ResponseEntity<>(this.newsService.getAllFavorites(email), HttpStatus.OK);
    }

    @DeleteMapping("favourite/{email}/deleteFromFavourite/{favId}")
    public void deleteFromFavourite(@PathVariable("email") String email, @PathVariable String favId) {
        newsService.deleteFavouriteByFavouriteId(email, favId);
    }

    @PostMapping("{email}/createFavouriteList")
    public ResponseEntity<?> createFavouriteList(@PathVariable("email") String email, @RequestBody Favorite user) {
        return new ResponseEntity<>(this.newsService.createFavoriteList(email, user), HttpStatus.CREATED);
    }}