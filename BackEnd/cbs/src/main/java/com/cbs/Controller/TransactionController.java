package com.cbs.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cbs.Document.Transaction;
import com.cbs.Service.TransactionService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TransactionController {
	private TransactionService transactionService;

	@Autowired
	public TransactionController(TransactionService transactionService) {
		this.transactionService = transactionService;
	}

	
	@PostMapping("/transaction")
	public ResponseEntity<Transaction> createTransaction(@RequestParam("fromAcc") String fromAccountNumber,
			@RequestParam("toAcc") String toAccountNumber, @RequestParam("amount") Double amount,
			@RequestParam("transId") String transcId, @RequestParam("dateTime") String date_time,
			@RequestParam("transCat") String tc) {
		// Implement validation or additional business logic if needed
		Transaction transaction =(transactionService.performTransaction(fromAccountNumber, toAccountNumber, amount,
				transcId, date_time, tc));
		if(transaction!=null)
		return new ResponseEntity<Transaction>(transactionService.performTransaction(fromAccountNumber, toAccountNumber, amount,
				transcId, date_time, tc),HttpStatus.OK);
		else
			return new ResponseEntity<Transaction>(transactionService.performTransaction(fromAccountNumber, toAccountNumber, amount,
					transcId, date_time, tc),HttpStatus.PARTIAL_CONTENT);
		
	}

	@GetMapping("/gettransactions")
	public List<Transaction> getTransaction(@RequestParam("id") String id) {
		return transactionService.getAllTransactions(id);
	}

}