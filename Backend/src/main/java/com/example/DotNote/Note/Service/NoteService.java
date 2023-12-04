package com.example.DotNote.Note.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

import com.example.DotNote.Note.Dtos.NoteCreate;
import com.example.DotNote.Note.Repository.NoteRepository;
import com.example.DotNote.Shared.GenericMessage;
import com.example.DotNote.Shared.Messages;

@Service
public class NoteService {

	@Autowired
	NoteRepository noteRepository;
	public GenericMessage addnote(NoteCreate note) {
		try {
			noteRepository.save(note.toNote());
		}catch (Exception e) {
			throw e;
		}
		return new GenericMessage(Messages.getMessageForLocale("DotNote.note.create.message", LocaleContextHolder.getLocale()));
	}

}
