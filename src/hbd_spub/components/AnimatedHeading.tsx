import { Bounce } from 'react-awesome-reveal';
import './AnimatedHeading.css';

const WORDS = ['Happy', 'Birthday', 'Spub!', '🎉'];

const AnimatedHeading = () => (
  <h1 className="hbd-spub-heading">
    <Bounce cascade damping={0.5} duration={700} triggerOnce>
      {WORDS.map((word) => (
        <span key={word} className="hbd-spub-heading-word">
          {word}
        </span>
      ))}
    </Bounce>
  </h1>
);

export default AnimatedHeading;
