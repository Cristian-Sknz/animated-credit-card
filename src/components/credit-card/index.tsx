import React, { useEffect } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';
import CreditCardBack from './back';
import CreditCardFront from './front';
import { useFocus } from '../../contexts/FocusContext';

import {
  CreditCardContainer,
  CreditCardInner,
} from './style';

const useCreditCardAnimations = () => {
  const valueY = useMotionValue(20);
  const valueX = useMotionValue(20);
  const rotateY = useTransform(valueY, [-40, 20, 80], [-40, 0, 40], { clamp: true });
  const rotateX = useTransform(valueX, [-40, 20, 80], [-40, 0, 40], { clamp: true });

  const cardTransform = (({x, y}: any) => {
    valueY.set(parseFloat((x + '').replace('px', '')))
    valueX.set(parseFloat((y + '').replace('px', '')))

    return `translateX(calc((-50% - 20px) + ${x})) translateY(calc((50% - 20px) + ${y}))`;
  });

  return { rotateX, rotateY, onTransform: cardTransform };
}

export function getCardImage(inn: string) {
  if (!inn || inn.length < 4) return null;
  if (inn.startsWith('2') || inn.startsWith('5')) {
    return '/master_logo.png';
  } else if (inn.startsWith('4')) {
    return '/visa_logo.png';
  } else if (inn.startsWith('3')) {
    return '/amex_logo.png';
  }
  return null;
}

const CreditCard: React.FC = () => {
  const { onTransform, rotateX, rotateY } = useCreditCardAnimations();
  const { focus } = useFocus();

  const active = useMotionValue(0);
  const value = useTransform([active, rotateY], ([bol, y]) => (bol === 1) ? 180 : y);

  useEffect(() => {
    if ((active.get() === 1 && focus === 'cvv') 
      || (active.get() === 0 && focus !== 'cvv' )) {
      return;
    }
    active.set(focus === 'cvv' ? 1 : 0)
  }, [focus, active]);

  return (
    <CreditCardContainer drag transformTemplate={onTransform} 
      dragConstraints={{
        bottom: 20,
        left: 20,
        right: 20,
        top: 20
      }}
    >
      <CreditCardInner style={{ rotateY: value, rotateX }}>
        <CreditCardFront/>
        <CreditCardBack/>
      </CreditCardInner>
    </CreditCardContainer>
  );
};

export default CreditCard;
