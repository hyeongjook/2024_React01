import React from 'react';

function CourseListCard({items}) {
    const [course1, course2, course3] = items;
    return (
        <div className="card">
      <div className="card_header">강의 목록</div>
        <div className="card_body">
           <div className="courses">
                 <Courseitem {...course1}/>
                 <Courseitem {...course2}/>
                 <Courseitem {...course3}/>
               </div>
           </div>
      </div>
    );
}

export default CourseListCard;