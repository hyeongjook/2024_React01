import React from 'react';

function Courseitem({title, description, image}) {
	return(
		<article className="course">
		<img className="course_img" src={image} alt='강의이미지' style={{width: "100px"}} />
		<div className="course_body">
			<div className="course_title">{title}</div>
			<div className="course_description">{description}</div>
			</div>
	</article>  
	);
}


export default CourseItem;