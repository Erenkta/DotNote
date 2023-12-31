package com.example.DotNote.User.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DotNote.User.Entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
}
