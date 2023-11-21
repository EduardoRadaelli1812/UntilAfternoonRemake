import { useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';

const Question22 = () => {
  const navigate = useNavigate();

  const checkLocation = useCallback((latitude, longitude) => {
    if (
      (latitude >= -29.71407789725576 && latitude <= -29.712661536271973) &&
      (longitude >= -53.71744667151482 && longitude <= -53.71673052168946)
    ) {
      navigate('/melanieSelena');
    } else {
      alert('Make sure you are at the Technology Center (CT).');
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
    localStorage.setItem('lastVisitedPage', '/question22');
  }, []);

  return (
    <div className='qrcode'>
      <p>Great! Now go to the Technology Center (building 7) and make sure to turn on your device's location when you arrive at the location.</p>
      <h2>Note: Reload the page to update your location</h2>
      <Link to="/question2" id='back_qrcode'>BACK</Link>
    </div>
  );
}

export default Question22;
