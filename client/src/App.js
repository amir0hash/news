import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./Components/Admin";
import AddAuthorForm from "./Components/AdminComponents/AddAuthorForm";
import AddNewsForm from "./Components/AdminComponents/AddNewsForm";
import AdminAuthors from "./Components/AdminComponents/AdminAuthors";
import Category from "./Components/Category";
import CustomLayout from "./Components/CustomLayout";
import Erorre404 from "./Components/Erorre404";
import Home from "./Components/Home";
import Author from "./Components/Author";
import News from "./Components/News";
import AuthorNews from "./Components/AuthorNews";
import AdminAllNews from "./Components/AdminComponents/AdminAllNews";

function App() {
  return (
    <>
      <CustomLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={Erorre404} />
          <Route exact path="/news/:newsId" component={News} />
          <Route exact path="/news/author/:authorId" component={AuthorNews} />
          <Route exact path="/author/:authorId" component={Author} />
          <Route exact path="/category/:categoryName" component={Category} />
          <Route exact path="/admin/addNews/:authorId" component={AddNewsForm} />
          <Route exact path="/admin/addAuthor" component={AddAuthorForm} />
          <Route exact path="/admin/news" component={AdminAllNews} />
          <Route exact path="/admin/authors" component={AdminAuthors} />
          <Route exact path="/admin" component={Admin} />
          <Redirect to="/404" />
        </Switch>
      </CustomLayout>
    </>
  );
}

export default App;
