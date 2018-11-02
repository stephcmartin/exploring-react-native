import React from 'react';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { Video } from './app/views/Video';
import { Login } from './app/views/Login';
import { Register } from './app/views/Register';
import { StackNavigator } from 'react-navigation';
import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';

const MyRoutes = StackNavigator({
  HomeRoute: {
    screen: Home
  },
  ContactRoute: {
    screen: Contact
  },
  LessonRoute: {
    screen: Video
  },
  SignUpRoute: {
    screen: Register
  },
  LoginRoute: {
  screen: Login
},
  QuizRoute: {
    screen: Quiz
  },
  FinishRoute: {
    screen: Finish
  },
},
{
  initialRouteName: 'HomeRoute'
}
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
