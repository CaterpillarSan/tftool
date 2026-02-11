import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>TFT Tool</h1>
      <p className="home-description">Teamfight Tactics Set 16 ツール集</p>
      <div className="home-menu">
        <Link to="/item-quiz" className="menu-card">
          <span className="menu-icon">&#x1F9E9;</span>
          <span className="menu-title">アイテムクイズ</span>
          <span className="menu-desc">基本アイテムの組み合わせから合成アイテムを当てよう</span>
        </Link>
        <Link to="/emblem-quiz" className="menu-card">
          <span className="menu-icon">&#x1F3C5;</span>
          <span className="menu-title">紋章クイズ</span>
          <span className="menu-desc">チャンピオンの紋章を当てよう</span>
        </Link>
      </div>
    </div>
  );
}
