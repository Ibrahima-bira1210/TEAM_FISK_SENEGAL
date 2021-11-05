import { Divider, Heading, ScrollView, Center, HStack, Icon, Text, Input, TextArea, Button } from "native-base";
import React from "react";
import { AntDesign } from '@expo/vector-icons'; 

const Contacts = () => {

    return (
        <ScrollView flex={1} p="4">
            <Center p="2" bg="secondary.500" color="white" borderRadius="10" shadow="5" mt="2" mb="4">
                <HStack p="2">
                    <Icon as={AntDesign} name="infocirlce" size="md" mx="1" px="1" color="white" /> 
                    <Text color="white" p="2">
                        Si vous avez des suggestions ou questions concernant l'administration et la gestion des données, vous pouvez laisser un message.
                    </Text>
                </HStack>
            </Center>

            <Heading my="1">Contact</Heading>

            <Divider my="2" />

            <Heading size="sm" p="2">Nom</Heading>
            <Input variant="underlined" placeholder="Entrer votre nom ..." mb="2" />

            <Heading size="sm" p="2">Email</Heading>
            <Input variant="underlined" placeholder="Entrer votre email ..." mb="2" />

            <Heading size="sm" p="2">Sujet</Heading>
            <Input variant="underlined" placeholder="Veuillez preciser un sujet ..." mb="2" />

            <Heading size="sm" p="2">Message</Heading>
            <TextArea
            h={20}
            placeholder="Votre message"
            
            />

            <Button bg="primary.500" my="2">
                Envoyer
            </Button>

        </ScrollView>
    )
}

export default Contacts;