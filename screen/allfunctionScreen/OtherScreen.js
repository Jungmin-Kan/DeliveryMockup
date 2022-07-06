import React,{useState} from 'react';
import { StyleSheet, View, CheckBox, SafeAreaView } from 'react-native';

const OtherScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <Text>OtherScreen</Text>
            {/* <ListItem title="메시지 수신시 소리 알림"
             secondaryText="메시지 수신 소리를 on/off 합니다"
             trailing={props => <View style={{ flexDirection: "column", width:60}}>
             <Switch value={loading} onValueChange={setLoading} />
             </View> }/>

             <ListItem title="진동알림"
             trailing={props => <View style={{ flexDirection: "column",width:60 }}>
             <Switch value={loading} onValueChange={setLoading} />
             </View> }/>

             <ListItem title="화면 꺼짐 방지"
             trailing={props => <View style={{ flexDirection: "column",width:60 }}>
             <Switch value={loading} onValueChange={setLoading} />
             </View> }/>

             <ListItem title="카드결제완료시 자동완료처리"
             trailing={props => <View style={{ flexDirection: "column",width:60 }}>
             <Switch value={loading} onValueChange={setLoading} />
             </View> }/>
            
             <ListItem title="현재 위치 기반 주문"
             secondaryText="기본 : 지정위치기반 주문"
             trailing={props => <View style={{ flexDirection: "column",width:60 }}>
             <Switch value={loading} onValueChange={setLoading} />
             </View> }/>

             <ListItem title="서비스 이용약관" style={{backgroundColor:'red'}}/>

             <ListItem title="개인정보 취급방침" />

             <ListItem title="위치기반 서비스 이용약관" />
            */}
        </SafeAreaView>
    )
}

export default OtherScreen;
/**
 * 과거의 배달과 전단지는 이러지 않았다
 * 과거여 돌아오라~~
 * 중계수수료 무료!
 * 배달비 무료!
 * 
 */