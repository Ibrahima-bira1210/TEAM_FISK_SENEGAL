import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../containers/Welcome';
import Intro from '../containers/Intro';
import GetOrganization from '../containers/GetOrganization';
import ScanCode from '../containers/ScanCode';
import Report from '../containers/Report';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center, Heading, Spinner } from 'native-base';
import ThankScreen from '../containers/ThankScreen';
import OffReports from '../containers/OffReports';

const Stack = createNativeStackNavigator();


const ReportNavigation = () => {

    const [ getStartedApp, setGetStartedApp ] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        (async () => {
            const value = await AsyncStorage.getItem("getStartedApp");
            setGetStartedApp(value == 'true' ? true : false);
            setLoading(false);
        })();

    }, [])

    if(loading){
        return (
            <Center flex={1}>
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </Center>
        )
    }

    return (

        <Stack.Navigator>


            {!getStartedApp && (

                <Stack.Group screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Intro" component={Intro} />
                </Stack.Group>

            )}
            
            <Stack.Group>
                <Stack.Screen name="GetOrg" component={GetOrganization} options={{headerShown: false}} />
                <Stack.Screen name="ScanCode" component={ScanCode} />
                <Stack.Screen name="Report" component={Report} options={{headerShown: false}} />
                <Stack.Screen name="ThankScreen" component={ThankScreen} options={{headerShown: false}} />
                <Stack.Screen name="OffReports" component={OffReports} options={{headerShown: false}} />
            </Stack.Group>

            
            
        </Stack.Navigator>

    )
}

export default ReportNavigation; 