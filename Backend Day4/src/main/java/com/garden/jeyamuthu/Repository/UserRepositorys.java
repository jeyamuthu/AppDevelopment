package com.garden.jeyamuthu.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.garden.jeyamuthu.Model.User;



public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByEmail(String email);
}
