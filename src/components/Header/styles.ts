import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 16rem;
  background-color: #6cac6c;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 80px;

  grid-area: h;

`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInputText = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 460px) {
    font-size: 20px;
  }
`

export const SearchInput = styled.input`
  background-color: white;
  border-radius: 40px;
  width: 30rem;
  height: 4rem;
  border: none;
  margin-bottom: 3.4rem;
  padding: 30px;
  font-size: 18px;
  outline: none;

  @media (max-width: 460px) {
    font-size: 16px;
    width: 20rem;
  }
`