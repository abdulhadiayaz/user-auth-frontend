import { Switch, Route } from "react-router-dom";

import Routes from "./routes";
import PageNotFound from "./screens/PageNotFound/PageNotFound";
import { NetworkConfig } from "./services/apiConfig";

NetworkConfig();
const App = () => {
  return (
    <Switch>
      <Routes />
      <Route path="*" exact component={PageNotFound} />
    </Switch>
  );
};

export default App;
