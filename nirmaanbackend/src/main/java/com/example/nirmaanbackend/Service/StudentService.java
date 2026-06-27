package com.example.nirmaanbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nirmaanbackend.DTO.TopRankerDTO;
import com.example.nirmaanbackend.Model.StudentData;
import com.example.nirmaanbackend.Repository.StudentRepo;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public List<StudentData> getallStudents()
    {
        return studentRepo.findAll();
    }
    
    public StudentData addStudent(StudentData studentData)
    {
        return studentRepo.save(studentData);
    }

    public List<TopRankerDTO> getFeaturedStudents() {

    return studentRepo.findByFeaturedTrueOrderByDisplayOrderAsc()
            .stream()
            .map(student -> new TopRankerDTO(
                    student.getImageUrl(),
                    student.getStudentName(),
                    student.getCourse(),
                    student.getMarks()
            ))
            .toList();
}

  public List<StudentData> getStudentsByYear(Integer year) {
    return studentRepo.findByFeaturedTrueAndAdmissionYearOrderByDisplayOrderAsc(year);
}

public List<StudentData> getAllFeaturedStudents() {
    return studentRepo.findByFeaturedTrueOrderByDisplayOrderAsc();
}
    
}
