import { Button, Center, ScrollView, VStack, Box , Text, Heading,Spinner} from "native-base";
import React from "react";

const OffReports = ({navigation}) => {

    return (
        <ScrollView>
                <VStack p="4">
                    <Box shadow="4" borderRadius="10"
                        bg={{
                            linearGradient: {
                            colors: ['primary.500', 'secondary.500'],
                            start: [0, 0],
                            end: [1, 0],
                            },
                        }}
                        p="12"
                        rounded="xl"
                        _text={{
                            fontSize: 'md',
                            fontWeight: 'medium',
                            color: 'warmGray.50',
                            textAlign: 'center',
                        }}
                    >
                        <Center>
                            <Text color="white" fontSize="20" fontWeight="bold" textAlign="center">Merci d'avoir signalé ce cas</Text>
                        </Center>
                    </Box>

                    <Heading p="2" my="2" size="md" color="secondary.500">Mode hors connexion</Heading>

                    <Text p="2">
                        Les données seront envoyées si toutefois vous avez une connexion.
                    </Text>

                    <Spinner  />

                    <Button my="4" bg="primary.500" onPress={() => {navigation.navigate("GetOrg"); navigation.getParent().setParams({org: {}})}}>Accueil</Button>
                </VStack>
        </ScrollView>
    )
}

export default OffReports;