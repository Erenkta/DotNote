package com.example.DotNote.User.Exceptions;

import java.util.Collections;
import java.util.Map;

import org.springframework.context.i18n.LocaleContextHolder;

import com.example.DotNote.Shared.Messages;

public class NotUniqueEmailException extends RuntimeException {

	
	public NotUniqueEmailException() {
		super(Messages.getMessageForLocale("DotNote.constraint.email.notunique",LocaleContextHolder.getLocale()));
	}
	public Map<String,String> getValidationError(){
		return Collections.singletonMap("email", 
				Messages.getMessageForLocale("DotNote.constraint.email.notunique"
				, LocaleContextHolder.getLocale()));
		
	}

}
