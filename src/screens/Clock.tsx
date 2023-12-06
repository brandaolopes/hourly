import { useState, useRef } from 'react';
import { Text, 
        Center, 
        HStack, 
        Divider, 
        Button, 
        ButtonText, 
        VStack, 
        Modal, 
        ModalBackdrop, 
        ModalContent, 
        ModalHeader, 
        Heading, 
        ModalCloseButton, 
        Icon, 
        ModalBody, 
        ModalFooter, 
        CloseIcon } from '@gluestack-ui/themed';
import { ClockBox } from '../components/ClockBox';
import { WorkIn } from '../components/WorkIn';
import { WorkOut } from '../components/WorkOut';	
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';



export function Clock() {

    const [showInModal, setShowInModal] = useState(false)
    const [showOutModal, setShowOutModal] = useState(false)
    const ref = useRef(null)

    const now = dayjs().format('HH:mm:ss');

    const confirmIn = () => {
        console.log("confirmado IN")
        setShowInModal(false)
    }

    const confirmOut = () => {
        console.log("confirmado Out")
        setShowOutModal(false)
    }

    return(
        <Center flex={1}>
            
            <VStack flex={2} alignItems='center' justifyContent='flex-end'>
                <Text size='4xl' position='absolute' top="$16">Hourly</Text>
                <ClockBox />
            </VStack>

            <Divider w="95%" />

            <VStack flex={2}>
                <WorkIn stamp="20:35" />
                
                <WorkOut stamp="22:05" />

                <WorkIn stamp='22:06' />

                <WorkOut stamp="23:35" />
            </VStack>

            <Divider w="95%" />

            <VStack flex={0.9} justifyContent='flex-start'>
                <HStack p="$5" justifyContent='space-between' w="95%">
                    <Button
                        size="md"
                        variant="solid"
                        action="positive"
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={() => setShowInModal(true)} 
                        
                        >
                        <ButtonText>Entrada / Retorno</ButtonText>
                    </Button>
                    <Divider orientation='vertical' />
                    <Button
                        size="md"
                        variant="solid"
                        action="negative"
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={() => setShowOutModal(true)} 
                        
                        >
                        <ButtonText>Pausa / Saída</ButtonText>
                    </Button>
                </HStack>
            </VStack>

        <Modal
            isOpen={showInModal}
            onClose={() => {
            setShowInModal(false)
            }}
            finalFocusRef={ref}
        >
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="lg" color='$tertiary500'>Entrada</Heading>
                    <ModalCloseButton>
                    <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Text>
                        Confirma a entrada às {now}?
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="outline"
                        size="sm"
                        action="secondary"
                        mr="$3"
                        onPress={() => {
                            setShowInModal(false)
                            }}
                    >
                    <ButtonText>Cancelar</ButtonText>
                    </Button>
                    <Button
                        size="sm"
                        action="positive"
                        borderWidth="$0"
                        onPress={confirmIn}
                    >
                    <ButtonText>Confirmar</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

        <Modal
            isOpen={showOutModal}
            onClose={() => {
            setShowOutModal(false)
            }}
            finalFocusRef={ref}
        >
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="lg" color='$red600'>Saída</Heading>
                    <ModalCloseButton>
                    <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Text>
                        Confirma a saída às {now}?
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                    variant="outline"
                    size="sm"
                    action="secondary"
                    mr="$3"
                    onPress={() => {
                        setShowOutModal(false)
                    }}
                    >
                    <ButtonText>Cancelar</ButtonText>
                    </Button>
                    <Button
                    size="sm"
                    action="negative"
                    borderWidth="$0"
                    onPress={confirmOut}
                    >
                    <ButtonText>Confirmar</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

        </Center>
    )
}