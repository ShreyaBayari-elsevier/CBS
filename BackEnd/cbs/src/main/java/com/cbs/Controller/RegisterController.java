package com.cbs.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cbs.Document.Register;
import com.cbs.Service.RegisterService;

@RestController
@RequestMapping("/api")
public class RegisterController {
	  @Autowired
	    private RegisterService service;

  @GetMapping("/getallaccounts")
  public String  getAllAccounts(@RequestParam(required = false) String title) {
	  
	  
	  return service.getAllAccounts();
	  
  }

  @GetMapping("/getaccount")
 
  public String getAllAccount(@RequestParam("id") String id) {
	  return service.getAllAccountsByID(id);
  }
  
  @GetMapping("/getbalance")
  
  public Double getBalance(@RequestParam("id") String id) {
	  return service.getBalance(id);
  }
  
//  @GetMapping("/returninterest")
//  
//  public double returnInterest(@RequestParam("id") String id) {
//	  return service.returnInterest(id);
//  }
  
  @PostMapping("/createaccount")
  
  public String createAccount(@RequestBody Register role) {
	  return service.createAccount(role);
  }
  
  @PostMapping("/createmultipleaccounts")
  public String createAccounts(@RequestBody List<Register> role) {
	  return service.createAccounts(role);
  }
  
  @PutMapping("/update")
  public String updateById(@RequestParam("id") String id,@RequestBody Register role) {
	  return service.updateById(id,role);
  }
  
  @DeleteMapping("/delete")
  public String deleteById(@RequestParam("id") String id) {
	  return service.deleteById(id);
  }  
}