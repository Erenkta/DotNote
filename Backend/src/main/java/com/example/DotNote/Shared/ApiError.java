package com.example.DotNote.Shared;

import java.util.Date;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(value = Include.NON_NULL)
public class ApiError {
	
	private String path;
	private String status;
	private String message;
	private long timestamp = new Date().getTime();
	Map<String,String> validationErrors = null;
	

	

}
