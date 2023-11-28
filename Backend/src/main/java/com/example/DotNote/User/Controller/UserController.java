package com.example.DotNote.User.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DotNote.Shared.GenericMessage;
import com.example.DotNote.User.Entities.User;
import com.example.DotNote.User.Services.UserService;

import jakarta.validation.Valid;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	@PostMapping("/api/v1/adduser")
	public GenericMessage adduser(@Valid @RequestBody User user) {
		return userService.adduser(user);
	}

}
