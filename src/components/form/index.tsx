import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CardForm } from '../../App';
import { useFocus } from '../../contexts/FocusContext';
import {
  FieldInput,
  FieldLabel,
  Form,
  FormField,
  FormInlineField,
  InlineInputs,
  Select,
  SelectOption,
  SubmitButton,
} from './style';

const CreditCardForm: React.FC<{}> = () => {
  const { register, handleSubmit } = useFormContext<CardForm>();
  const { setFocus, blur: onBlur } = useFocus();
  return (
    <Form onSubmit={handleSubmit((v) => alert(JSON.stringify(v, null, 2)))}>
      <FormField>
        <FieldLabel>Card Number</FieldLabel>
        <FieldInput
          onFocus={() => setFocus('numbers')}
          maxLength={16}
          placeholder='Credit Card Number' 
          {...register('numbers', { onBlur })}
        />
      </FormField>  

      <FormField>
        <FieldLabel>Card Name</FieldLabel>
        <FieldInput 
          onFocus={() => setFocus('name')}
          maxLength={30} 
          placeholder='Insert a Name' 
          {...register('name', { onBlur })}
        />
      </FormField>
      <FormInlineField>
        <FormField>
          <FieldLabel>Expiration Date</FieldLabel>
          <InlineInputs>
            <Select onFocus={() => setFocus('expires')} {...register('expires.mm', { onBlur })}>
              {Array.from({ length: 12 }).map((v, index) => (
                <SelectOption key={index}>{index + 1}</SelectOption>
              ))}
            </Select>
            <Select onFocus={() => setFocus('expires')} {...register('expires.yyyy', { onBlur })}>
              {Array.from({ length: 8 }).map((v, index) => (
                <SelectOption key={index}>{index + 22}</SelectOption>
              ))}
            </Select>
          </InlineInputs>
        </FormField>
        <FormField>
          <FieldLabel>CVV</FieldLabel>
          <FieldInput 
            maxLength={3} 
            onFocus={() => setFocus('cvv')}
            placeholder='CVV' 
            {...register('cvv', { onBlur })}
          />
        </FormField>
      </FormInlineField>  
      <FormField>
        <SubmitButton>Submit</SubmitButton>
      </FormField>
    </Form>
  );
};

export default CreditCardForm;
