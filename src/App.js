import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Layout.Default>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.componente}
              exact
            />
          ))}
        </Switch>
      </Layout.Default>
    </Router>
  );
}

export default App;
