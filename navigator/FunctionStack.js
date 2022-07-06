import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import NewOrderScreen from '../screen/allfunctionScreen/NewOrderScreen'
import ProgressScreen from '../screen/allfunctionScreen/ProgressScreen'
import CompleteScreen from '../screen/allfunctionScreen/CompleteScreen'
import OtherScreen from '../screen/allfunctionScreen/OtherScreen'
const Tab = createBottomTabNavigator();


const FunctionStack = () => {
    return(
    <Tab.Navigator screenOptions={() => ({
        tabBarInactiveTintColor: 'grey',  //선택 안되어 있을때 색
        tabBarActiveTintColor: '#FF1493', //선택 되어 있을때 색
        tabBarStyle: {
            display: 'flex',
        },
        swipeEnabled: false,
    })}>
      <Tab.Screen name="접수" component={NewOrderScreen} options={({ route, navigation }) => ({
                    headerShown: false,
                    title: "접수",
                    tabBarLabel: '접수',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="motorcycle" size={24} color={color} />
                    },
                })} />
      <Tab.Screen name="진행" component={ProgressScreen} options={({ route, navigation }) => ({
                    headerShown: false,
                    title: "진행",
                    tabBarLabel: '진행',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="clock" size={24} color={color} />
                    },
                })} />
      <Tab.Screen name="완료" component={CompleteScreen} options={({ route, navigation }) => ({
                    headerShown: false,
                    title: "완료",
                    tabBarLabel: '완료',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="clipboard-check" size={24} color={color} />
                    },
                })} />
      <Tab.Screen name="더보기" component={OtherScreen} options={({ route, navigation }) => ({
                    headerShown: false,
                    title: "더보기",
                    tabBarLabel: '더보기',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="list" size={24} color={color} />
                    },
                })} />
    </Tab.Navigator>
    )
}

export default FunctionStack;
