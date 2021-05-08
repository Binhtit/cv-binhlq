/**
 * 
 */
package com.cv.binhlq.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author BinhLQ2
 *
 */
@Controller
public class IndexController {

//	@GetMapping(value="/")
	@RequestMapping("/") 
	public String index() {
		
		return "index";
	}
	
}
