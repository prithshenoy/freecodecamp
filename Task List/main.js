        let emailArray=[];
        let passwordArray=[];

        let loginBox = document.getElementById("login");
        let regBox = document.getElementById("register");
        let forgetBox = document.getElementById("forgot");

        let loginTab = document.getElementById("lt");
        let regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

           
        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

        }


        function register(){
            event.preventDefault();

            let email = document.getElementById("re").value;
            let password = document.getElementById("rp").value;
            let passwordRetype = document.getElementById("rrp").value;
           
            
           if (email == ""){
              document.getElementById("message").innerHTML = "**Email cannot be empty";  
                return ;
            }
            
            else if (password == ""){
              document.getElementById("message").innerHTML = "⚠️Password cannot be empty";  
              
                return ;
            }
            else if (passwordRetype == ""){
              document.getElementById("message").innerHTML = "⚠️ Please re-enter the password";  
                return ;
            }
            else if(password.length < 8){
              document.getElementById("message").innerHTML = "⚠️ Password length must be atleast 8 characters"; 
                return;
            }
            else if(password.length >15){
              document.getElementById("message").innerHTML = "⚠️ Password length must not exceed 15 characters";  
                return;
            }
            else if ( password != passwordRetype ){
              document.getElementById("message").innerHTML = "⚠️ Password does not match";  
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nYou can login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
                regBox.style.visibility="hidden";
                loginBox.style.visibility="visible";
                
            }
            
            else{
                alert(email + " is already registered.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                  document.getElementById("message").innerHTML = "⚠️ Email Required";  
                  return;
                }
                document.getElementById("message").innerHTML = "⚠️ Email does not exist";  
                return;
            }
            else if (password == ""){
              document.getElementById("message").innerHTML = "⚠️ Password required";  
              return;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                  document.getElementById("message").innerHTML = "⚠️ Password required";  
                  return;
                }
                document.getElementById("message").innerHTML = "⚠️ Password does not match";  
                return;
            }
            else {
                alert(email + " Login Successful😎");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                  document.getElementById("message").innerHTML = "⚠️Email required";  
                  return;
                }
                document.getElementById("message").innerHTML = "⚠️Email does not exist";  
                return;
            }

            alert("Password Reset link has been sent to your registered Email address📧 \n Thanks");
            document.getElementById("fe").value ="";
        }