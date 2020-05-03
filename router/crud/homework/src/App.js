import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadPage from './components/HeadPage';
import NotFoundPage from './components/NotFoundPage';
import CreatePost from './components/CreatePost';
import DisplayPage from './components/DisplayPage';
import EditPage from './components/EditPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HeadPage} />
        <Route path="/posts/new" exact component={CreatePost}/>
        <Route path="/posts/:id" exact component={DisplayPage} />
        <Route path="/posts/:id/:edit" exact component={EditPage} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Router>
  )
}
