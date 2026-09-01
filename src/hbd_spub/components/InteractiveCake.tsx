import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import type { FireConfetti } from '../hooks/useConfetti';
import './InteractiveCake.css';

const CANDLE_COUNT = 5;

interface InteractiveCakeProps {
  fire: FireConfetti;
}

const InteractiveCake = ({ fire }: InteractiveCakeProps) => {
  const [lit, setLit] = useState<boolean[]>(() => Array(CANDLE_COUNT).fill(true));
  const [celebrated, setCelebrated] = useState(false);
  const allBlownOut = lit.every((isLit) => !isLit);

  useEffect(() => {
    if (allBlownOut && !celebrated) {
      setCelebrated(true);
      fire(window.innerWidth / 2, window.innerHeight / 2, 150);
    }
  }, [allBlownOut, celebrated, fire]);

  const handleBlow = (index: number) => {
    setLit((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });
  };

  return (
    <div className="hbd-spub-cake-wrap">
      <div className="hbd-spub-cake">
        <div className="hbd-spub-candles">
          {lit.map((isLit, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <button
              key={index}
              type="button"
              className="hbd-spub-candle"
              disabled={!isLit}
              aria-label={isLit ? 'Blow out candle' : 'Candle blown out'}
              onClick={(event) => {
                event.stopPropagation();
                handleBlow(index);
              }}
            >
              {isLit && <span className="hbd-spub-flame" />}
              <span className="hbd-spub-candle-stick" />
            </button>
          ))}
        </div>
        <div className="hbd-spub-cake-tier hbd-spub-cake-tier-top" />
        <div className="hbd-spub-cake-tier hbd-spub-cake-tier-bottom" />
      </div>
      {allBlownOut && (
        <Fade triggerOnce>
          <p className="hbd-spub-wish-text">Make a wish! 🎉</p>
        </Fade>
      )}
    </div>
  );
};

export default InteractiveCake;
