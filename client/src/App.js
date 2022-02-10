import { Switch, Route, Redirect } from "react-router-dom";
import CustomLayout from "./Components/CustomLayout";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <CustomLayout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </CustomLayout>
    </>
  );
}

export default App;
