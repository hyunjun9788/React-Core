import "./App.css";

function App() {
  const jsx = (
    <>
      <div>
        <ul>
          <li>안녕하세요</li>
          <li>남현준입니다.</li>
        </ul>
        <button>확인</button>
      </div>
    </>
  );
  console.log("virtualDom", jsx);
  return (
    <div>
      <ul>
        <li>안녕하세요</li>
        <li>남현준입니다.</li>
      </ul>
      <button>확인</button>
    </div>
  );
}

export default App;
