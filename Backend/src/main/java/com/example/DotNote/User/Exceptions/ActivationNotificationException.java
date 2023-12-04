package com.example.DotNote.User.Exceptions;

import org.springframework.context.i18n.LocaleContextHolder;

import com.example.DotNote.Shared.Messages;

public class ActivationNotificationException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8297900134719600739L;

	public ActivationNotificationException() {
		super(Messages.getMessageForLocale("DotNote.activation.notification.message",LocaleContextHolder.getLocale()));
	}

}
