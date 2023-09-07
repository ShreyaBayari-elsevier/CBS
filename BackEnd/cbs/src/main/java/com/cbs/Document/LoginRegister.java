package com.cbs.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document("login")
public class LoginRegister {
		
		@Id
		private String acc_id;
	    private String password;
	    
		public String getAcc_id() {
			return acc_id;
		}

		public void setAcc_id(String acc_id) {
			this.acc_id = acc_id;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public LoginRegister(String acc_id, String password) {
			super();
			this.acc_id = acc_id;
			this.password = password;
		}	    
}
