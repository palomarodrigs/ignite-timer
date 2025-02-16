import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    margin-top: 2rem;
  }
`

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  &:focus-within {
    border-color: ${(props) => props.theme['green-500']};
  }
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;
  font-weight: bold;
  font-size: 1.125rem;

  color: ${(props) => props.theme['gray-100']};

  border: 0;
  background: transparent;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::-moz-calendar-picker-indicator {
    display: none !important;
  }

  &::-ms-clear {
    display: none !important;
  }

  &::-o-calendar-picker-indicator {
    display: none !important;
  }

  &::-khtml-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 2.3rem;
  text-align: center;
  border-bottom: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Oculta as setinhas em navegadores Firefox */
  -moz-appearance: textfield;
`

export const Button = styled.button`
  width: 1rem;
  height: 1rem;
  cursor: pointer;

  border: 0;
  background: none;
  color: ${(props) => props.theme['gray-500']};

  &:hover {
    color: ${(props) => props.theme['green-500']};
  }
`
