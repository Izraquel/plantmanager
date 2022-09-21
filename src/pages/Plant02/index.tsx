import { Button } from "../../components/Button";
import {
  Container,
  Content,
  Icon,
  Text01,
  Text02,
} from "./styles";


export function Plant02() {
  return (
    <Container>
     <Content>
      <Icon name="smile-beam" />
      <Text01>Prontinho</Text01>
      <Text02>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Text02>
       <Button button="Começar"/>
     </Content>
    </Container>
  )
}
