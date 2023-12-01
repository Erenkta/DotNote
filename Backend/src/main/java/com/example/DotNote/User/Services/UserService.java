package com.example.DotNote.User.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

import com.example.DotNote.Shared.GenericMessage;
import com.example.DotNote.Shared.Messages;
import com.example.DotNote.User.Entities.User;
import com.example.DotNote.User.Repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	

	public GenericMessage adduser(User user) {
		userRepository.save(user);
		String message = Messages.getMessageForLocale("DotNote.user.create.message", LocaleContextHolder.getLocale());
		return new GenericMessage(message);
	}
	
}
