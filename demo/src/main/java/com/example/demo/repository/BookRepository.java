package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.example.demo.model.Books;

@Repository
public interface BookRepository extends JpaRepository<Books,Integer>{

    Books findByTitle(String title);
    List<Books> findByAuthor(String author);
}