import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CreditCardContainer = styled(motion.div)`
  width: 22.5rem;
  height: 14rem;

  position: absolute;
  top: -60%;
  left: 50%;
  transform: translate(-50%, 50%);
  perspective: 1000px;
`;

export const CreditCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d; 
  box-shadow: 0px 0px .51rem 0px hwb(0deg 0% 100% / 40%);
  border-radius: 0.7rem;
`;

export const CreditCardSides = css`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.7rem; 
  user-select: none;
`