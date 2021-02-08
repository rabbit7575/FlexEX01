/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// 플렉스는 비율이다.(영역)
class App extends Component {
  render(){
    return (
      
      <SafeAreaView style={styles.container}>
        {/* <View style={{ flex: 1,  backgroundColor:'red'}} >
        </View>
        <View style={{ flex: 2,  backgroundColor:'orange'}} >
        </View>
        <View style={{ flex: 3,  backgroundColor:'green'}} >
        </View> */}
        <View style={{ width:50, height:50,  backgroundColor:'red'}} >
        </View>
        <View style={{ width:50, height:50,  backgroundColor:'orange'}} >
        </View>
        <View style={{ width:50, height:50,  backgroundColor:'green'}} >
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container :{
    flex : 1,
    flexDirection : 'column',  //위에서 아래로(셋팅 값이 없으면 이게 기본)
    //flexDirection : 'column-reverse', 
    //flexDirection : 'row',  // 가로 왼쪽부터 
    //flexDirection : 'row-reverse', 
    // 세로에 대한 영역
    //justifyContent : "flex-start",
    //justifyContent : "center, flex-start",
    //justifyContent : "flex-end",
    //justifyContent : "space-between"
    //justifyContent : "space-around"
    // 가로에 대한 영역
    //alignItems : "flex-start"
    //alignItems : "center"
    //alignItems : "flex-end"
    //alignItems : "stretch"

    justifyContent : "center",
    alignItems : "center"
  }
});

export default App;
