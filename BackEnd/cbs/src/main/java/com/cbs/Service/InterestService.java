package com.cbs.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cbs.Document.Transaction;
import com.cbs.Repository.InterestRepository;
import com.google.gson.Gson;

@Service
public class InterestService {

	 @Autowired
	    private InterestRepository repository;
	 @Autowired
	 	private MongoTemplate mongoTemplate;
	
	public Double intcalc(String id) {
	     Query query = new Query(Criteria.where("acc_id").is(id));
	     List<Transaction> s = mongoTemplate.find(query, Transaction.class,"transaction");
		 //List<InterestCalculation> s = repository.findAll();
		 Gson gson = new Gson();
		 String jsonArray = gson.toJson(s);
		 System.out.println(jsonArray);
		 List<Object> lst=getDateArray1(id);
		// Convert the Date to a Calendar
	        Calendar calendar = Calendar.getInstance();
	        calendar.setTime(new Date());

	        // Increment the date by 90 days
	        calendar.add(Calendar.DAY_OF_MONTH, -90);

	        // Get the updated Date object
	        Date toDate = calendar.getTime();
	        
		 List<String> caldays=getCalendardays(toDate,new Date());
		 
		 List<Double> dailybalances=getdailybalances(caldays,lst);
		 
		 Double interest=interestcals(dailybalances);
		 
		 System.out.println(caldays);
		 
		 return interest;
	}
	
	public Double interestcals(List<Double> dailybalances)
	{
		Double interest=0.0;
		for(Double bal:dailybalances)
		{
			//System.out.println((bal*4)/(365*100));
			interest=interest+((bal*4)/(365*100));
		}
		return interest;
	}
	
private List<Double> getdailybalances(List<String> caldays, List<Object> lst) {
		// TODO Auto-generated method stub
		List<String> txdates=(List<String>) lst.get(0);
		List<Double> balances=(List<Double>) lst.get(1);
		List<Double> dailybalance=new ArrayList<>();
		for(String cday:caldays)
		{
			boolean flag=false;
			for(String txdate:txdates)
			{
				if(cday.equals(txdate))
				{
					flag=true;
					int i=txdates.indexOf(txdate);
					dailybalance.add(balances.get(i));
				}
			}
			if(flag==false)
			{
				List<Date> dts=new ArrayList<>();
				SimpleDateFormat sdf=new SimpleDateFormat("YYYY-MM-dd");
				try {
					Date caldt=sdf.parse(cday);
					for(String txdt:txdates)
					{
						Date dt=sdf.parse(txdt);
						dts.add(dt);
					}
					int j=0;
					for(Date d:dts)
					{
						if(d.compareTo(caldt)<0)
						{
							j=dts.indexOf(d);
						}
					}
					dailybalance.add(balances.get(j));
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		System.out.println(dailybalance);
		return dailybalance;
	}


	
	public List<Object> getDateArray1(String id) {
		// loop and get the dates, store them into the List
		Query query = new Query(Criteria.where("acc_id").is(id));
	     List<Transaction> s = mongoTemplate.find(query, Transaction.class,"transaction");
		 //List<InterestCalculation> s = repository.findAll();
		List<String> dates=new ArrayList<>();
		List<Double> balances=new ArrayList<>();
		String tempid=null;
		String tempdate=null;
		 for(Transaction obj:s)
		 {
			 tempdate=obj.getDate_time();
			 tempdate=tempdate.substring(0, 10);
			 dates.add(tempdate);
		 }
		 HashSet<String> distinctSet = new HashSet<>(dates);
	        // Create a new ArrayList from the distinct values
	     List<String> distinctList = new ArrayList<>(distinctSet);
	     System.out.println(distinctList);
	     distinctList=getsortedlist(distinctList);
	     for(String date:distinctList)
	     {
	    	 Double bal=0.0;
	    	 for(Transaction obj:s)
			 { 
				 tempdate=obj.getDate_time();
				 tempdate=tempdate.substring(0, 10);
				 if(tempdate.equals(date))
				 {
					 if(tempid==null)
					 {
						 bal=obj.getBalance();
						 System.out.println(bal);
						 tempid=obj.getTrans_id();
						 System.out.println(tempid);
					 }
					 else
					 {
						 int tempid1=Integer.parseInt(tempid);
						 int objid=Integer.parseInt(obj.getTrans_id());
						 if(tempid1<objid)
						 {
							 bal=obj.getBalance();
							 System.out.println(bal);
							 tempid=obj.getTrans_id();
						 }
					 }
				 }
			 }
	    	balances.add(bal);
	     }
	     List<Object> l=new ArrayList<>();
	     l.add(distinctList);
	     l.add(balances);
		 return l;
	}
	
	private List<String> getsortedlist(List<String> distinctList) {
	// TODO Auto-generated method stub
		List<String> newlst=new ArrayList<>();
		List<Date> dates=new ArrayList<>();
		for(String s:distinctList)
		{
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	      
	            try {
					Date date = dateFormat.parse(s);
					dates.add(date);
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}     
		}
		Collections.sort(dates);
		for(Date d:dates)
		{
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	      
	            try {
					String date = dateFormat.format(d);
					newlst.add(date);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}     
		}
	return newlst;
}

	public List<String> getCalendardays(Date fromdate,Date todate)
	{
		SimpleDateFormat sdf=new SimpleDateFormat("YYYY-MM-dd");
		List<String> caldays=new ArrayList<>();
		while((fromdate.compareTo(todate))!=0)
		{
			caldays.add(sdf.format(fromdate));

	        // Convert the Date to a Calendar
	        Calendar calendar = Calendar.getInstance();
	        calendar.setTime(fromdate);

	        // Increment the date by one day
	        calendar.add(Calendar.DAY_OF_MONTH, 1);

	        // Get the updated Date object
	        Date nextDate = calendar.getTime();
	        fromdate=nextDate;
		}
		caldays.add(sdf.format(todate));
		return caldays;
	}
	
	
	public String getAllRecordsByID(String id) {
	 
		 Optional<Transaction> s = repository.findById(id);
		 Gson gson = new Gson();
		 String jsonArray = gson.toJson(s.get());
		 System.out.println(jsonArray);
		 return jsonArray;
	}
	
	public String createRecord(Transaction role) {
		// TODO Auto-generated method stub
		repository.save(role);
		return "Record Created Successfully";
	}  
	
	public String createRecords(List<Transaction> role) {
		// TODO Auto-generated method stub
		repository.saveAll(role);
		return "Record Created Successfully";
	}
	
}