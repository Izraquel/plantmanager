import { Card } from "../../components/Card/Index";
import { Content } from "../Plant01/styles";
import {
  Container,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Text,
  Comodos
} from "./styles";


export function Plant03() {
  const comodos = ["Sala", "Quarto", "Cozinha", "Banheiro"]
  return (
    <Container>
          <UserWrapper>
            <UserInfo>
              <User>
                <UserGreeting>Olá</UserGreeting>
                <UserName>Raquel</UserName>
              </User>

              <Photo
                source={{ uri: 'https://avatars.githubusercontent.com/u/56377044?v=4' }}
              />
            </UserInfo>
            
          </UserWrapper>
          <Text>Em qual ambiente você quer colocar sua planta?</Text>
          

          <Comodos>
          {comodos.map(nota => (
            <Card comodos={String(nota)} />
          ))}
        </Comodos>

    </Container>
  )
}

