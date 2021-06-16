package com.stackroute.userservice.service;


import com.stackroute.userservice.exceptions.IncorrectPasswordException;
import com.stackroute.userservice.exceptions.UserAlreadyExistsException;
import com.stackroute.userservice.exceptions.UserNotFoundException;

import com.stackroute.userservice.model.User;

public interface UserService {

    User registerUser(User user) throws UserAlreadyExistsException;

    User authenticateUser(String email, String password) throws UserNotFoundException, IncorrectPasswordException;

    //
//
//
User getUserCredentials(String email);

    User editUser(User user);

    User getUserDetails(String email) throws UserNotFoundException;
}