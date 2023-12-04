package com.example.DotNote.Shared.Exception;

import java.util.stream.Collectors;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.DotNote.Shared.ApiError;
import com.example.DotNote.Shared.Messages;
import com.example.DotNote.User.Exceptions.ActivationNotificationException;
import com.example.DotNote.User.Exceptions.NotUniqueEmailException;
import com.example.DotNote.auth.exception.UserNotActiveException;
import com.example.DotNote.auth.exception.UserNotFoundException;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class ErrorHandler {
	
	@ExceptionHandler({
		UserNotFoundException.class,
		MethodArgumentNotValidException.class,
		ActivationNotificationException.class,
		NotUniqueEmailException.class,
		UserNotActiveException.class,
	})
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	ApiError handleException(Exception exception,HttpServletRequest request) {
		ApiError error = new ApiError();
		error.setPath(request.getRequestURI());
		if(exception instanceof MethodArgumentNotValidException) {
			error.setMessage(customMessage(exception));
			error.setStatus("400");
			var validationErrors = ((MethodArgumentNotValidException) exception).getBindingResult().getFieldErrors()
					.stream()
					.collect(Collectors.toMap(FieldError::getField,FieldError::getDefaultMessage,(existing,replacing)->existing));
			error.setValidationErrors(validationErrors);
		}else if(exception instanceof UserNotFoundException) {
			error.setMessage(customMessage(exception));
			error.setStatus("400");
		}else if(exception instanceof ActivationNotificationException) {
			error.setMessage(customMessage(exception));
			error.setStatus("502");
		}else if(exception instanceof NotUniqueEmailException) {
			error.setMessage(customMessage(exception));
			error.setStatus("400");
			error.setValidationErrors(((NotUniqueEmailException) exception).getValidationError());
		}else if(exception instanceof UserNotActiveException) {
			error.setMessage(customMessage(exception));
			error.setStatus("400");
		}
		
		

		return error;
	}
	
	public String customMessage(Exception exception) {
		String message = "";
		if(exception instanceof MethodArgumentNotValidException) {
			message = Messages.getMessageForLocale("DotNote.user.signup.error.message", LocaleContextHolder.getLocale());
		}else if(exception instanceof UserNotFoundException) {
			message = Messages.getMessageForLocale("DotNote.user.not.found", LocaleContextHolder.getLocale());
		}else if(exception instanceof ActivationNotificationException) {
			message = Messages.getMessageForLocale("DotNote.activation.send.message", LocaleContextHolder.getLocale());
		}else if(exception instanceof NotUniqueEmailException) {
			message = Messages.getMessageForLocale("DotNote.validation.email.notunique", LocaleContextHolder.getLocale());
		}else if(exception instanceof UserNotActiveException) {
			message = Messages.getMessageForLocale("DotNote.user.not.active.message",LocaleContextHolder.getLocale());
		}
		return message;
	}

	

}
