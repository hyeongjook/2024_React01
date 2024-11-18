import Courseitem from "./Courseitem";

function CourseListCard() {
    return (
              <div className="card">
              <div className="card_header">강의 목록</div>
        <div className="card_body">
          <div className="courses">
           <Courseitem />
            <Courseitem />
            <Courseitem />
          </div>
        </div>
        </div>
    );
}

export default CourseListCard;