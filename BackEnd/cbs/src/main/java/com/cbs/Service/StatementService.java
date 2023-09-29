package com.cbs.Service;

import java.io.*;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.query.Criteria;

import com.cbs.Document.Register;
import com.cbs.Document.Transaction;
import com.cbs.Repository.RegisterRepository;
import com.cbs.Repository.StatementRepository;
import com.google.gson.Gson;
import com.lowagie.text.Chunk;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Element;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.Rectangle;
import com.lowagie.text.Table;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
@Service
public class StatementService {
	
	@Autowired
    private StatementRepository repository;
	@Autowired
	private MongoTemplate mongoTemplate;
	@Autowired
    private RegisterRepository repository2;
public String getAllRoles() {
	 List<Transaction> s = repository.findAll();
	 Gson gson = new Gson();
	    String jsonArray = gson.toJson(s);
	 return jsonArray;
}

public List<Transaction> findDocumentsBetweenDates(String id, String fromDateStr, String toDateStr) {
    System.out.println("Inside called");
    // Convert the fromDate and toDate strings to Date objects
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    Date fromDate;
    Date toDate;
    try {
        fromDate = dateFormat.parse(fromDateStr);
        toDate = dateFormat.parse(toDateStr);
    } catch (Exception e) {
        // Handle date parsing exception as needed
        e.printStackTrace();
        return Collections.emptyList(); // Return an empty list or handle the error appropriately
    }
    Query query = new Query(Criteria.where("acc_id").is(id)
            .andOperator(Criteria.where("date_time").gte(dateFormat.format(fromDate)).lte(dateFormat.format(toDate))));
    List<Transaction> result = mongoTemplate.find(query, Transaction.class, "transaction");
    System.out.println(result);
    return result;
}
public Register findDocumentsWithStatusE(String id) {
	System.out.println("Inside called");
    Query query = new Query(Criteria.where("acc_id").is(id));
    Register result = mongoTemplate.findOne(query, Register.class, "account_info");
    return result;
}
public ByteArrayInputStream createPdf(String id, String t1, String t2) {
    System.out.println("PDF gen started");
    String title = "Account Statement\n\n";
    ByteArrayOutputStream out = new ByteArrayOutputStream();
    Document document = new Document();
    try {
		PdfWriter.getInstance(document, out);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    document.open();
    Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 20);
    Paragraph titlePara = new Paragraph(title, titleFont);
    titlePara.setAlignment(Element.ALIGN_CENTER);
    try {
		document.add(titlePara);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    Gson gson = new Gson();
    Register s1 = findDocumentsWithStatusE(id);
    // Create a box for additional information
    PdfPTable infoBox = new PdfPTable(1);
    PdfPCell infoCell = new PdfPCell();
    infoCell.setBorder(Rectangle.BOX); // Set the border style to a box
    infoCell.setPadding(10); // Add padding to the cell
    infoCell.addElement(new Paragraph("Account User Details\nAccount Id: " + s1.getAcc_id() + "\nAccount Type: " + s1.getAcc_type() + "\nFirst Name: " + s1.getFirstname() + "\nLast Name: " + s1.getLastname() + "\nPhone Number: " + String.valueOf(s1.getPhonum() + "\nAddress: " + s1.getAddress() + "\nNominee: " + s1.getNominee() + "\n"))); // Add your content
    infoBox.addCell(infoCell);
    try {
		document.add(infoBox);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} // Add the box to the document
	Font titleFont1=FontFactory.getFont(FontFactory.HELVETICA_BOLD,16);
	Paragraph title1 = new Paragraph("\nAccount Transactions\n\n",titleFont1);
	title1.setAlignment(Element.ALIGN_CENTER);
	// Add the title to the document
	try {
		document.add(title1);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	List<Transaction> statementList= findDocumentsBetweenDates(id,t1,t2);
    PdfPTable content = new PdfPTable(7);
    String[] columnHeaders = {"ID", "Acc_ID", "Trans_Type", "Trans_Category", "Date/Time", "Amount", "Closing_Balance"};
	 // Add column headers to the table
	 for (String columnHeader : columnHeaders) {
	     PdfPCell headerCell = new PdfPCell(new Phrase(columnHeader));
	     //headerCell.setBackgroundColor(BaseColor.GRAY); // Optional: Set header cell background color
	     content.addCell(headerCell);
	 }
    for (Transaction statement1 : statementList) {
    	content.addCell(statement1.getTrans_id());
    	content.addCell(statement1.getAcc_id());
    	content.addCell(statement1.getTransaction_type());
    	content.addCell(statement1.getTransaction_category());
    	content.addCell(statement1.getDate_time());
    	content.addCell(String.valueOf(statement1.getAmount()));
    	content.addCell(String.valueOf(statement1.getBalance()));
    }
	
	try {
		document.add(content);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	document.close();
	return new ByteArrayInputStream(out.toByteArray());
	
}
public List<Transaction> findDocuments(String id) {
    System.out.println("Inside called");
    
    Query query = new Query(Criteria.where("acc_id").is(id));
    List<Transaction> result = mongoTemplate.find(query, Transaction.class, "transaction");
    System.out.println(result);
    return result;
}
public ByteArrayInputStream createStatement(String id) {
    System.out.println("PDF gen started");
    String title = "Account Statement\n\n";
    ByteArrayOutputStream out = new ByteArrayOutputStream();
    Document document = new Document();
    try {
		PdfWriter.getInstance(document, out);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    document.open();
    Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 20);
    Paragraph titlePara = new Paragraph(title, titleFont);
    titlePara.setAlignment(Element.ALIGN_CENTER);
    try {
		document.add(titlePara);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    Gson gson = new Gson();
    Register s1 = findDocumentsWithStatusE(id);
    // Create a box for additional information
    PdfPTable infoBox = new PdfPTable(1);
    PdfPCell infoCell = new PdfPCell();
    infoCell.setBorder(Rectangle.BOX); // Set the border style to a box
    infoCell.setPadding(10); // Add padding to the cell
    infoCell.addElement(new Paragraph("Account User Details\nAccount Id: " + s1.getAcc_id() + "\nAccount Type: " + s1.getAcc_type() + "\nFirst Name: " + s1.getFirstname() + "\nLast Name: " + s1.getLastname() + "\nPhone Number: " + String.valueOf(s1.getPhonum() + "\nAddress: " + s1.getAddress() + "\nNominee: " + s1.getNominee() + "\n"))); // Add your content
    infoBox.addCell(infoCell);
    try {
		document.add(infoBox);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} // Add the box to the document
	Font titleFont1=FontFactory.getFont(FontFactory.HELVETICA_BOLD,16);
	Paragraph title1 = new Paragraph("\nAccount Transactions\n\n",titleFont1);
	title1.setAlignment(Element.ALIGN_CENTER);
	// Add the title to the document
	try {
		document.add(title1);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	List<Transaction> statementList= findDocuments(id);
    PdfPTable content = new PdfPTable(7);
    String[] columnHeaders = {"ID", "Acc_ID", "Trans_Type", "Trans_Category", "Date/Time", "Amount", "Closing_Balance"};
	 // Add column headers to the table
	 for (String columnHeader : columnHeaders) {
	     PdfPCell headerCell = new PdfPCell(new Phrase(columnHeader));
	     //headerCell.setBackgroundColor(BaseColor.GRAY); // Optional: Set header cell background color
	     content.addCell(headerCell);
	 }
    for (Transaction statement1 : statementList) {
    	content.addCell(statement1.getTrans_id());
    	content.addCell(statement1.getAcc_id());
    	content.addCell(statement1.getTransaction_type());
    	content.addCell(statement1.getTransaction_category());
    	content.addCell(statement1.getDate_time());
    	content.addCell(String.valueOf(statement1.getAmount()));
    	content.addCell(String.valueOf(statement1.getBalance()));
    }
	
	try {
		document.add(content);
	} catch (DocumentException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	document.close();
	return new ByteArrayInputStream(out.toByteArray());
	
}


}