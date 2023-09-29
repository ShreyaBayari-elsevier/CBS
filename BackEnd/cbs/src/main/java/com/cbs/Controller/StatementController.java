package com.cbs.Controller;

import java.io.ByteArrayInputStream;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cbs.Service.StatementService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class StatementController {
	@Autowired
    private StatementService service;
@GetMapping("/getallrecords")
public String  getAllRoles(@RequestParam(required = false) String title) {
  return service.getAllRoles();
}

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
@GetMapping("/createStatement")
public ResponseEntity<InputStreamResource> createPDF(@RequestParam("acc_id")  String id) {
	System.out.println(id);
	ByteArrayInputStream pdf=service.createStatement(id);
	HttpHeaders httpHeaders=new HttpHeaders();
	httpHeaders.add("Content-Disposition", "inline:file=lcwd.pdf");
	return ResponseEntity
			.ok()
			.headers(httpHeaders)
			.contentType(MediaType.APPLICATION_PDF)
			.body(new InputStreamResource(pdf));
	
}
}