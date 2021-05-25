/**
 * 
 */
package com.cv.binhlq.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.Data;

/**
 * @author BinhLQ2
 *
 */

@MappedSuperclass
@Data
public class BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "CREATE_DATE")
	@CreatedDate
	private Date dateCreate;
	
	@Column(name = "CREATE_BY")
	@CreatedBy
	private String userCreate;
	
	@Column(name = "UPDATE_DATE")
	@LastModifiedDate
	private Date dateUpdate;
		
	@Column(name = "UPDATE_BY")
	@LastModifiedBy
	private String userUpdate;
	
	@Column(name = "DEL_F")
	private Integer delF;
}
