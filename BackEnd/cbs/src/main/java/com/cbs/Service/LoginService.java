package com.cbs.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cbs.Document.LoginRegister;
import com.cbs.Document.Register;
import com.cbs.Repository.LoginRepository;
import com.cbs.Repository.RegisterRepository;
import com.google.gson.Gson;

@Service
public class LoginService {

	 @Autowired
	    private LoginRepository repository;
	 @Autowired
	 	private RegisterRepository repository1;

	
	public String getAllRolesByID(String id) {
	 
		 Optional<LoginRegister> s = repository.findById(id);
		 Gson gson = new Gson();
		    String jsonArray = gson.toJson(s.get());
		    
		 return jsonArray;
	}
	
	public String loginorregister(String id,String pass) {
		// TODO Auto-generated method stub
		String msg = null;
		Optional<LoginRegister> s = repository.findById(id);
		if (s.isPresent()) {
		    
		    LoginRegister value = s.get();
		    if(pass.equals(value.getPassword())){
		    	System.out.println("Login successful");
			    msg="Login successful";
		    }
		    else
		    {
		    	System.out.println("Password incorrect");
			    msg="Password incorrect";
		    }
		}
		    else {
		    System.out.println("Login unsuccessful");
		    System.out.println("Create an Account");
		    msg="Login unsuccessful\n Create an Account";
		    }
		return msg; 
	}
	
	public String setpassword(String id,String pass) {
		// TODO Auto-generated method stub
		
		String msg = null;
		Optional<Register> s = repository1.findById(id);
		if (s.isPresent()) { 
				LoginRegister newuser=new LoginRegister(id, pass);
				repository.save(newuser);
		    	System.out.println("Password set successfully");
			    msg="Password set successfully";
			}
		    else {
		    System.out.println("Account not found");
		    System.out.println("Create an Account");
		    msg="Account not found\n Create an Account";
		    }
		return msg; 
	}
}
