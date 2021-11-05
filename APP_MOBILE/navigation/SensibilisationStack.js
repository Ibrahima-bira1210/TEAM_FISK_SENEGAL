import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Actualites from '../containers/Actualites';
import Contacts from '../containers/Contacts';
import HomeSensibilisation from '../containers/HomeSensibilisation';

const Stack = createNativeStackNavigator();

const SensibilisationStack = () => {

    return (
        <Stack.Navigator >
            <Stack.Screen name="Menu" component={HomeSensibilisation} options={{title: "Sensibilisation"}} />
            <Stack.Screen name="Actualites" component={Actualites} />
            <Stack.Screen name="Contacts" component={Contacts} />
        </Stack.Navigator>
    )
}


export default SensibilisationStack;