import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Dashboard
  })
);

export default Routes;