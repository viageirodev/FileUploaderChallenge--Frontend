import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.component};
  padding: 2rem;

  h1 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.gray2};
  }
`

export const LoadBar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray6};
  margin-top: 1.5rem;
`
export const LoadIndicator = styled.div.attrs(({ step }) => ({
  style: {
    transform: `translateX(${step}%)`,
  },
}))`
  width: 20%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.01s ease-in-out;
`
