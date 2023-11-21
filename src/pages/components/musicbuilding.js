import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import '../styles/styles.css';

const Musicbuilding = () => {
  const navigate = useNavigate();

  const checkLocation = useCallback((latitude, longitude) => {
    if (
      (latitude >= -29.72000853627068 && latitude <= -29.719239835611145) &&
      (longitude >= -53.720947018612684 && longitude <= -53.72007127740416)
    ) {
      navigate('/cutscene8');
    } else {
      alert('Make sure you are at the Music Building (40B).');
    }
  }, [navigate]);

  const getUserLocation = useCallback(async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const isReloaded = localStorage.getItem('isReloaded') === 'true';

      if (isReloaded) {
        checkLocation(position.coords.latitude, position.coords.longitude);
      } else {
        localStorage.setItem('isReloaded', 'true');
      }
    } catch (error) {
      console.error('Error getting user location:', error);
    }
  }, [checkLocation]);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/musicbuilding');
  }, []);

  return (
    <div className='qrcode'>
      <p>Great! Now go to the Music Building (40B) and make sure to turn on your device's location when you arrive at the location.</p>
      <h2>Note: Reload the page to update your location</h2>
      <Link to="/c57" id='back_qrcode'>BACK</Link>
    </div>
  );
}

export default Musicbuilding;
