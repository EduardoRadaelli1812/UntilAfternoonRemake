import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import '../styles/styles.css';

const Cosmo = () => {
  const navigate = useNavigate();

  const checkLocation = useCallback((latitude, longitude) => {
    if (
      (latitude >= -29.713489627662913 && latitude <= -29.712709229302998) &&
      (longitude >= -53.71703673752115 && longitude <= -53.716724260109295)
    ) {
      navigate('/cutscene7');
    } else {
      alert('Make sure you are at the Cosmopolita Coffeehouse.');
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
    localStorage.setItem('lastVisitedPage', '/cosmo');
  }, []);

  return (
    <div className='qrcode'>
      <p>Great! Now go to the Cosmopolita Coffee (building 7) and make sure to turn on your device's location when you arrive at the location.</p>
      <h2>Note: Reload the page to update your location</h2>
      <Link to="/dialogue53" id='back_qrcode'>BACK</Link>
    </div>
  );
}

export default Cosmo;
