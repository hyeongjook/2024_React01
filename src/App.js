import './App.css';
import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';

/* function Header() {
  return(
    <header>
      <h2>Header</h2>
    </header>
  );
}

function Footer() {
  return(
    <footer>
      <h2>Footer</h2>
    </footer>
  );
}
function Main() {
  return(
    <main>
      <Counter />
    </main>
  );
}

// 파스칼 케이스 사용해야 된다. (첫글자 대문자 단어 첫글자 대문자)
function Counter() {
  return(
    <button>Counter</button>
  );
} */

// 리액트에서는 class는 예약어이기 때문에 사용을 할 수 없고, 
// class 대신 className=''이라고 사용한다.
function App() {
  return (
    <div className=''>
        <CourseListCard />

    </div>
  );
}

export default App;
