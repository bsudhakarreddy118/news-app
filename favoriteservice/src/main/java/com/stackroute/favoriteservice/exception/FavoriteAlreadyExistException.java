package com.stackroute.favoriteservice.exception;

public class FavoriteAlreadyExistException extends RuntimeException {
    public FavoriteAlreadyExistException() {

    }

    public FavoriteAlreadyExistException(String message) {

        super(message);
    }

}
