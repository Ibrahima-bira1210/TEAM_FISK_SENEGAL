import { VStack, ScrollView, Box, Divider, Text, HStack, Icon, Heading, Link, Modal, Button, TextArea, Spacer } from 'native-base';
import React, {useState} from 'react';
import { AntDesign, Entypo  } from '@expo/vector-icons';

const ThankScreen = ({navigation, route}) => {

    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    return(
        <ScrollView>
            <VStack flex={1} p="4" flexDirection="column">
            

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
                <HStack>
                    <Heading color="white" justifyContent="center">Merci d'avoir souligné ce cas !</Heading>
                    <Icon as={AntDesign} name="like1" size="xl" color="white" />
                </HStack>
            </Box>

            <Divider my="2" />

            <Box bg="primary.500" borderRadius="10">
                <Heading p="2" color="white" textAlign="center">
                    Poursuite judiciaire
                </Heading>
            </Box>

            <HStack p="2">
                <Icon as={AntDesign} name="infocirlce" size="md" mt="2" color="success.600" />
                <Link href="https://www.ofnac.sn/Deposer%20une%20plainte.php" p="2" _text={{color: "success.600", fontWeight: "bold"}}>Vous avez la possibilité de porter-plainte contre ?</Link>
            </HStack>


            <Divider my="2" />
            
            <Box bg="primary.500" borderRadius="10" my="2">
                <Heading p="2" color="white" textAlign="center">
                    Laisser un message
                </Heading>
            </Box>

            <HStack borderRadius="10" p="2">
                <Icon as={Entypo} name="newsletter" size="xl" alignSelf="center" color="primary.500" />
                <Text p="2"> Vous pouvez laisser un message à l'administration concernée.</Text>
            </HStack>

            

            <Button bg="secondary.500" onPress={() => setShowModal(true)}>Envoyer un message</Button>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>{route.params.org.name}</Modal.Header>
                <Modal.Body>
                    <TextArea
                    placeholder="Votre message ..."
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                    <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                        setShowModal(false)
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onPress={() => {
                        setShowModal(false)
                        }}
                    >
                        Envoyer
                    </Button>
                    </Button.Group>
                </Modal.Footer>
                </Modal.Content>
            </Modal>

            <Spacer />

            <Link onPress={() => {navigation.getParent().setParams({org: {}});navigation.navigate('GetOrg')}} my="4" alignSelf="center"> Nouveau signalement</Link>
            
        </VStack>
        </ScrollView>
    )
}

export default ThankScreen;