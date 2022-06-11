import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ListContainer = styled.aside`
  height: 100%;
  width: 300px;
  margin: 3px;
  padding: 10px;
  border: solid 1px ${props => props.theme.colors.secundary};
  border-radius: 5px;
`
export const RequestContainer = styled.div`
  height: 100%;
  width: calc((100% - 300px) / 2);
  margin: 3px;
  padding: 10px;
  border: solid 1px ${props => props.theme.colors.secundary};
  border-radius: 5px;
`

export const ResponseContainer = styled.div`
  height: 100%;
  width:calc((100% - 300px) / 2);
  margin: 3px;
  padding: 10px;
  border: solid 1px ${props => props.theme.colors.secundary};
  border-radius: 5px;
`