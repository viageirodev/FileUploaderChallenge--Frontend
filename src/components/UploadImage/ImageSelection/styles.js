import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.component};
  text-align: center;
  padding: 2rem;
`
export const Header = styled.div`
  h1 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.gray2};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.625rem;
    color: ${({ theme }) => theme.colors.gray3};
  }

  margin-bottom: 2rem;
`
export const DropZone = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #f6f8fb;
  border: 1px dashed #97bef4;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;
  img {
    margin-bottom: 2.5rem;
  }
  span {
    display: block;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray4};
  }
`
export const ImagePreview = styled.img`
  background-color: #f6f8fb;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  display: ${({ src }) => (src ? 'block' : 'none')};
  background-position: center;
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray4};
    margin: 1.25rem 0;
  }
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-family: 'Noto Sans', sans-serif;
    font-weigth: 500;
    border-radius: 8px;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    &.upload-btn {
      background-color: #219653;
      margin-top: 1rem;
      span {
        margin-left: 0.5rem;
      }
    }
  }
`
