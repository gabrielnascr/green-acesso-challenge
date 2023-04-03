/* eslint-disable react/jsx-key */
import Skeleton from "../..";
import { Container, CustomSkeleton, Row, Wrapper } from "./styles";

interface CharacterCardSkeleton {
  repeatTimes: number;
}

export default function CharacterCardSkeleton({
  repeatTimes = 10,
}: CharacterCardSkeleton) {
  return (
    <Wrapper>
      {Array(repeatTimes)
        .fill(undefined)
        .map(() => (
          <Container>
            <Row>
              <CustomSkeleton
                width={240}
                height={260}
              />
              <Skeleton
                width={160}
                height={16}
                style={{ marginTop: 6 }}
              />
            </Row>
            <Row style={{ marginTop: 40 }}>
              <Skeleton
                width={110}
                height={12}
              />
              <Skeleton
                style={{ marginTop: 6}}
                width={120}
                height={12}
              />
            </Row>
          </Container>
        ))}
    </Wrapper>
  );
}
