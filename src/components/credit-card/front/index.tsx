import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

import { CardForm } from '../../../App';
import {
  CreditCardFront as CardFront,
  CreditCardContent,
  CardChip,
  CardRow,
  CardLogo,
  CardNumberGroup,
  AnimatedCardNumber,
  CardLabel,
  CardRowContainer,
  CardValue,
  AnimatedLetter,
  LetterGroup,
} from './style';
import { getCardImage } from '..';


export function toGroups(str: string) {
  const groups: string[] = [];
  let inner = [];
  for (let i = 0; i < 20; i++) {
    if (inner.length === 4) {
      groups.push(inner.join(''));
      inner = [];
    }
    inner.push(str[i] || '#');
  }
  return groups;
}

const CreditCardFront: React.FC = () => {
  const { watch } = useFormContext<CardForm>();
  
  const values = watch('numbers', '');
  const numbers = toGroups(values);

  let name = watch('name', '');
  name = name.length === 0 ? 'Insert a name' : name;

  let count = 0;
  return (
    <CardFront>
      <CreditCardContent>
        <CardRow className='top'>
          <CardChip src='/chip.png' />
          <CardLogo src={getCardImage(numbers[0]) || ''} />
        </CardRow>

        <CardRow className='middle'>
          {numbers.map((value, index) => {
            const group = Array.from({ length: 4 }).map((any, index) => value[index]);

            return (
              <AnimatePresence key={index}>
                <CardNumberGroup>
                  {group.map((v) => (
                    <AnimatedCardNumber
                      isnumber={v !== '#' ? true : undefined}
                      key={`${(count = count + 1)}-${v}`}
                    >
                      {v}
                    </AnimatedCardNumber>
                  ))}
                </CardNumberGroup>
              </AnimatePresence>
            );
          })}
        </CardRow>

        <CardRow>
          <CardRowContainer>
            <CardLabel>Card Holder</CardLabel>
            <CardValue>
              <AnimatePresence>
                {name.split(' ').map((group, key) => (
                  <LetterGroup key={key}>
                    {Array.from({ length: group.length }).map((any, index) => (
                      <AnimatedLetter key={index}>
                        {`${group[index]}`}
                      </AnimatedLetter>
                    ))}
                  </LetterGroup>
                ))}
              </AnimatePresence>
            </CardValue>
          </CardRowContainer>
          <CardRowContainer>
            <CardLabel>Expires</CardLabel>
            <AnimatePresence>
              <CardValue>
                <AnimatedLetter key={watch('expires.mm')}>
                  {watch('expires.mm')}
                </AnimatedLetter>
                <span>/</span>  
                <AnimatedLetter key={watch('expires.yyyy')}>
                  {watch('expires.yyyy')}
                </AnimatedLetter>
              </CardValue>
            </AnimatePresence>
          </CardRowContainer>
        </CardRow>
      </CreditCardContent>
    </CardFront>
  );
};

export default CreditCardFront;
