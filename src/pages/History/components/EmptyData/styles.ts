import styled from 'styled-components'

export const EmptyDataContainer = styled.div`
  margin-top: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  span {
    font-weight: 700;
    color: ${(props) => props.theme['gray-300']};
  }

  p {
    text-align: center;
    color: ${(props) => props.theme['gray-500']};
  }
`
