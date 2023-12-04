package com.example.DotNote.Note.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DotNote.Note.Entity.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long>{
	
}
