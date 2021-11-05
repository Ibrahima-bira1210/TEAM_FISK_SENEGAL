import { Box, Center, Heading, VStack, CheckIcon, Select,Link, TextArea, Spinner, Text, Button, Divider, HStack, Icon } from 'native-base';
import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { api } from '../helpers/APIs';;
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import i18n from '../helpers/localization';

const Report = ({navigation, route}) => {

    const [ typeCorruption, setTypeCorruption ] = useState("");
    const [moreInformation, setMoreInformation] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLineMode = useSelector(state => state.mode.onLineMode);



    const onSubmit = () => {
        if(moreInformation && typeCorruption){

            const reportData = {
                moreinfo: moreInformation,
                corruptionType: typeCorruption
            }

            //setLoading(true);

            if(onLineMode){
                axios({
                    method: "post",
                    url: api+"reports/fileless/"+route.params.org.id,
                    data: reportData,
                })
                .then(res => {
                    
                    if(res.status == 200){
                        setLoading(false);
                        navigation.navigate("ThankScreen", {org: route.params.org});
                    }
                })
                .catch(err => {
                    alert(err);
                })    
            }else {

                navigation.navigate("OffReports", {org: route.params.org});
            }

            setIsValid(false);
        }else {
            setIsValid(true);
            alert("Veuillez choisir un type de corruption");
        }
        
    }

    return (
        <ScrollView>
            <Center flex={1} space="4" p="5">
                <VStack>

                    <Heading my="4" size="xl" textAlign="center">Merci de nous aider.</Heading> 
                    <Center p="2" bg="primary.500" color="white" borderRadius="10" shadow="5">
                    Vous avez été témoin de cas de corruption?  Merci de les signaler en toute confidence.
                    </Center>
                    
                    <Divider my="2" />

                    <Heading size="xs" py="2">Type de corruption</Heading>
                    <Select
                        defaultValue={"autre"}
                        selectedValue={typeCorruption}
                        accessibilityLabel="Type de corruption"
                        placeholder="Type de corruption"
                        my="2"
                        _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setTypeCorruption(itemValue)}
                        p="2"
                    >
                        <Select.Item p="2" label="Finance" value="finance" />
                        <Select.Item p="2" label="Chantage" value="chantage" />
                        <Select.Item p="2" label="Politique" value="politique" />
                        <Select.Item p="2" label="Economique" value="economique" />
                        <Select.Item p="2" label="Autre" value="finance" />
                    </Select>


                    <Divider my="2" />

                    <Heading size="xs" py="2">Plus d'informations</Heading>
                    <TextArea
                        my="2"
                        h={20}
                        value={moreInformation}
                        onChangeText={setMoreInformation}
                        placeholder="Description"
                        isInvalid={isValid}
                    />

                    {onLineMode ? 
                        <Button my="2" bg="primary.500" onPress={onSubmit}>
                            {loading && (<Spinner accessibilityLabel="Loading" />)} Envoyer
                        </Button>
                    : 
                        <Button my="2" bg="secondary.500" onPress={onSubmit}>
                            {loading && (<Spinner accessibilityLabel="Loading" />)} Envoyer plutard
                        </Button>
                    }
                

                    <Link onPress={() => {navigation.getParent().setParams({org: {}});navigation.goBack()}} my="2" alignSelf="center" _text={{
                        color: "secondary.500"
                    }}>Annuler</Link>


                    <Center p="2" bg="success.100" borderRadius="2">
                        <HStack>
                            <Icon as={AntDesign} name="Safety" mr="1" />
                            <Text color="success.800" fontWeight="bold">{i18n.t("infoText")}</Text>
                        </HStack>
                    </Center>

                </VStack>
            </Center>
        </ScrollView>
    )
}

export default Report;