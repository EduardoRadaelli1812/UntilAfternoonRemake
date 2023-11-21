import { useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';

const Question11 = () => {
  const navigate = useNavigate();

  const checkLocation = useCallback((latitude, longitude) => {
    if (
      (latitude >= -29.719226172274734 && latitude <= -29.717716706370712) &&
      (longitude >= -53.716200487503706 && longitude <= -53.71548701996013)
    ) {
      navigate('/cutscene3');
    } else {
      alert('Make sure you are at the Library of Arts and Languages Center (CAL).');
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
    localStorage.setItem('lastVisitedPage', '/question11');
  }, []);

  return (
    <div className='qrcode'>
      <p>Great! Now go to the Library of Arts and Languages Center (building 40) and make sure to turn on your device's location when you arrive at the location.</p>
      <h2>Note: Reload the page to update your location</h2>
      <Link to="/question1" id="back_qrcode">BACK</Link>
    </div>
  );
}

export default Question11;
