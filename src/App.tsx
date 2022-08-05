import React from 'react';
import { Global as EmotionGlobal } from '@emotion/react';
import emotionReset from 'emotion-reset';
import CreditCard from './components/credit-card';
import CreditCardForm from './components/form';
import { Background, Container, Separator } from './style';
import { FormProvider, useForm } from 'react-hook-form';
import FocusProvider from './contexts/FocusContext';

export type CardForm = typeof FORM_DEFAULT;

const FORM_DEFAULT = {
  name: '',
  expires: {
    mm: '1',
    yyyy: '22'  
  },
  cvv: '',
  numbers: ''
}

const App : React.FC = () => {
  const form = useForm<CardForm>({
    defaultValues: FORM_DEFAULT
  });
  return (
    <Background>
      <EmotionGlobal styles={emotionReset}/>
      <FormProvider {...form}>
        <FocusProvider>
          <Container 
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: .4 }}
          >
            <CreditCard/>
            <Separator/>
            <CreditCardForm/>
          </Container>
        </FocusProvider>
      </FormProvider>
    </Background>
  );
}

export default App;
