import { Switch, Route, Redirect } from "react-router-dom";
import CustomLayout from "./Components/CustomLayout";
import Home from "./Components/Home";
import News from "./Components/News";

function App() {
  return (
    <>
      <CustomLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news/:newsId" component={News} />
        </Switch>
      </CustomLayout>
    </>
  );
}

export default App;
