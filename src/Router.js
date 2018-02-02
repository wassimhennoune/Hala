import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Chat from './components/chat';
import EmailUs from './components/EmailUs';
import Test from './components/Test';

const RouterComponent = () => {
  return (
          <Router  navigationBarStyle={{ backgroundColor: '#238AC5' }}  titleStyle={{color :'#fff'}} sceneStyle={{backgroundColor:'#238AC5'}}>
            <Scene key="root" >
                  <Scene tabBarStyle={styles.tabBarStyle} key="login" initial component={LoginForm} hideNavBar  />
                  <Scene tabBarStyle={styles.tabBarStyle} key="emailUs" title="راسلنا" component={EmailUs} />
                  <Scene tabBarStyle={styles.tabBarStyle} key="chat" type="replace" hideNavBar component={Chat} />
                  <Scene tabBarStyle={styles.tabBarStyle} key="test" type="replace"    component={Test} />
            </Scene >
          </Router>
  );
};
const  styles={
tabBarStyle: {
        backgroundColor: '#eeeeee',
        indicatorStyle : {
            color: '#238AC5'
        },
    }
}

export default RouterComponent;
  