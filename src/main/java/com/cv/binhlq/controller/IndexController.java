/**
 * 
 */
package com.cv.binhlq.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author BinhLQ2
 *
 */
@Controller
public class IndexController {

	@GetMapping(value="/")
	public String index() {
		
		return "index";
	}
	
}
