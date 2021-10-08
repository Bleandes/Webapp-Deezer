import { Container, PageView, NavigatorView } from "./style";
import Navbar from "../components/Navbar";

export function Default(props) {
  const { children } = props;
  return (
    <Container>
      <PageView>{children}</PageView>
      <NavigatorView>
        <Navbar />
      </NavigatorView>
    </Container>
  );
}

export default Default;
