package com.example.nirmaanbackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.nirmaanbackend.DTO.TopRankerDTO;
import com.example.nirmaanbackend.Model.StudentData;
import com.example.nirmaanbackend.Service.StudentService;

@RestController
@RequestMapping("/student/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentDataController {


    @Autowired
    private StudentService studentService;

    @GetMapping("/getAllStudents")
    public ResponseEntity<List<StudentData>> getAllStudents() {
        List<StudentData> students = studentService.getallStudents();
        return ResponseEntity.ok(students);
    }

    @PostMapping("/addStudent")
    public ResponseEntity<StudentData> addStudent(@RequestBody StudentData studentData) {
        StudentData savedStudent = studentService.addStudent(studentData);
        return ResponseEntity.ok(savedStudent); 
    }

    @GetMapping("/featured")
public ResponseEntity<List<TopRankerDTO>> getFeaturedStudents() {

    return ResponseEntity.ok(
            studentService.getFeaturedStudents()
    );

    
}

@GetMapping("/getByYear/{year}")
public ResponseEntity<List<StudentData>> getStudentsByYear(@PathVariable Integer year) {
    List<StudentData> students = studentService.getStudentsByYear(year);
    return ResponseEntity.ok(students);
}
}
