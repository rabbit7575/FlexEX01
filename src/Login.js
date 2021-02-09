import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import CustomButton from './CustomButton';

type Props = {};
export default class Login extends Component<Props> {
    render(){
        return (
            // 전체 영역
            <View style={styles.container}>
                {/* 헤더 영역 */}
                <View style={styles.header}/>
                {/* 타이틀 영역 */}
                <View style={styles.title}>
                    <Text style={{fontSize:35, paddingBottom:20}}>로그인</Text>
                    <View style={{width:"100%", borderBottomWidth:0.5, borderColor : '#444'}}/>
                </View>
                {/* 컨텐츠 영역 */}
                <View style={styles.content}>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingBottom:10}}>
                        <Text style={{fontSize:15}}>아이디</Text>
                        <TextInput style={{borderColor:'#aaa', width:'70%', height:35, borderWidth:1, borderRadius:5, padding:5}}></TextInput>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingBottom:10}}>
                        <Text style={{fontSize:15}}>비밀번호</Text>
                        <TextInput style={{borderColor:'#aaa', width:'70%', height:35, borderWidth:1, borderRadius:5, padding:5}}></TextInput>
                    </View>

                </View>
                {/* 푸터 영역 */}
                <View style={styles.footer}>
                    <CustomButton 
                        buttonColor={"#023ㄷ73"}
                        title={"확인"}
                        onPress ={() => alert('확인버튼')}
                    />
                    <CustomButton 
                        buttonColor={"#444"}
                        title={"취소"}
                        onPress ={() => alert('취소버튼')}
                    />
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        backgroundColor : 'white'
    },
    header : {
        width : '100%',
        height : '5%'
    },
    title : {
        width : '100%',
        height : '18%',
        justifyContent : 'center'
    },
    content : {
        flex : 1,
        paddingLeft : 10,
        paddingRight : 10,
        paddingBottom : 30,
    },
    footer : {
        width : '100%',
        height : '20%'
    },
});