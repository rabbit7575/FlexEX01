
 // * 설치 시 에러 날 경우 node_modules 폴더 전체 삭제 그리고 해당 프로젝트 안 android에 들어가서 ./gradlew clean 처리
 // 1. npm install @react-navigation/native
 // 2. npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
 // 3. npm install @react-navigation/stack
 // 4. npm install react-native-elements
 // 5. npm install react-native-vector-icons
 // 6. npm install
 // index.js -> 첫 실행 경로 잡아준다. import App from './src/App';
 // 기본 -> import { View, Text } from 'react-native';
 import React, {Component} from 'react';
 import {StyleSheet, Text, View, Image} from 'react-native';
 import CustomButton from './CustomButton';
 
 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return (
       <View style={styles.container}>
         <View style={styles.header} />
         <View style={styles.title}>
           <Text style={{fontSize:35,color:'white'}}>어서와,{'\n'}개발은 처음이지?</Text>
         </View>
         <View style={styles.content}>
           <Image
             style={{height:'100%',width:'100%',resizeMode:'contain'}}
             source={{uri:'https://t1.daumcdn.net/cfile/tistory/9942214E5B5E76930B'}}/>
         </View>
         <View style={styles.footer}>
           <CustomButton
             buttonColor={'#444'}
             title={'회원가입'}
             onPress={() => alert('회원가입 버튼')}/>
           <CustomButton
           buttonColor={'#023e73'}
           title={'로그인'}
           onPress={() => alert('로그인 버튼')}/>
         </View>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10,
     backgroundColor: 'black',
   },
   header: {
     width:'100%',
     height:'5%',
     backgroundColor: '#ff9a9a',
   },
   title: {
     width:'100%',
     height:'18%',
     justifyContent: 'center',
     backgroundColor: '#9aa9ff',
   },
   content: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     paddingBottom:30,
     backgroundColor: '#d6ca1a',
   },
   footer: {
     width:'100%',
     height:'20%',
     //backgroundColor: '#1ad657',
   },
 });