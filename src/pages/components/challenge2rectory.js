import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Challenge2rectory = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge2rectory');
    }, []);
  return (
    <>
    <div className='text'>
        <p>Little Red Riding Hood works at the rectory!<br></br> Makes perfect sense, it's near. That's probably the place they're talking about." you thought. And then you sighed, wondering if there was still any chance of catching them. But then you realized: the note was still in place! This could indicate that the hacker had not shown up. You carefully folded the paper and put it back between the tree and the red ribbon, looking around to see if anyone was watching, but there was no one. <br></br>Then you reflected "Where would be the best place for me to wait for the hacker to show up?</p>
        <Link id='back_text' to="/challenge2">BACK</Link>
        <Link id='next_text' to="/choose2">NEXT</Link>
    </div>
    </>
  );
}

export default Challenge2rectory;