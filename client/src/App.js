import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./Components/Admin";
import AddAuthorForm from "./Components/AdminComponents/AddAuthorForm";
import AddNewsForm from "./Components/AdminComponents/AddNewsForm";
import Authors from "./Components/AdminComponents/Authors";
import Category from "./Components/Category";
import CustomLayout from "./Components/CustomLayout";
import Erorre404 from "./Components/Erorre404";
import Home from "./Components/Home";
import News from "./Components/News";

function App() {
  return (
    <>
      <CustomLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={Erorre404} />
          <Route exact path="/news/:newsId" component={News} />
          <Route exact path="/category/:categoryName" component={Category} />
          <Route exact path="/admin/addNews" component={AddNewsForm} />
          <Route exact path="/admin/addAuthor" component={AddAuthorForm} />
          <Route exact path="/admin/authors" component={Authors} />
          <Route exact path="/admin" component={Admin} /> 
          <Redirect to="/404" />
        </Switch>
      </CustomLayout>
    </>
  );
}

export default App;
