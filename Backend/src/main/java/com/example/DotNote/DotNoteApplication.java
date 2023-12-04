package com.example.DotNote;

import java.util.UUID;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

import com.example.DotNote.Shared.PasswordEncoder;
import com.example.DotNote.User.Entity.User;
import com.example.DotNote.User.Repository.UserRepository;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)

public class DotNoteApplication {

	public static void main(String[] args) {
		SpringApplication.run(DotNoteApplication.class, args);
	}
	
	@Bean
	CommandLineRunner userCreator(UserRepository userRepository,PasswordEncoder passwordEncoder) {
		return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception {
				for(int i = 1 ; i<=10; i++) {
					User user = new User();
					user.setName("test-user"+i);
					user.setUsername("user"+i);
					user.setEmail("user"+i+"@gmail.com");
					user.setPassword(passwordEncoder.encode("P4ssword"));
		            user.setActivationToken(UUID.randomUUID().toString());
					userRepository.save(user);
					
				}
				
			}
		};
	}
}
