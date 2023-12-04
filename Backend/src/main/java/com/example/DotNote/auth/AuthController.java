package com.example.DotNote.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.DotNote.Shared.ApiError;
import com.example.DotNote.auth.Dtos.AuthDto;
import com.example.DotNote.auth.Dtos.Credentials;
import com.example.DotNote.auth.exception.UserNotFoundException;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthController {
	
	@Autowired
	AuthService authService;
	
	@PostMapping("/api/v1/auth")
	public AuthDto authenticate(@RequestBody Credentials creds) {
		return authService.authenticate(creds);
	}
	

}
