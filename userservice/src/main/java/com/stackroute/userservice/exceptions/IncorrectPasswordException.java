package com.stackroute.userservice.exceptions;

public class IncorrectPasswordException extends RuntimeException {

    public IncorrectPasswordException(String message){
        super(message);
    }

}

