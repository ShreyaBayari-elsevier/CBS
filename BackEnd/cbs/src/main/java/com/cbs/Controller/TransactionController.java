package com.cbs.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cbs.Service.TransactionService;

import java.util.List;
@RestController
@RequestMapping("/api")
public class TransactionController {
    private TransactionService transactionService;
    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }
    @PostMapping("/transaction")
    public String createTransaction(@RequestParam("fa") String fromAccountNumber,@RequestParam("ta") String toAccountNumber,@RequestParam("amt") Double amount,@RequestParam("tid") String t,@RequestParam("dt")String date_time,@RequestParam("tc") String tc) {
        // Implement validation or additional business logic if needed
        String createdTransaction = transactionService.performTransaction(fromAccountNumber,toAccountNumber,amount,t,date_time,tc);
        return createdTransaction;
    }
    @GetMapping("/gettransactions")
    public String getTransaction()
    {
    	String result=transactionService.getAllTransactions();
    	return result;
    }

}