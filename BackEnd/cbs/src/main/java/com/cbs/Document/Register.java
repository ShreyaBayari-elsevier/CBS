package com.cbs.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("account_info")
public class Register {

        @Id
        private String acc_id;
		private String acc_type;
        private String firstname;
        private String lastname;
        private long phonum;
        private String address;
        private String nominee;
        private String nationality;
        private String pannum;
        private long aadhar;
        private Double balance;
        
		public Register(String acc_id, String acc_type, String firstname, String lastname, long phonum, String address,
				String nominee, String nationality, String pannum, long aadhar, Double balance) {
			super();
			this.acc_id = acc_id;
			this.acc_type = acc_type;
			this.firstname = firstname;
			this.lastname = lastname;
			this.phonum = phonum;
			this.address = address;
			this.nominee = nominee;
			this.nationality = nationality;
			this.pannum = pannum;
			this.aadhar = aadhar;
			this.balance = balance;
		}

		public String getAcc_id() {
			return acc_id;
		}

		public void setAcc_id(String acc_id) {
			this.acc_id = acc_id;
		}

		public String getAcc_type() {
			return acc_type;
		}

		public void setAcc_type(String acc_type) {
			this.acc_type = acc_type;
		}

		public String getFirstname() {
			return firstname;
		}

		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}

		public String getLastname() {
			return lastname;
		}

		public void setLastname(String lastname) {
			this.lastname = lastname;
		}

		public long getPhonum() {
			return phonum;
		}

		public void setPhonum(long phonum) {
			this.phonum = phonum;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getNominee() {
			return nominee;
		}

		public void setNominee(String nominee) {
			this.nominee = nominee;
		}

		public String getNationality() {
			return nationality;
		}

		public void setNationality(String nationality) {
			this.nationality = nationality;
		}

		public String getPannum() {
			return pannum;
		}

		public void setPannum(String pannum) {
			this.pannum = pannum;
		}

		public long getAadhar() {
			return aadhar;
		}

		public void setAadhar(long aadhar) {
			this.aadhar = aadhar;
		}

		public Double getBalance() {
			return balance;
		}

		public void setBalance(Double balance) {
			this.balance = balance;
		}        		      		
}      