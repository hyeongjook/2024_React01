import './App.css';
import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';
import Profile from './components/step02/Profile';

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
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      image: './img/tree-1.jpg',
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/tree-2.jpg',
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/tree-3.jpg',
    }
  ];
  return (
    <div className=''>
        <CourseListCard />
        <hr />
        <Profile />
    </div>
  );
}

export default App;
