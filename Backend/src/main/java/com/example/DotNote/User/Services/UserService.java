package com.example.DotNote.User.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DotNote.Shared.GenericMessage;
import com.example.DotNote.User.Entities.User;
import com.example.DotNote.User.Repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public GenericMessage adduser(User user) {
		userRepository.save(user);
		return new GenericMessage("Kullanıcı ekleme başarılı");
	}
	
}
