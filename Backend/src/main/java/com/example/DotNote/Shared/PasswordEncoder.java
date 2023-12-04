package com.example.DotNote.Shared;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoder {
	
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	
	public String encode(String password) {
		return passwordEncoder.encode(password);
	}
	public Boolean isMatches(String userPassword,String encodedPassword) {
		return passwordEncoder.matches(userPassword,encodedPassword);
	}

}
