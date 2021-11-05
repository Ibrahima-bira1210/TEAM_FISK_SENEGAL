import { Center, Text, HStack, Stack, AspectRatio, ScrollView, Box, Image, Heading, Link, Input, Icon } from 'native-base';
import React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";

const Actualites = () => {

    return (
        <ScrollView flex={1} p="4">
            <Input
                py="2"
                size="xl"
                InputLeftElement={
                <Icon
                    as={<FontAwesome5 name="search" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                />
                }
                placeholder="Recherche..."
            />

            <Box
                my="2"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: "gray.50",
                }}
                >
                <Box>
                    <AspectRatio ratio={16 / 9}>
                    <Image
                        source={require("./../assets/img/code.jpeg")}
                        alt="image"
                    />
                    </AspectRatio>
                    <Center
                    bg="secondary.500"
                    _dark={{
                        bg: "seconfary.400",
                    }}
                    _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs",
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                    >
                    OFNAC
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                    <Heading size="md" ml="-1">
                        Rapports annuels
                    </Heading>
                    <Text
                        fontSize="xs"
                        _light={{
                        color: "violet.500",
                        }}
                        _dark={{
                        color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                    >
                        <Link href="https://www.ofnac.sn/">
                            Mesures prises après bilan
                        </Link>
                    </Text>
                </Stack>
                <Text fontWeight="400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            fontWeight="400"
                            >
                            6 mins ago
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>


            <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: "gray.50",
                }}
                >
                <Box>
                    <AspectRatio ratio={16 / 9}>
                    <Image
                        source={require("./../assets/img/code.jpeg")}
                        alt="image"
                    />
                    </AspectRatio>
                    <Center
                    bg="secondary.500"
                    _dark={{
                        bg: "seconfary.400",
                    }}
                    _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs",
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                    >
                    OFNAC
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                    <Heading size="md" ml="-1">
                        Du nouveau sur l'organization de l'OFNAC
                    </Heading>
                    <Text
                        fontSize="xs"
                        _light={{
                        color: "violet.500",
                        }}
                        _dark={{
                        color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                    >
                        <Link href="https://www.ofnac.sn/">
                            Réorganisation
                        </Link>
                    </Text>
                </Stack>
                <Text fontWeight="400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            fontWeight="400"
                            >
                            6 mins ago
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>

        </ScrollView>
    )
}

export default Actualites;