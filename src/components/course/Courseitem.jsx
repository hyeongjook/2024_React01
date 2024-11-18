import React from "react";

 function Courseitem(props) {
	// 방법1
  /* const title = '입문자를 위한, HTML&CSS 웹 개발 입문';
  const description = '웹 개발에 필요한 기본 지식을 배웁니다.';
  const image = './img/coffee-blue.jpg';
  const alt = '강의 이미지'; */

  // 방법2
  const course = {
		title : '입문자를 위한, HTML&CSS 웹 개발 입문',
		description : '웹 개발에 필요한 기본 지식을 배웁니다.',
		image : './img/bg-light.jpg',
		alt : '강의 이미지' 

  } 

	 return (
		// 방법1
	//	<article className="course">
	//		<img className="course_img" src={image} alt={alt} style={{width: "100px"}} />
	//	<div className="course_body">
	//		<div className="course_title">{title}</div>
	//		<div className="course_description">{description}</div>
	//	</div>
	//	</article>

	// 방법2
	  <article className="course">
		<img className="course_img" src={course.image} alt={course.alt} style={{width: "100px"}} />
		<div className="course_body">
			<div className="course_title">{course.title}</div>
			<div className="course_description">{course.description}</div>
			</div>
	</article>  



	);
}
 






export default Courseitem;