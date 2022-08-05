import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CreditCardSides } from '../style';

export const CreditCardFront = styled.div`
  ${CreditCardSides}
  background-image: url(/card_background.jpg);
  color: black;
`;

export const CreditCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0.8rem;
  flex: 1;
`;

export const AnimatedOverlay = styled(motion.div)`
  outline: 1px solid white;
`;

export const CardRow = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  color: white;

  &.middle {
    width: 85%;
    margin: 0.5rem;
    padding: 0.3rem;
  }
`;

export const CardLogo = styled.img`
  display: block;
  height: 1.9rem;
`;

export const CardChip = styled.img`
  display: block;
  width: 3.75rem;
  height: 3.125rem;
`;

export const CardNumberGroup = styled(motion.span)`
  display: flex;
  font-family: Overpass;
  font-weight: 500;
  word-wrap: normal;
  width: 4.625rem;
`;

export const AnimatedCardNumber = styled(motion.span)<{ isnumber?: boolean }>`
  ${(props) => css`
    display: block;
    font-size: ${props.isnumber ? '1.6rem' : '1.4rem'};
  `}
`;

AnimatedCardNumber.defaultProps = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
}

export const LetterGroup = styled.div`
  display: inline-block;
  margin-right: 0.3rem;
`;

export const AnimatedLetter = styled(motion.span)`
  display: inline-block;
  font-size: 1rem;
`;

AnimatedLetter.defaultProps = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
}

export const CardRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.4rem;
`;

export const CardLabel = styled.h3`
  font-family: Ubuntu Mono, monospace;
  letter-spacing: -0.3px;
  color: #a3a3a3;
  font-size: 0.9rem;
`;

export const CardValue = styled.span`
  font-family: Overpass;
  font-weight: 500;
`;
