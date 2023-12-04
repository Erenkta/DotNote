package com.example.DotNote.User.Dtos;

import com.example.DotNote.User.Entity.User;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDto {
	String name;
	String username;
	
	public UserDto(User user) {
		this.name = user.getName();
		this.username = user.getUsername();
	}
	
}
