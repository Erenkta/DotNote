package com.example.DotNote.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DotNote.Shared.PasswordEncoder;
import com.example.DotNote.User.Dtos.UserDto;
import com.example.DotNote.User.Entity.User;
import com.example.DotNote.User.Service.UserService;
import com.example.DotNote.auth.Dtos.AuthDto;
import com.example.DotNote.auth.Dtos.Credentials;
import com.example.DotNote.auth.exception.UserNotActiveException;
import com.example.DotNote.auth.exception.UserNotFoundException;
import com.example.DotNote.auth.token.Token;
import com.example.DotNote.auth.token.TokenService;

@Service
public class AuthService {
	
	@Autowired
	UserService userService;
	@Autowired 
	PasswordEncoder passwordEncoder;
	@Autowired
	TokenService tokenService;
	
	AuthDto authenticate(Credentials creds) {
	
		User userInDb = userService.getUserByEmail(creds.email());
		if(userInDb == null || !passwordEncoder.isMatches(creds.password(),userInDb.getPassword())){
			throw new UserNotFoundException();
		}
		else if(!userInDb.getActive()) {
			throw new UserNotActiveException();
		}

		//userInDb.setToken(tokenService.createToken(creds.email(), creds.password()).token());
		//return new AuthDto(userInDb.getName(),userInDb.getUsername(),userInDb.getToken());
		AuthDto response = new AuthDto();
		response.setUser(new UserDto(userInDb));
		response.setToken(tokenService.createToken(userInDb.getEmail(), userInDb.getPassword()));
		
		return response;
	}


	
}
