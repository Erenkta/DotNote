package com.example.DotNote.User.Service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;

import com.example.DotNote.Shared.GenericMessage;
import com.example.DotNote.Shared.Messages;
import com.example.DotNote.Shared.PasswordEncoder;
import com.example.DotNote.Shared.Email.EmailService;
import com.example.DotNote.User.Entity.User;
import com.example.DotNote.User.Exceptions.ActivationNotificationException;
import com.example.DotNote.User.Exceptions.NotUniqueEmailException;
import com.example.DotNote.User.Repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	EmailService emailService;
	

	@Transactional(rollbackOn = MailException.class)
	public GenericMessage adduser(User user) {
		try {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			user.setActivationToken(UUID.randomUUID().toString());
			userRepository.saveAndFlush(user);
			emailService.sendActivationMail(user);
		}catch (DataIntegrityViolationException e) {
			throw new NotUniqueEmailException();
		}catch (MailException e) {
			throw new ActivationNotificationException();
		}
		String message = Messages.getMessageForLocale("DotNote.activation.send.message", LocaleContextHolder.getLocale());
		return new GenericMessage(message);
	}
	
	public User getUserByEmail(String email) {
		return userRepository.getByEmail(email);
	}

	public GenericMessage activateUser(String token) {
		Optional<User> userInDb = userRepository.findByActivationToken(token);
		if(userInDb.isPresent()) {
			userInDb.get().setActivationToken(null);
			userInDb.get().setActive(true);
		}
		userRepository.save(userInDb.get());
		return new GenericMessage(Messages.getMessageForLocale("DotNote.user.active.message", LocaleContextHolder.getLocale()));
	}

	
}
