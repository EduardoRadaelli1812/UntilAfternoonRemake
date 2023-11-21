import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import '../styles/styles.css';

const Choose22 = () => {
  const navigate = useNavigate();

  const checkLocation = useCallback((latitude, longitude) => {
    if (
      (latitude >= -29.721384290034617 && latitude <= -29.720440896785593) &&
      (longitude >= -53.714939610975144 && longitude <= -53.71457214833753)
    ) {
      navigate('/cutscene52');
    } else {
      alert('Make sure you are at the Rectory.');
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
    localStorage.setItem('lastVisitedPage', '/choose22');
  }, []);

  return (
    <div className='qrcode'>
      <p>Great! Now go to the Rectory and make sure to turn on your device's location when you arrive at the location.</p>
      <h2>Note: Reload the page to update your location</h2>
      <Link to="/choose2" id='back_qrcode'>BACK</Link>
    </div>
  );
}

export default Choose22;
