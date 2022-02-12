import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./Components/Admin";
import Category from "./Components/Category";
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
          <Route exact path="/category/:categoryName" component={Category} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </CustomLayout>
    </>
  );
}

export default App;
