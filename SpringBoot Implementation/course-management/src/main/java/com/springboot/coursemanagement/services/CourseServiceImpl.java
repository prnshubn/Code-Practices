package com.springboot.coursemanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.coursemanagement.dao.CourseDAO;
import com.springboot.coursemanagement.entities.Course;

@Service
public class CourseServiceImpl implements CourseService
{
	@Autowired
	private CourseDAO courseDAO;
	
	@Override
	public List<Course> getCourses()
	{
		return courseDAO.findAll();
	}

	@Override
	public Course getCourseById(int courseId)
	{
		return courseDAO.getReferenceById(courseId);
	}

	@Override
	public Course addCourse(Course course)
	{
		courseDAO.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course)
	{
		courseDAO.save(course);
		return course;
	}

	@Override
	public Course deleteCourse(int courseId)
	{
		Course course=courseDAO.getReferenceById(courseId);
		courseDAO.deleteById(courseId);
		return course;
	}
	
	
}
