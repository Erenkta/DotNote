package com.example.DotNote.auth.token;

import com.example.DotNote.User.Entity.User;

public interface TokenService {
	Token createToken(String email,String password);
	User verifyToken(String authorizationHeader);
}
