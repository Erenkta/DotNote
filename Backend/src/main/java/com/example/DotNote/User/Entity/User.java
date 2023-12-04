package com.example.DotNote.User.Entity;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.example.DotNote.Note.Entity.Note;
import com.example.DotNote.User.Validation.UniqueEmail;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
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
@Table(name = "users",uniqueConstraints = @UniqueConstraint(columnNames = {"email"})) // h2 için user yasaklı

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	
	@NotBlank(message = "{DotNote.validation.blank.message}")
	@Length(min = 3,message = "{DotNote.validation.Min.message}")
	String name;
	
	@Email //TODO Unique email yap
	@NotBlank(message = "{DotNote.validation.blank.message}")
	@UniqueEmail(message = "{DotNote.validation.email.notunique}")
	String email;
	 
	@NotBlank(message = "{DotNote.validation.blank.message}")
	@Length(min=3,message = "{DotNote.validation.Min.message}")
	String username;
	
	@Pattern(regexp = "^[a-zA-Z0-9]+$",message = "{DotNote.validation.password.pattern}") // Büyük- Küçük harf olmalı P4ssword 
	@Length(min = 6,message = "{DotNote.validation.Min.message}")
	@NotBlank(message = "{DotNote.validation.blank.message}")
	String password;
	
	String activationToken;
	
	Boolean active=false;
	
	@OneToMany(mappedBy = "owner")
	List<Note> notes;
	
}
