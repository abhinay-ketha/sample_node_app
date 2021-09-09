# nodejs-sample-app

setps to setup:  
1.git clone  
2.create .env file in root directory  
3.Add four environment variables into .env file

  MARIADB_HOST = 127.0.0.1  //cluster url or local mongodb url(assuming mongodb installed in local)  
  MARIADB_PWD = somerandontext  //
  MARIADB_USER = test_user  
  TEST_USERID = test_userid 


4. npm install  
5. npm start  // for starting nodejs server
6. npm test  //for running unit test cases

Two api's implemented for create user registration and fetch user details

6. url: hostname+ '/user/fetchall'  
    method: GET
      
              
 7. url: hostname+'/user/login'  
    method: POST,  
    payload: {  
              email: String,  
              password: String  
             }  


 8. url: hostname+'/user/:id'  
    method: GET 
             

  
