package com.example.demo.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.model.Users;
//import com.example.demo.repository.BookRepository;
import com.example.demo.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserConroller 
{
    @Autowired
    UserRepository ur;
    @PostMapping("/register")
    String register(@RequestBody Users u)
    {
    Users result=this.ur.findByUsername(u.getUsername());
    if(result!=null)
    {
        return "username already exsists";
    }
    this.ur.save(u);
    return "registration succesfully done";

      
    }

   @PostMapping("/login")
public String login(@RequestBody Users user) {
    Users result = ur.findByUsername(user.getUsername());
    if (result != null && result.getPassword().equals(user.getPassword())) {
        return "Login successfully done...";
    }
    return "Invalid username or password";
}


    }