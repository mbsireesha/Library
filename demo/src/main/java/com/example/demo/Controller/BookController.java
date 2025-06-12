package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.BookService;
import com.example.demo.model.Books;
import com.example.demo.repository.BookRepository;


@RestController
@RequestMapping("/book")

@CrossOrigin(origins = "http://localhost:5173") 
public class BookController {

    @Autowired
    BookRepository br;

    @Autowired
    BookService b;

    @PostMapping("/AddBook")
    public ResponseEntity<String> addBook(@RequestBody Books b) {
        Books result = br.findByTitle(b.getTitle());
        if (result != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("book already exists");
        }
        br.save(b);
        return ResponseEntity.status(HttpStatus.CREATED).body("book added successfully");
    }
    //@GetMapping
   // public List<Books> viewAll() {
       // return br.findAll();
    //}

    @PostMapping("/authorform/{name}")

    List<Books> viewbyAuthor(@PathVariable String name ){
        List<Books> result= this.b.getBooks(name);
        return result;
    }
@GetMapping
public ResponseEntity<Page<Books>> getBooks(@RequestParam(defaultValue = "0")int page,
                                            @RequestParam(defaultValue = "5")int size)
{
    Pageable pageable=PageRequest.of(page,size);
    Page<Books> booksPage=this.br.findAll(pageable);
    return ResponseEntity.ok(booksPage);

}
    




















}