import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Prevision from './components/Prevision';
import Home from './components/Home';


const FirstRoute = () => (
 <Home />
);

const SecondRoute = () => (
  <Prevision /> 
);

const initialLayout = { width: Dimensions.get('window').width };
export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Today' },
    { key: 'second', title: 'Next' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
  
   <View style={styles.container}>
         
 

    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
    </View>
       
  );
}

const styles = StyleSheet.create({
   container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      height: "100%",
      
   },

});