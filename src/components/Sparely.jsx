import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DonateButton } from './DonateButton';
import { ChooseCharity } from './ChooseCharity';
import { SuggestRoundUp } from './SuggestRoundUp';
import { ThankYou } from './ThankYou';

export const Sparely = () => {
  const [stage, setStage] = useState(0);

  const nextStage = () => setStage(prev => prev + 1);
  const prevStage = () => setStage(prev => Math.max(0, prev - 1));
  const resetStage = () => setStage(0);

  return (
    <>  
      {stage === 0 && <DonateButton onClick={nextStage} />}
      {stage === 1 && <ChooseCharity onSelect={nextStage} />}
      {stage === 2 && <SuggestRoundUp onConfirm={nextStage} onChange={prevStage} />}
      {stage === 3 && <ThankYou onClose={resetStage} />}
    </>
  );
};

// Define other components similarly, making sure to handle animations and state transitions appropriately.
