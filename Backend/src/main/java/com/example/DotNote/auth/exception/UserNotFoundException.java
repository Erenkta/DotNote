package com.example.DotNote.auth.exception;

import org.springframework.context.i18n.LocaleContextHolder;

import com.example.DotNote.Shared.Messages;

public class UserNotFoundException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserNotFoundException() {
		super(Messages.getMessageForLocale("DotNote.user.not.found",LocaleContextHolder.getLocale()));
	}
}
