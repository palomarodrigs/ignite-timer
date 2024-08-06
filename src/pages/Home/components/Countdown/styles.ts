import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  line-height: 2rem;

  color: ${(props) => props.theme['gary-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    font-size: 10rem;
    line-height: 8rem;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  width: 2rem;
  padding: 2rem 0;

  overflow: hidden;
  color: ${(props) => props.theme['green-500']};

  @media (min-width: 768px) {
    width: 4rem;
  }
`
