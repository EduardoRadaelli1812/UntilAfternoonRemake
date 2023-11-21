import { useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';

const Thewoods = () => {
  const navigate = useNavigate();

  const checkLocation = useCallback((latitude, longitude) => {
    if (
      (latitude >= -29.72335612273624 && latitude <= -29.720560912621625) &&
      (longitude >= -53.71653308124903 && longitude <= -53.71185530901322)
    ) {
      navigate('/cutscene4');
    } else {
      alert('Make sure you are near the UFSM woods.');
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
    localStorage.setItem('lastVisitedPage', '/thewoods');
  }, []);

  return (
    <div className='qrcode'>
      <p>Great! Now go to the UFSM woods and make sure to turn on your device's location when you arrive at the location.</p>
      <p>NOTE: You don't need to enter the forest; either of the two entrances will allow you to continue.</p>
      <h2>Note: Reload the page to update your location</h2>
      <Link to="/challenge1note" id='back_qrcode'>BACK</Link>
    </div>
  );
}

export default Thewoods;
