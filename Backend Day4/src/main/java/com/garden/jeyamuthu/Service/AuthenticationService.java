package com.garden.jeyamuthu.Service;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.garden.jeyamuthu.Model.User;
import com.garden.jeyamuthu.Model.enumerate.Role;
import com.garden.jeyamuthu.Repository.UserRepositorys;
import com.garden.jeyamuthu.dto.request.AuthenticationRequest;
import com.garden.jeyamuthu.dto.request.RegisterRequest;
import com.garden.jeyamuthu.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepositorys repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
	 private final AuthenticationManager authenticationManager;
	public AuthenticationResponse register(RegisterRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = User.builder()
	            .username(request.getFirstname())
	            .email(request.getEmail())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .role(Role.USER)
	            .build();
	    repository.save(user);
	    var jwtToken = jwtservice.generateToken(user);
	    
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
				request.getEmail(),
				request.getPassword()
				)
				);
				var user = repository.findByEmail(request.getEmail())
						.orElseThrow();
				 var jwtToken = jwtservice.generateToken(user);
				    
					return AuthenticationResponse.builder()
							.token(jwtToken)
							.build();
	}
	
	
	

}
