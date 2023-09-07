package com.cbs.Controller;

import java.io.ByteArrayInputStream;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cbs.Service.StatementService;
@RestController
@RequestMapping("/apii")
public class StatementController {
	@Autowired
    private StatementService service;
@GetMapping("/getallrecords")
public String  getAllRoles(@RequestParam(required = false) String title) {
  return service.getAllRoles();
}
//http://localhost:8080/api/getrecordbyid?id=113

//{"id":"113","name":"Developer1"}


//@PutMapping("/updateStatement{id}")
//public String updateRole(@RequestParam("id") String id,@RequestBody Role role) {
//  return service.update(id, role);
//}
//@DeleteMapping("/deleteStatement{id}")
//public String deleteById(@RequestParam("id") String id) {
//  return service.deleteById(id);
//}
@GetMapping("/createPdf")
public ResponseEntity<InputStreamResource> createPDF(@RequestParam("acc_id")  String id, @RequestParam("t1")String t1, @RequestParam("t2")String t2) {
	System.out.println(id);
	ByteArrayInputStream pdf=service.createPdf(id,t1,t2);
	HttpHeaders httpHeaders=new HttpHeaders();
	httpHeaders.add("Content-Disposition", "inline:file=lcwd.pdf");
	return ResponseEntity
			.ok()
			.headers(httpHeaders)
			.contentType(MediaType.APPLICATION_PDF)
			.body(new InputStreamResource(pdf));
	
}
//next section
//createPdf?acc_id=1234567890&t1=2023-09-01T14:30:00&t2=2023-10-01T14:30:00
}