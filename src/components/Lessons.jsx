
import { useHistory } from 'react-router-dom';

function Lessons() {
  const history = useHistory();

  const handleClick = () => {
    // Example of programmatic navigation
    history.push('/about');
  };

  return (
    <div>
      <h2>Lessons</h2>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}

export default Lessons;