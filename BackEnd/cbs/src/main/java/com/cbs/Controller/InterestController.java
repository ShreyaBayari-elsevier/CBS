package com.cbs.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
////@CrossOrigin(origins = "http://localhost:8081")

import com.cbs.Service.InterestService;

@RestController
@RequestMapping("/api")
public class InterestController {
	  @Autowired
	    private InterestService service;

  

  @GetMapping("/calculateinterest")
  public Double  intcalc(@RequestParam("id") String id) {  
	  return service.intcalc(id);	  
  }


//  @GetMapping("/getrecordbyid")
// 
//  public String getAllRecordsByID(@RequestParam("id") String id) {
//	  return service.getAllRecordsByID(id);
//  }
//  
//  //{"id":"113","name":"Developer1"}
//  @PostMapping("/createrecord")
//  
//  public String createRecord(@RequestBody InterestCalculation role) {
//	  return service.createRecord(role);
//  }
//  @PostMapping("/createrecords")
//  public String createRecords(@RequestBody List<InterestCalculation> role) {
//	  return service.createRecords(role);
//  }
}