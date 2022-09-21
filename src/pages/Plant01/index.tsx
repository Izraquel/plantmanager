import {
  Container,
  Content,
  Icon,
  Text,
  InputName,
} from "./styles";

import { Button } from "../../components/Button";


export function Plant01() {
  return (
    <Container>
     <Content>
        <Icon name="happy" />
        <Text>Como podemos chamar você?</Text>

        <InputName placeholder="Digite um nome">
        </InputName>

      <Button button="Salvar"/>
        
     </Content>
    </Container>
  )
}
