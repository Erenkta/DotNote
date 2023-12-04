package com.example.DotNote.Note.Dtos;

import com.example.DotNote.Note.Entity.Note;
import com.example.DotNote.User.Entity.User;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class NoteCreate {
	
	String title;
	String content;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	User owner;
	
	public Note toNote() {
		Note note = new Note();
		note.setTitle(title);
		note.setContent(content);
		note.setOwner(owner);
		return note;
	}
}
