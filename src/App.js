import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer"

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #161615;
  overflow-x: hidden;
`;

function App() {
  return (
    <Container>
      <Header/>
      <Main/>
    </Container>
  );
}

export default App;
