import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./layout";
import routes from "./routes";

import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
