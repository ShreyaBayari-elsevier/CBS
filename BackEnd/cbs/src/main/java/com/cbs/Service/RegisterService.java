package com.cbs.Service;

import java.util.List;
import java.util.Optional;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cbs.Document.LoginRegister;
import com.cbs.Document.Register;
import com.cbs.Repository.RegisterRepository;
import com.google.gson.Gson;

@Service
public class RegisterService {

	 @Autowired
	    private RegisterRepository repository;

	
	
	public String getAllAccounts() {
	
		 List<Register> s = repository.findAll();
		 Gson gson = new Gson();
		    String jsonArray = gson.toJson(s);
		 return jsonArray;
	}
	
	public String getAllAccountsByID(String id) {
	 
		 Optional<Register> s = repository.findById(id);
		 Gson gson = new Gson();
		    String jsonArray = gson.toJson(s.get());
		 return jsonArray;
	}
	
	public String createAccount(Register role) {
		// TODO Auto-generated method stub
		repository.save(role);
		return "Account Created Successfully";
	}  
	
	public String createAccounts(List<Register> role) {
		// TODO Auto-generated method stub
		repository.saveAll(role);
		return "Account Created Successfully";
	}
	
	public Double getBalance(String id)
	{
		Optional<Register> r = repository.findById(id);
		 Gson gson = new Gson();
		 String jsonArray = gson.toJson(r.get());
		JsonObject jsonObject = new Gson().fromJson(jsonArray, JsonObject.class);
		Double bal = jsonObject.get("balance").getAsDouble();
		return bal;
	}
	
	public double returnInterest(String id)
	{
		Optional<Register> r = repository.findById(id);
		 Gson gson = new Gson();
		 String jsonArray = gson.toJson(r.get());
		JsonObject jsonObject = new Gson().fromJson(jsonArray, JsonObject.class);
		float bal = jsonObject.get("balance").getAsFloat();
		double interest=(bal*4*0.5)/100;
		return interest;
	}
	
	public String updateById(String id, Register role) {
		Optional<Register> r = repository.findById(id);
		Register r1= r.get();
		r1.setPhonum(role.getPhonum());
		r1.setAddress(role.getAddress());
		r1.setNominee(role.getNominee());
		repository.save(r1);
		return "Account Updated Successfully";
	}
	
	public String deleteById(String id) {
		repository.deleteById(id);
		return "Account Deleted Successfully";
	}	
	
	public Register login(String id, String password) {
		
		Optional<Register> s = repository.findById(id);
		if (s.isPresent()) {
			Register value = s.get();
		    if(password.equals(value.getPassword())){
			   return value;
		    }
		    else
		    {
		    	return null;
		    }
		}
		    else {
		   return null;
		    }
	}
}
