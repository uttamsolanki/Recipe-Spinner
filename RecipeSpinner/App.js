import * as React from 'react';

import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import Drawer from './components/common/Drawer';
import Splash from './components/Splash/Splash'
import StaticPage from './components/StaticPage/StaticPage'
import EditFridge from './components/EditFridge/EditFridge'
// or any pure javascript modules available in npm
import { createStackNavigator} from 'react-navigation';

export default createStackNavigator({

		Home: {
		screen: Drawer,
		navigationOptions: {
		header: null
			}
	},
	 Login: {
    screen: Login
  },
   Splash:{
	 	screen: Splash
	 },
	 StaticPage:{
	 	screen: StaticPage
	 },

    ChangePassword: {
     screen: ChangePassword
   },
   SignIn: {
     screen: SignIn
   },
 
  SignUp: {
    screen: SignUp
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
	RecipeDetail:{
		screen: RecipeDetail
	},
	EditFridge:{
		screen:EditFridge
	},
});
