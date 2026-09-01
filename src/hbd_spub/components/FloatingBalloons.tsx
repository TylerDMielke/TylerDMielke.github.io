import { useCallback, useState } from 'react';
import type { FireConfetti } from '../hooks/useConfetti';
import './FloatingBalloons.css';

interface Balloon {
  id: number;
  left: number;
  duration: number;
  delay: number;
  hue: number;
  popping: boolean;
}

const EMOJI = '🎈';
const BALLOON_COUNT = 8;
const POP_TRANSITION_MS = 250;

let nextId = 0;

const randomBalloon = (): Balloon => {
  nextId += 1;
  return {
    id: nextId,
    left: 5 + Math.random() * 90,
    duration: 8 + Math.random() * 6,
    delay: Math.random() * -10,
    hue: Math.floor(Math.random() * 360),
    popping: false,
  };
};

interface FloatingBalloonsProps {
  fire: FireConfetti;
}

const FloatingBalloons = ({ fire }: FloatingBalloonsProps) => {
  const [balloons, setBalloons] = useState<Balloon[]>(() => (
    Array.from({ length: BALLOON_COUNT }, randomBalloon)
  ));

  const handlePop = useCallback((index: number, x: number, y: number) => {
    fire(x, y, 24);
    setBalloons((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], popping: true };
      return next;
    });
    window.setTimeout(() => {
      setBalloons((prev) => {
        const next = [...prev];
        next[index] = randomBalloon();
        return next;
      });
    }, POP_TRANSITION_MS);
  }, [fire]);

  return (
    <div className="hbd-spub-balloons" aria-hidden="true">
      {balloons.map((balloon, index) => (
        <div
          key={balloon.id}
          className="hbd-spub-balloon"
          style={{
            left: `${balloon.left}%`,
            animationDuration: `${balloon.duration}s`,
            animationDelay: `${balloon.delay}s`,
          }}
        >
          <button
            type="button"
            className={`hbd-spub-balloon-inner${balloon.popping ? ' hbd-spub-balloon-popping' : ''}`}
            style={{ filter: `hue-rotate(${balloon.hue}deg)` }}
            aria-label="Pop balloon"
            onClick={(event) => {
              event.stopPropagation();
              handlePop(index, event.clientX, event.clientY);
            }}
          >
            {EMOJI}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
