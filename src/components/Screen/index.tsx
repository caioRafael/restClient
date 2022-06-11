import { FC } from "react";
import { Container, ListContainer, RequestContainer, ResponseContainer } from "./styles";

const Screen:FC = () => {
    return (
        <Container>
            <ListContainer>
                <h1>Lista de Rotas</h1>
            </ListContainer>
            <RequestContainer>
                <h1>Lado das requeisições</h1>
            </RequestContainer>
            <ResponseContainer>
                <h1>Lado das respostas</h1>
            </ResponseContainer>
        </Container>
    )
}

export default Screen