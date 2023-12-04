package com.example.DotNote.auth.Dtos;

import com.example.DotNote.User.Dtos.UserDto;
import com.example.DotNote.auth.token.Token;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthDto {
	
	UserDto user;
	Token token;

}
