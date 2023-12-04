package com.example.DotNote.Note.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DotNote.Note.Dtos.NoteCreate;
import com.example.DotNote.Note.Service.NoteService;
import com.example.DotNote.Shared.GenericMessage;

@RestController
public class NoteController {
	
	@Autowired
	NoteService noteService;
	
	@PostMapping("/api/v1/addnote")
	GenericMessage addnote(@RequestBody NoteCreate note) {
		return noteService.addnote(note);
	}

}
