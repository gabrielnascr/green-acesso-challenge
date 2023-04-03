import React from 'react';
import { Container, InputWrapper, SearchInput, SearchInputText } from './styles'
import { useAppDispatch } from '@/redux';
import { setFilter } from '@/redux/modules/characters/characterSlice';

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <InputWrapper>
        <SearchInputText>
          Digite o nome de um personagem
        </SearchInputText>
        <SearchInput onChange={(e) => {
          dispatch(setFilter({
            name: e.target.value,
          }))
        }}/>
      </InputWrapper>
    </Container>
  )
}