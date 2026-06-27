package com.example.nirmaanbackend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TopRankerDTO {

    private String imageUrl;
    private String studentName;
    private String course;
    private Double percentage;

}