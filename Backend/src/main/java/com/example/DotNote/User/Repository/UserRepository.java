package com.example.DotNote.User.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.DotNote.User.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User getByEmail(String email);
	Optional<User> findByActivationToken(String activationToken);
}
