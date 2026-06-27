package com.example.nirmaanbackend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nirmaanbackend.Model.StudentData;

public interface StudentRepo extends JpaRepository<StudentData, Long> {

    // Existing method
    List<StudentData> findByFeaturedTrueOrderByDisplayOrderAsc();

    // New methods for filtering by admission year
    List<StudentData> findByAdmissionYear(Integer admissionYear);
    
    List<StudentData> findByAdmissionYearAndFeaturedTrueOrderByDisplayOrderAsc(Integer admissionYear);

    // Optional: Get all featured students for a specific year (most useful)
    List<StudentData> findByFeaturedTrueAndAdmissionYearOrderByDisplayOrderAsc(Integer admissionYear);
}