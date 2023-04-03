import React, { useMemo } from "react";

import {
  ClearFilterText,
  Container,
  Content,
  FilterBadge,
  FilterBadgeContainer,
  FilterBadgeText,
  FilterType,
  FilterTypeTitle,
  Title,
} from "./styles";
import {
  GenderEnum,
  StatusEnum,
  setFilter,
} from "@/redux/modules/characters/characterSlice";

import { useCharacters } from "@/redux/modules/characters/useCharacters";
import { useAppDispatch } from "@/redux";

interface FilterType {
  name: string;
  badges: {
    id: string;
    label: string;
  }[];
}

export default function Filter() {
  const filter: FilterType[] = [
    {
      name: "Status",
      badges: [
        {
          id: "Alive",
          label: "Vivo",
        },
        {
          id: "Dead",
          label: "Morto",
        },
      ],
    },
    {
      name: "Gênero",
      badges: [
        {
          id: "Male",
          label: "Masculino",
        },
        {
          id: "Female",
          label: "Feminino",
        },
      ],
    },
    {
      name: "Espécie",
      badges: [
        {
          id: "Male",
          label: "Humano",
        },
        {
          id: "Female",
          label: "Alienigina",
        },
        {
          id: "Female",
          label: "Animal",
        },
        {
          id: "Female",
          label: "Robô",
        },
        {
          id: "Female",
          label: "Humanoíde",
        },
      ],
    },
  ];

  const dispatch = useAppDispatch();
  
  const { searchQueries } = useCharacters();

  const updateStatusFilter = (status: StatusEnum | undefined) => {
    dispatch(
      setFilter({
        status,
      })
    )
  };

  const updateGenderFilter = (gender: GenderEnum | undefined) => {
    dispatch(
      setFilter({
        gender: gender,
      })
    )
  };

  const clearFilters = () => {
    dispatch(
      setFilter({
        gender: '',
        status: '',
        name: '',
      })
    )
  };

  const selectedGender = useMemo(() => {
    return searchQueries.gender;
  }, [searchQueries.gender]);

  const selectedStatus = useMemo(() => {
    return searchQueries.status;
  }, [searchQueries.status]);

  return (
    <Container>
      <Title>Filtro</Title>
      <ClearFilterText onClick={() => clearFilters()}>
        Limpar filtros
      </ClearFilterText>
      <Content>
        <FilterType>
          <FilterTypeTitle>Status:</FilterTypeTitle>
          <FilterBadgeContainer>
            <FilterBadge isSelected={selectedStatus === StatusEnum.ALIVE} onClick={() => {
              updateStatusFilter(StatusEnum.ALIVE)
            }}>
              <FilterBadgeText isSelected={selectedStatus === StatusEnum.ALIVE}>Vivo</FilterBadgeText>
            </FilterBadge>
            <FilterBadge isSelected={selectedStatus === StatusEnum.DEAD} onClick={() => {
              updateStatusFilter(StatusEnum.DEAD)
            }}>
              <FilterBadgeText isSelected={selectedStatus === StatusEnum.DEAD}>Morto</FilterBadgeText>
            </FilterBadge>
          </FilterBadgeContainer>
        </FilterType>
        <FilterType>
          <FilterTypeTitle>Gênero:</FilterTypeTitle>
          <FilterBadgeContainer>
            <FilterBadge isSelected={selectedGender === GenderEnum.MALE} onClick={() => {
              if (selectedGender === GenderEnum.MALE) {
                updateGenderFilter(undefined)

                return;
              }
              updateGenderFilter(GenderEnum.MALE)
            }}>
              <FilterBadgeText isSelected={selectedGender === GenderEnum.MALE}>Masculino</FilterBadgeText>
            </FilterBadge>
            <FilterBadge isSelected={selectedGender === GenderEnum.FEMALE} onClick={() => {
              updateGenderFilter(GenderEnum.FEMALE)
            }}>
              <FilterBadgeText isSelected={selectedGender === GenderEnum.FEMALE}>Feminino</FilterBadgeText>
            </FilterBadge>
          </FilterBadgeContainer>
        </FilterType>
        {/* <FilterType>
          <FilterTypeTitle>Espécie:</FilterTypeTitle>
          <FilterBadgeContainer>
            <FilterBadge isSelected={true}>
              <FilterBadgeText isSelected={true}>Humano</FilterBadgeText>
            </FilterBadge>
            <FilterBadge isSelected={false}>
              <FilterBadgeText isSelected={false}>Alienigina</FilterBadgeText>
            </FilterBadge>
            <FilterBadge isSelected={false}>
              <FilterBadgeText isSelected={false}>Animal</FilterBadgeText>
            </FilterBadge>
            <FilterBadge isSelected={false}>
              <FilterBadgeText isSelected={false}>Robô</FilterBadgeText>
            </FilterBadge>
            <FilterBadge isSelected={false}>
              <FilterBadgeText isSelected={false}>Humanoíde</FilterBadgeText>
            </FilterBadge>
          </FilterBadgeContainer>
        </FilterType> */}
      </Content>
    </Container>
  );
}
