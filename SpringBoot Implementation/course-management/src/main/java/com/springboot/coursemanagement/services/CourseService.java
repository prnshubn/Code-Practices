package com.springboot.coursemanagement.services;

import java.util.List;

import com.springboot.coursemanagement.entities.Course;

public interface CourseService
{
	public List<Course> getCourses();
	public Course getCourseById(int courseId);
	public Course addCourse(Course course);
	public Course updateCourse(Course course);
	public Course deleteCourse(int courseId);
}
