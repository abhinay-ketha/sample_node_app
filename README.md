# nodejs-sample-app

setps to setup:  
1.git clone  
2.create .env file in root directory  
3.Add four environment variables into .env file

  MARIADB_HOST = 127.0.0.1  // local mariadb hostname)  
  MARIADB_PWD = somerandontext  //
  MARIADB_USER = test_user  
  TEST_USERID = test_userid 


4. npm install  
5. npm start  // for starting nodejs server
6. npm test  //for running unit test cases

 Api's implemented for create fetch all, login  and fetch user by id

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
             

  
