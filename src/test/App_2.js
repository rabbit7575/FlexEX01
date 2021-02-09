
 // * 설치 시 에러 날 경우 node_modules 폴더 전체 삭제 그리고 해당 프로젝트 안 android에 들어가서 ./gradlew clean 처리
 // 1. npm install @react-navigation/native
 // 2. npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
 // 3. npm install @react-navigation/stack
 // 4. npm install react-native-elements
 // 5. npm install react-native-vector-icons
 // 6. npm install
 // index.js -> 첫 실행 경로 잡아준다. import App from './src/App';
 // 기본 -> import { View, Text } from 'react-native';

    //flexDirection : 'column',  //위에서 아래로(셋팅 값이 없으면 이게 기본)
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

    //justifyContent : "center",
    //alignItems : "center"

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// FLEX는 비율이다.(영역)
class App extends Component {
  render(){
    return (
      // safeAreaView는 최상단 최하단 사이즈 맞게 함
      <SafeAreaView style={styles.container}>
        {/* 헤더 영역 */}
        <View style={styles.header} />
        {/* 컨텐츠 영역 */}
        <View style={styles.content}>
          {/* 첫번째 줄 영역 */}
          <View style = {styles.elem}>
            <View style = {styles.userInfo}>
              <View style = {styles.profile}/>
              <Text style = {styles.name}>이름1</Text>
            </View>
            <View style = {styles.userComment}>
              <Text>아무거나 치셈</Text>
            </View>
          </View>
          {/* 두번째 줄 영역 */}
          <View style = {styles.elem}>
            <View style = {styles.userInfo}>
              <View style = {styles.profile}/>
              <Text style = {styles.name}>이름1</Text>
            </View>
            <View style = {styles.userComment}>
              <Text>아무거나 치셈</Text>
            </View>
          </View>

        </View>
        {/* 컨텐츠 영역 끝 */}
        {/* 푸터 영역 */}
        <View style={styles.footer} />

      </SafeAreaView>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:60,
    backgroundColor:'green',
  },
  footer: {
    height:60,
    backgroundColor:'red',
  },
  content: {
    flex:1,
  },

  elem: {
    width: '100%',
    flexDirection: 'row',
    //* 가로, 세로 배치는 Flex Direction 스타일로 설정
    //* 가로 배치는 row, 세로 배치는 column이고 기본 값은 column       

    alignItems: 'center',
    //* Align Items는 Flex Direction과 수직한 방향으로 정렬
    //* flexDirection: 'column'에서 Align Items는 가로 정렬, flexDirection: 'row'에서 Align Items는 세로 정렬을 뜻함
    //* flex-start, center, flex-end, stretch 속성을 가짐 
    
    justifyContent: 'space-between',
    //* Justify Content는 Flex Direction과 동일한 방향으로 정렬
    //* flexDirection: 'column'에서 Justify Content는 세로 정렬, flexDirection: 'row'에서 Justify Content는 가로 정렬을 뜻함
    //* flex-start, center, flex-end, space-between, space-around 속성을 가짐
    
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'yellow',
    borderRadius:5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },
  name: {
    paddingLeft: 10,
  }
});

export default App;
