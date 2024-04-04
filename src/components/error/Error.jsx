import './error.css'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='div-error'>
      <h1>404 Not Found</h1>
      <Link to="/landing">
        <button className="logout" >Volver a la página de inicio</button>
      </Link>
    </div>
  );
}

export default Error;
