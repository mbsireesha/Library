package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer>
{
Users findByUsername(String name);

}