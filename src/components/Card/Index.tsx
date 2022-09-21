import { Text, View } from "react-native";
import {
  Container,
  TitleCard
} from "./styles";

interface Props {
  comodos: string;
}

export function Card({ comodos }: Props) {
  return (
    <Container>
       <TitleCard>{comodos}</TitleCard>
    </Container>
  )
}
