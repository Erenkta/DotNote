package com.example.DotNote.User.Validation;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.DotNote.User.Entity.User;
import com.example.DotNote.User.Service.UserService;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

	@Autowired
	UserService userService;
	
	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		User userInDb = userService.getUserByEmail(value);
		
		return userInDb == null; // boş ise true değilse false dön
	}

}
