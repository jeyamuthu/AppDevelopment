package com.garden.jeyamuthu.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.garden.jeyamuthu.Service.AuthenticationService;
import com.garden.jeyamuthu.dto.request.AuthenticationRequest;
import com.garden.jeyamuthu.dto.request.RegisterRequest;
import com.garden.jeyamuthu.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/authenticate")	
@RequiredArgsConstructor
public class AuthenticationController {
	
	private final AuthenticationService service;
	
	  @PostMapping("/register")
	  public ResponseEntity<AuthenticationResponse> register(
	      @RequestBody RegisterRequest request
	  ) {
	    return ResponseEntity.ok(service.register(request));
	  }
	  @PostMapping("/login")
	  public ResponseEntity<AuthenticationResponse> authenticate(
	      @RequestBody AuthenticationRequest request
	  ) {
	    return ResponseEntity.ok(service.authenticate(request));
	  }
}
