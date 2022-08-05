import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

import { getCardImage } from '..';
import { toGroups } from '../front';
import { CardForm } from '../../../App';
import {
  CreditCardBack as CardBack,
  CardBackLine,
  CardBackLogo,
  CardCVVContainer,
  CVVLabel,
  CVVValue,
  CVVValueContainer,
} from './style';

const CreditCardBack: React.FC<{}> = () => {
  const { watch } = useFormContext<CardForm>();
  const cvv = watch('cvv');
  return (
    <CardBack>
      <CardBackLine />
      <CardCVVContainer>
        <CVVLabel>CVV</CVVLabel>
        <CVVValueContainer>
          <AnimatePresence>
            {Array.from({ length: 3 }).map((any, index) => (
              <CVVValue key={index}>{cvv[index] || '#'}</CVVValue>
            ))}
          </AnimatePresence>
        </CVVValueContainer>
        <CardBackLogo
          src={getCardImage(toGroups(watch('numbers'))[0]) || ''}
        />
      </CardCVVContainer>
    </CardBack>
  );
};

export default CreditCardBack;
