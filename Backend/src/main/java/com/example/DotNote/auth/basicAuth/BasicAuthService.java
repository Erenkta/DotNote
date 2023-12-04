package com.example.DotNote.auth.basicAuth;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.DotNote.Shared.PasswordEncoder;
import com.example.DotNote.User.Entity.User;
import com.example.DotNote.User.Service.UserService;
import com.example.DotNote.auth.exception.UserNotFoundException;
import com.example.DotNote.auth.token.Token;
import com.example.DotNote.auth.token.TokenService;

@Service
@Primary
public class BasicAuthService implements TokenService {
	
	@Autowired
	UserService userService;

	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public Token createToken(String email,String password) {
		String creds = email +":"+ password;
		String token = Base64.getEncoder().encodeToString(creds.getBytes());
		return new Token(token,"Basic");
		
	}

	@Override
	public User verifyToken(String authorizationHeader) {
		String token = new String(Base64.getDecoder().decode(authorizationHeader.split("Basic ")[1]));
		String[] decoded = token.split(":");
		String email = decoded[0] ; String password = decoded[1];
		
		User userInDb = userService.getUserByEmail(email);
		if(userInDb == null) {
			throw new UserNotFoundException();
		}
		if(!passwordEncoder.isMatches(password, userInDb.getPassword())) {
			throw new UserNotFoundException();
		}
		return userInDb;
	}

}
