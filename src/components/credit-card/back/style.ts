import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CreditCardSides } from '../style';

export const CreditCardBack = styled.div`
  ${CreditCardSides}
  color: white;
  transform: rotateY(180deg);
  background-image: url(/card_background.jpg);
  flex-direction: column;
`;

export const CardBackLine = styled.div`
  background-color: black;
  opacity: .8;
  width: 100%;
  height: 2.8rem;
  margin-top: 1.8rem;
  margin-bottom: .7rem;

`

export const CardCVVContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: .2rem .6rem;
  border-radius: .3rem;
`;

export const CVVLabel = styled.span`
  font-family: Overpass;
  font-weight: 500;
  font-size: .8rem;
  align-self: flex-end;
  margin-right: .2rem;
`;

export const CVVValueContainer = styled(motion.div)`
  background-color: white;
  padding: .6rem .3rem;
  border-radius: .3rem;
  text-align: right;
  margin: .2rem 0;
`;

export const CVVValue = styled(motion.p)`
  display: inline-block;
  font-family: Overpass;
  font-weight: 400;
  font-size: .9rem;
  color: black;
`;

CVVValue.defaultProps = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 }
}

export const CardBackLogo = styled.img`
  display: block;
  height: 1.3rem;
  align-self: flex-end;
  padding: 1rem;
`;