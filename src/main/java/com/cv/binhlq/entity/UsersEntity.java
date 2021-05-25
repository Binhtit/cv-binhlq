/**
 * 
 */
package com.cv.binhlq.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Data;

/**
 * @author BinhLQ2
 *
 */

@Data
@Entity
public class UsersEntity extends BaseEntity {
	
	@Column(name = "NAME")
	private String name;

	@Column(name = "code")
	private String code;

}
