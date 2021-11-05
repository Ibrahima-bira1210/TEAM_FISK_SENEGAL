import { Center, Heading, ScrollView, Box, VStack, HStack, Icon, Text } from "native-base";
import React from "react";
import { AntDesign, Entypo  } from '@expo/vector-icons';

const CGU = () => {

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
                            <Text color="white" fontSize="20" fontWeight="bold" textAlign="center">Conditions générales d'utilsation</Text>
                        </Center>
                    </Box>

                    <Heading my="2" size="md">Informations</Heading>

                    <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus vero itaque, odio aliquid quae iusto tempora ex accusamus, iure nisi saepe quos? Quisquam facere sapiente adipisci, possimus nemo optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus vero itaque, odio aliquid quae iusto tempora ex accusamus, iure nisi saepe quos? Quisquam facere sapiente adipisci, possimus nemo optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus vero itaque, odio aliquid quae iusto tempora ex accusamus, iure nisi saepe quos? Quisquam facere sapiente adipisci, possimus nemo optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus vero itaque, odio aliquid quae iusto tempora ex accusamus, iure nisi saepe quos? Quisquam facere sapiente adipisci, possimus nemo optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus vero itaque, odio aliquid quae iusto tempora ex accusamus, iure nisi saepe quos? Quisquam facere sapiente adipisci, possimus nemo optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus vero itaque, odio aliquid quae iusto tempora ex accusamus, iure nisi saepe quos? Quisquam facere sapiente adipisci, possimus nemo optio?
                    </Text>
                </VStack>
        </ScrollView>
    )
}

export default CGU;