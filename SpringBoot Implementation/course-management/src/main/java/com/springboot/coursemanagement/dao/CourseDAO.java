package com.springboot.coursemanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.coursemanagement.entities.Course;

public interface CourseDAO extends JpaRepository<Course, Integer>
{
	
}
