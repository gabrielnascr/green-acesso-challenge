import styles from 'styled-components';

export const Container = styles.div`

  height: 100%;
  margin-bottom: 80px;

  display: grid;

  gap: 10px;

  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: 


  "h h h h  h h h h  h h h h"
  "f f f c  c c c c  c c c c"
  "f f f c  c c c c  c c c c";

  @media (max-width: 500px) {
    grid-template-areas: 

    "h h h h  h h h h  h h h h"
    "f f f f  f f f f  f f f f"
    "c c c c  c c c c  c c c c"
  }
  
`;

export const HeaderBox = styles.div`
  grid-area: h;
`;

export const FilterBox = styles.div`
  grid-area: f;
`;

export const CharactersBox = styles.div`
  grid-area: c;
  width: 100%;
  gap: 10px;

  @media (max-width: 460px) {
    margin-top: 4rem;
  }
`;

export const CharacterWrapper = styles.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 460px) {
    justify-content: center;
    align-items: center;
  }
`

export const NotFound = styles.h2`
  color: #53ABEE;
`;