import React, {useState, useEffect} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Center, Text } from 'native-base';
import { StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { api } from '../helpers/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';


const ScanCode = ({navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const onLineMode = useSelector(state => state.mode.onLineMode);

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

        if(onLineMode){


            axios.get(api+"org/"+data)
            .then(res => {
                if(res.data){
                    navigation.getParent().setParams({org: res.data});
                    navigation.navigate('Report', {org: res.data, fromCodeQR: true});
                }
            })
            .catch(err => {
                console.log(err);
                alert("CodeQR non reconnu !");
            })  


        }else {


            (async () => {
                const dataApp = await AsyncStorage.getItem("listOrg");
                const listOrg = JSON.parse(dataApp);
                if(listOrg){
                    
                    const orgSingle = listOrg.find(org => org.id == data);

                    if(orgIndex){
                        navigation.getParent().setParams({org: orgSingle});
                        navigation.navigate('Report', {org: orgSingle, fromCodeQR: true});
                    }else{
                        alert("CodeQR non reconnu ! Veuillez réessayer plutard !");
                    }
                }else {
                    alert("CodeQR non reconnu ! Veuillez réessayer plutard !");
                }
            })();

        }

  
        
    };

    if (hasPermission === null) {
        return <Center flex={1} space="4"><Text>Requesting for camera permission</Text></Center>;
    }
    if (hasPermission === false) {
        return <Center flex={1} space="4"><Text>No access to camera</Text></Center>;
    }

    return (
        <Center flex={1}>

        <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                style={StyleSheet.absoluteFillObject}
            
        />


        {scanned && <Button color="white" title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

        </Center>
    )
}


export default ScanCode;
