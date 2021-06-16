package com.tackroute.favoriteservice.repository;

import com.tackroute.favoriteservice.model.Favorite;
import com.tackroute.favoriteservice.model.News;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NewsRepository extends MongoRepository<Favorite, String> {
//    List<News> findByUserId(String email);
//
//    Optional<News> findByUserIdAndTitle(String email, String newsTitle);

    // News findByNewsTitleAndArtistName(String songTitle,String artistName);
    //Music findByTitle(String songTitle);
}
