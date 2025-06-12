package com.example.demo.Service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.example.demo.model.Books;
import com.example.demo.repository.BookRepository;

@Service
public class BookService {

    @Autowired
    BookRepository br;

    @Cacheable("hii")
    
    public List<Books> getBooks(String name){
        try {
            Thread.sleep(20000);
            List<Books> result=this.br.findByAuthor(name);
            return result;
        } catch (InterruptedException i) {
            Thread.currentThread().interrupt();
            throw new RuntimeException("Thread was interrupted", i);
        }
    }
}
