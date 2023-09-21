package com.cbs.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cbs.Service.LoginService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginController {
	@Autowired
	private LoginService service;

	
	@GetMapping("/login")
	public String loginorregister(@RequestParam("id") String id, @RequestParam("pass") String pass) {
		return service.loginorregister(id, pass);
	}

	@PostMapping("/setpassword")

	public String setpassword(@RequestParam("id") String id, @RequestParam("pass") String pass) {
		return service.setpassword(id, pass);
	}
}
