package com.example.DotNote.Shared;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiError {
	
	private String path;
	private String status;
	private String message;
	private long timestamp = new Date().getTime();
	Map<String,String> validationErrors = null;
	

	

}
