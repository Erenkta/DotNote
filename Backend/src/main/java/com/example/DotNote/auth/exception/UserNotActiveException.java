package com.example.DotNote.auth.exception;

import org.springframework.context.i18n.LocaleContextHolder;

import com.example.DotNote.Shared.Messages;

public class UserNotActiveException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1844425830696071026L;

	public UserNotActiveException() {
		super(Messages.getMessageForLocale("DotNote.user.not.active.message",LocaleContextHolder.getLocale()));
	}

}
