import { Routes, Route, Link } from 'react-router-dom';
import Ranking from './Ranking';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>より実践的なアプリケーション</h1>
      </header>
      <ul>
        <li><Link to="/all">すべてのカテゴリ</Link></li>
        <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
        <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Ranking />} />
        <Route path="/all" element={<Ranking />} />
        <Route path="/category/:id" element={<Ranking />} />
      </Routes>
    </div>
  );
}

export default App;
