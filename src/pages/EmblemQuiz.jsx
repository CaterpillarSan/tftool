import { Link } from 'react-router-dom';

export default function EmblemQuiz() {
  return (
    <div style={{ padding: '20px' }}>
      <Link to="/" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>&larr; トップに戻る</Link>
      <h1>Hello World</h1>
    </div>
  );
}
