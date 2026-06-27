package com.example.nirmaanbackend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class StudentData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Student name is required")
    @Size(min = 2, max = 100, message = "Student name must be between 2 and 100 characters")
    private String studentName;

    @NotBlank(message = "Image URL is required")
    private String imageUrl;

    @NotBlank(message = "Course is required")
    @Size(max = 50, message = "Course name cannot exceed 50 characters")
    private String course;

    @Min(value = 1, message = "Rank must be greater than 0")
    private Integer rank;

    @DecimalMin(value = "0.0", message = "Marks cannot be negative")
    @DecimalMax(value = "200.0", message = "Marks cannot exceed 200")
    private Double marks;

    @Size(max = 150, message = "College name cannot exceed 150 characters")
    private String collegeName;

    @Size(max = 150, message = "Branch name cannot exceed 150 characters")
    private String branchName;

    @Min(value = 2000, message = "Admission year is invalid")
    @Max(value = 2100, message = "Admission year is invalid")
    private Integer admissionYear;

    @Min(value = 2000, message = "Achievement year is invalid")
    @Max(value = 2100, message = "Achievement year is invalid")
    private Integer achievementYear;

    @Column(length = 2000)
    @Size(max = 2000, message = "Testimonial cannot exceed 2000 characters")
    private String testimonial;

    @NotNull(message = "Featured flag is required")
    private Boolean featured;

    @Min(value = 1, message = "Display order must be at least 1")
    private Integer displayOrder;
    
}