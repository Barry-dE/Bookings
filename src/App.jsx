import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Row type={"horizontal"}>
          <Heading as={"h1"}>Hello, World</Heading>

          <div>
            <Button> Submit </Button>
            <Input type="number" placeholder="Type your name" />
          </div>
        </Row>

        <Row type={"vertical"}>
          <Heading as={"h2"}>Hello, World</Heading>
          <form>
            <Button> Submit </Button>
            <Input type="number" placeholder="Type your name" />
          </form>
        </Row>
      </div>
    </>
  );
}

export default App;
