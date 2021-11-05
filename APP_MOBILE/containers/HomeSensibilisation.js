import { Center, HStack, VStack , Text, ScrollView, Heading, Icon} from "native-base";
import React from "react";
import { Entypo, AntDesign, Octicons, FontAwesome5  } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

const HomeSensibilisation = ({navigation}) => {

    return (
        <ScrollView flex={1} space="2.5">

            <VStack flex={1} p="4">
                
                
                <Center p="2" bg="secondary.500" color="white" borderRadius="10" shadow="5" mt="2" mb="4">
                    <HStack p="2">
                        <Icon as={AntDesign} name="infocirlce" size="md" mr="1" color="white" /> 
                        <Text color="white">
                            Tout ce que vous devez savoir sur la corruption. 
                        </Text>
                    </HStack>
                </Center>

                <HStack space="2" mb="4">
                    <Center bg="primary.500" flex={1} borderRadius="10" shadow="5">
                        <TouchableOpacity onPress={() => navigation.push("Actualites")}>
                            <VStack p="4" alignItems="center">
                                <Icon as={Entypo} name="news" color="white" size="2xl" />
                                <Heading py="2" color="white" fontWeight="bold" size="md">Actualités</Heading>
                            </VStack>
                        </TouchableOpacity>
                    </Center>
                    <Center bg="primary.500" flex={1} borderRadius="10" shadow="5">
                        <TouchableOpacity>
                            <VStack p="4" alignItems="center">
                                <Icon as={Octicons} name="law" color="white" size="2xl" />
                                <Heading py="2" color="white" fontWeight="bold" size="md">Lois</Heading>
                            </VStack>
                        </TouchableOpacity>
                    </Center>
                </HStack>

                {/* - */}

                <HStack space="2" mb="4">
                    <Center bg="primary.500" flex={1} borderRadius="10" shadow="5">
                        <TouchableOpacity>
                            <VStack p="4" alignItems="center">
                                <Icon as={FontAwesome5} name="running" color="white" size="2xl" />
                                <Heading py="2" color="white" fontWeight="bold" size="md">Procédures</Heading>
                            </VStack>
                        </TouchableOpacity>
                    </Center>

                    <Center bg="primary.500" flex={1} borderRadius="10" shadow="5">
                        <TouchableOpacity onPress={() => { navigation.push("Contacts") }}>
                            <VStack p="4" alignItems="center">
                                <Icon as={Entypo} name="news" color="white" size="2xl" />
                                <Heading py="2" color="white" fontWeight="bold" size="md">Contact</Heading>
                            </VStack>
                        </TouchableOpacity>
                    </Center>
                </HStack>


            </VStack>

        </ScrollView>
    )
}

export default HomeSensibilisation;