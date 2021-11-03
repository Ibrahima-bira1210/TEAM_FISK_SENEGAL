import React, {useState, useEffect} from "react";
import {VStack, HStack,Heading, Button, Divider, Icon, Text, Center, Box, Spacer, ScrollView, useToast} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import axios from "axios";
import { api } from "../helpers/APIs";
import * as Network from 'expo-network';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { toggleMode } from "../redux/actions/modeActions";
import i18n from "../helpers/localization";

const GetOrganization = ({navigation}) => {


    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);
    const [listOrg, setListOrg] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {

        setLoading(true);
        (async () => {
            const { isConnected, isInternetReachable } = await Network.getNetworkStateAsync();
            if(isConnected == true & isInternetReachable == true){
                
                toast.show({title: "Envoi des données", placement: "bottom"});

                dispatch(toggleMode());
                navigation.getParent().setParams({onLine: true});
                console.log("Mode online started");
                axios.get(api+"org")
                .then(res => {
                    if(res.data.content){
                        setData(res.data.content.map(organization => ({id: organization.id, title: organization.name + " - " + organization.secteur})));
                        setListOrg(res.data.content);
                        (async () => {
                           await AsyncStorage.setItem("listOrg", JSON.stringify(res.data.content));
                        })();
                        setLoading(false);
                    }

                })
                .catch(err => {
                    console.log(err);
                })
            }else {
                console.log("Mode offline started");
                alert("Mode hors connexion activé !");
                (async () => {
                    try {
                        const data = await AsyncStorage.getItem("listOrg");
                        if(data){
                            const dataValue = JSON.parse(data);
                            setData(dataValue.map(organization => ({id: organization.id, title: organization.name + " - " + organization.secteur})));
                            setListOrg(dataValue);
                            setLoading(false);

                        }
                    } catch(e){
                        alert("Veuillez activé votre connexion pour charger les données pour la premiere fois");
                    }
                })();
            }
        })();


    }, [navigation])


    const onContinue = () => {
        if(selectedItem != null) {
            const orgData = listOrg.find(org => org.id == selectedItem.id);
            navigation.getParent().setParams({org: orgData});
            navigation.navigate("Report", {org: orgData});
        }else {
            alert("Veuillez choisir une administration");
        }
    }



    return (
        <ScrollView>
        <Box flex={1} p="4">
            
            <VStack py="4" >
                <Heading my="4" alignSelf="center" size="xl">{i18n.t("titleGetOrg")}</Heading>

                <Center p="2" bg="secondary.500" color="white" borderRadius="10" shadow="5">
                       {i18n.t("textGetOrg")}
                </Center>
                
                <Divider my="2" />

                <Heading size="xs" py="2">Administration</Heading>
                
                <AutocompleteDropdown
                    clearOnFocus={false}
                    closeOnBlur={true}
                    closeOnSubmit={false}
                    initialValue={{ id: '2' }} // or just '2'
                    onSelectItem={setSelectedItem}
                    dataSet={data}
                    
                    textInputProps={{
                        placeholder: "Recherche par nom ou adresse...",
                        autoCorrect: false,
                        autoCapitalize: "none",
                        style: {
                          borderRadius: 15,
                          backgroundColor: "#fff",
                          color: "#000",
                          marginTop: 10,
                          paddingLeft: 18
                        }
                    }}
                    rightButtonsContainerStyle={{
                        borderRadius: 15,
                        right: 8,
                        height: 30,
                        top: 15,
                        alignSelfs: "center",
                        backgroundColor: "#06b6d4",
                        color: "#fff"
                    }}
                />

                
                <Button bg="primary.500" p="2" mt="3" onPress={() => { navigation.navigate("Report") }} onPress={onContinue}>Continuer</Button>


                <Divider my="3" />

                <Button bg="primary.500" p="2" mt="3" onPress={() => {navigation.navigate('ScanCode')}}>Scanner un code</Button>
                <Icon as={AntDesign} name="qrcode" size="2xl" alignSelf="center" mt="2" />

            </VStack>

            <Spacer />

            <Center p="2" bg="success.100" borderRadius="2">
                <HStack>
                    <Icon as={AntDesign} name="Safety" mr="1" />
                    <Text color="success.800" fontWeight="bold">{i18n.t("infoText")}</Text>
                </HStack>
            </Center>

        </Box>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    autocompleteContainer: {

    }

});

export default GetOrganization;