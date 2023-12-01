package com.example.DotNote.User.Entities;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users") // h2 için user yasaklı
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	
	@NotBlank(message = "{DotNote.validation.blank.message}")
	@Length(min = 3,message = "{DotNote.validation.Min.message}")
	String name;
	
	@Email //TODO Unique email yap
	@NotBlank(message = "{DotNote.validation.blank.message}")
	String email;
	 
	@NotBlank(message = "{DotNote.validation.blank.message}")
	@Length(min=3,message = "{DotNote.validation.Min.message}")
	String username;
	
	@Pattern(regexp = "^[a-zA-Z0-9]+$",message = "{DotNote.validation.password.pattern}") // Büyük- Küçük harf olmalı P4ssword 
	@Length(min = 6,message = "{DotNote.validation.Min.message}")
	@NotBlank(message = "{DotNote.validation.blank.message}")
	String password;
}
