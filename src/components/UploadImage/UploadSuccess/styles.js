import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.component};
  text-align: center;
  padding: 2rem;

  button {
    cursor: pointer;
    color: #ffff;
    font-weigth: 500;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    border: none;
    padding: 0.5rem 1rem;
    font-family: 'Noto Sans', sans-serif;
    font-weigth: 500;
  }
`
export const Header = styled.div`
  h1 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.gray2};
    margin-bottom: 1rem;
  }

  margin-bottom: 2rem;
`
export const UploadedImageContainer = styled.div`
  border-radius: 12px;
  height: 225px;
  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  margin-bottom: 2.5rem;
`

export const ImageLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray5};
  background-color: #f6f8fb;
  padding: 2px;
  margin-bottom: 2rem;
  span {
    display: block;
    padding-left: 0.5rem;
    padding-right: 1rem;
    flex: 1;
    text-align: left;
    font-size: 0.7rem;
  }
`
