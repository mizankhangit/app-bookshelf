import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './hoc/Layout';
import BookView from './components/Books/BookView';
import Login from './containers/Admin/Login';
import Auth from './hoc/Auth';
import User from './components/Admin';
import AddReview from './containers/Admin/Add';
import UserPosts from './components/Admin/UserPosts';
import Edit from './containers/Admin/Edit';
import Register from './containers/Admin/Register';
import LogOut from './components/Admin/LogOut';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/logout" exact component={Auth(LogOut, true)} />
        <Route path="/user/add" exact component={Auth(AddReview, true)} />
        <Route path="/user/register" exact component={Auth(Register, true)} />
        <Route path="/user/edit-post/:id" exact component={Auth(Edit, true)} />
        <Route path="/books/:id" exact component={Auth(BookView, null)} />
        <Route
          path="/user/user-reviews"
          exact
          component={Auth(UserPosts, true)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
