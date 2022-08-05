import styled from '@emotion/styled';

export const Form = styled.form`
  padding: .7rem 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const FormField = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  flex: 1;
`;

export const FormInlineField = styled.fieldset`
  display: flex;
  flex-direction: row;
  gap: .4rem;
`;

export const FieldLabel = styled.label`
  font-family: Ubuntu Mono, monospace;
  font-size: .9rem;
  display: inline-block;
`;

export const FieldInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 1px solid #9b9b9b;
  :focus-visible {
    outline: 1px solid #6e81eb;
  }
`;

export const InlineInputs = styled.fieldset`
  display: flex;
  flex-direction: row;
  gap: .4rem;

`;

export const Select = styled.select`
  background-color: white;
  padding: 0.45rem;
  border-radius: 0.2rem;
  border: 1px solid #9b9b9b;
  flex: auto;
  font-family: Overpass;
  :focus-visible {
    outline: 1px solid #6e81eb;
  }
`;

export const SelectOption = styled.option`
  font-family: Overpass;
  padding: .4rem 0;
  :hover {
    background-color: #6e81eb;
  }
`;

export const SubmitButton = styled.button`
  font-family: Overpass;
  font-weight: 500;
  color: white;
  font-size: 1.1rem;
  background-color: #6e81eb;
  padding: .8rem;
  border: none;
  border-radius: .3rem;
`;