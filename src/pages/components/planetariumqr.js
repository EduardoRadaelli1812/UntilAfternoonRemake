import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import '../styles/styles.css';

const Planetariumqr = () => {
  const navigate = useNavigate();

  const checkLocation = useCallback((latitude, longitude) => {
    if (
      (latitude >= -29.72082757260528 && latitude <= -29.719520788640246) &&
      (longitude >= -53.71757219913129 && longitude <= -53.716687070218335)
    ) {
      navigate('/cutscene6');
    } else {
      alert('Make sure you are at the Planetarium.');
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
    localStorage.setItem('lastVisitedPage', '/planetariumqr');
  }, []);

  return (
    <div className='qrcode'>
      <p>Great! Now go to the Planetarium and make sure to turn on your device's location when you arrive at the location.</p>
      <h2>Note: Reload the page to update your location</h2>
      <Link to="/dialogue42" id='back_qrcode'>BACK</Link>
    </div>
  );
}

export default Planetariumqr;
