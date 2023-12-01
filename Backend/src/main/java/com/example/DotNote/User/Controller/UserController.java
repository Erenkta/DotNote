package com.example.DotNote.User.Controller;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.DotNote.Shared.ApiError;
import com.example.DotNote.Shared.GenericMessage;
import com.example.DotNote.Shared.Messages;
import com.example.DotNote.User.Entities.User;
import com.example.DotNote.User.Services.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	@PostMapping("/api/v1/adduser")
	public GenericMessage adduser(@Valid @RequestBody User user) {
		return userService.adduser(user);
	}
	
	
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(code = HttpStatus.BAD_REQUEST) // request'in status'ünü belirler
	private ApiError methodArgumentNotValidHandler(MethodArgumentNotValidException exception,HttpServletRequest request) {
		ApiError error = new ApiError();
		error.setPath(request.getRequestURI());
		error.setStatus(exception.getStatusCode().toString());
		error.setMessage(Messages.getMessageForLocale("DotNote.user.signup.error.message", LocaleContextHolder.getLocale()));
		
		var validationErrors = exception.getBindingResult().getFieldErrors()
				.stream()
				.collect(Collectors.toMap(FieldError::getField,FieldError::getDefaultMessage,(existing,replacing)->existing));
		
		error.setValidationErrors(validationErrors);
		return error;
	}

}
