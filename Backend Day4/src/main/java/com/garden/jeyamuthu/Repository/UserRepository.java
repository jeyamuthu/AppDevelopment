package com.garden.jeyamuthu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.garden.jeyamuthu.Model.User;



public interface UserRepository extends JpaRepository<User,String>{
    
}
