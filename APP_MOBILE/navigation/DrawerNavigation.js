import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CGU from '../containers/CGU';
import ReportNavigation from './ReportNavigation';
import { DrawerContentScrollView, DrawerItemList , DrawerItem} from '@react-navigation/drawer';
import { VStack, Image, Icon, Divider, Heading } from 'native-base';
import { Entypo, AntDesign, FontAwesome5  } from '@expo/vector-icons'; 
import SensibilisationStack from './SensibilisationStack';

const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <VStack shadow="4" p="2">
                <Image source={require('./../assets/img/logo.png')} size="xl" alignSelf="center" alt="image" />
                <Heading color="primary.400" fontWeight="bold" size="sm" alignSelf="center">Lu meeun nek la</Heading>
            </VStack>
            <Divider mb="3" thickness="2"  />
            <DrawerItemList {...props} />
            
        </DrawerContentScrollView>
    )
}



const DrawerNavigation = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="ReportStack" screenOptions={{headerTitle: "Xeex Guerr", drawerStyle: { backgroundColor: "white"}, headerRightContainerStyle: {marginEnd: 10} }}>
                <Drawer.Screen initialParams={{ onLine: false, org: {}}} name="ReportStack" component={ReportNavigation} options={({route}) => ({drawerIcon: () => <Icon as={FontAwesome5} name="user-edit" size="xs" /> ,headerTitle: route.params.org?.name ? route.params.org?.name + " - " + route.params.org?.secteur : "Xeex Guerr", title: "Reporting", headerRight: route.params.onLine ? () => (<Icon as={Entypo} name="controller-record" color="green.700" />) : () => (<Icon as={Entypo} name="back-in-time" color="red.700" />) }) }/>
                <Drawer.Screen name="Sensibilisation" component={SensibilisationStack} options={{drawerIcon: () => <Icon as={AntDesign} name="bars" size="xs" />, drawerLabel: "Sensibilisation"}} />
                <Drawer.Screen name="CGU" component={CGU} options={{drawerIcon: () => <Icon as={Entypo} name="info-with-circle" size="xs" /> ,drawerLabel: "Conditions d'utilisation"}} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation;




/*
, drawerItemStyle: { backgroundColor: 'white' }, drawerStyle: {backgroundColor: '#06b6d4'}, drawerActiveTintColor: '#06b6d4'

*/