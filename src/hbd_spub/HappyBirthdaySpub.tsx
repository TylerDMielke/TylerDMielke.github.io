import { useEffect } from 'react';
import { useConfetti } from './hooks/useConfetti';
import AnimatedHeading from './components/AnimatedHeading';
import FloatingBalloons from './components/FloatingBalloons';
import InteractiveCake from './components/InteractiveCake';
import './HappyBirthdaySpub.css';

const HappyBirthdaySpub = () => {
  const { canvasRef, fire } = useConfetti();

  useEffect(() => {
    fire(window.innerWidth / 2, window.innerHeight / 3, 120);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="hbd-spub"
      onClick={(event) => fire(event.clientX, event.clientY, 40)}
    >
      <canvas ref={canvasRef} className="hbd-spub-confetti-canvas" />

      <div className="hbd-spub-content">
        <AnimatedHeading />
        <InteractiveCake fire={fire} />
        <button
          type="button"
          className="hbd-spub-pop-button"
          onClick={(event) => {
            event.stopPropagation();
            fire(window.innerWidth / 2, window.innerHeight / 2, 100);
          }}
        >
          🎉 Pop Confetti!
        </button>
      </div>

      <FloatingBalloons fire={fire} />
    </div>
  );
};

export default HappyBirthdaySpub;
