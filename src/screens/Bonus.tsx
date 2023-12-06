import { useRef, useState } from 'react';
import { Text, Center, 
    Divider, 
    Box, 
    Input, 
    Button, 
    InputField, 
    ButtonText, 
    HStack,
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
import CurrencyInput from 'react-native-currency-input';


export function Bonus() {

    const [bonus, setBonus] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const ref = useRef(null)

    const saveBonus = () => {
        console.log(`bonus salvo= ${bonus}`)
        setShowModal(false)
    }

    return(
        <Center flex={1}>
            <ClockBox />
            
            <Divider w="95%" />

            <Box w="90%" 
                h="$32" 
                bgColor='$lightBlue100'
                borderColor='$lightBlue300'
                borderWidth="$1"
                alignItems='center'
                justifyContent='center'
                rounded="$lg"
                mt="$3"
                mb="$3"
                p="$4"
            >
                <Text fontFamily='$body' color='$coolGray500' textAlign='justify' fontSize="$lg">
                    Digite seu bônus / gorjeta do dia. 
                    Este valor será somado às suas horas trabalhadas.    
                </Text>    
            </Box>


            <HStack>
                <CurrencyInput 
                    value={bonus}
                    onChangeValue={setBonus}
                    prefix="$"
                    delimiter="."
                    separator=","
                    precision={2}
                    renderTextInput={textInputProps => <Input w="45%" borderColor='$lightBlue300'>
                            <InputField {...textInputProps}
                            type='text'
                            textAlign='center' 
                            placeholder='Digite o valor...' 
                            keyboardType='decimal-pad'
                            py="$1"
                            autoComplete='off'
                            autoCorrect={false}
                            color='$coolGray500'
                            maxLength={15} 
                            />
                        </Input>}
                />

                <Button
                    size="md"
                    variant="solid"
                    action="positive"
                    ml="$3"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => setShowModal(true)} 
                    
                    >
                    <ButtonText>Salvar</ButtonText>
                </Button>
            </HStack>

        <Modal
            isOpen={showModal}
            onClose={() => {
            setShowModal(false)
            }}
            finalFocusRef={ref}
        >
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="lg" color='$tertiary500'>Bônus</Heading>
                    <ModalCloseButton>
                    <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Text>
                        Salvar o bônus de ${bonus}?
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="outline"
                        size="sm"
                        action="secondary"
                        mr="$3"
                        onPress={() => {
                            setShowModal(false)
                            }}
                    >
                    <ButtonText>Cancelar</ButtonText>
                    </Button>
                    <Button
                        size="sm"
                        action="positive"
                        borderWidth="$0"
                        onPress={saveBonus}
                    >
                    <ButtonText>Confirmar</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
            
            
            

        </Center>
    )
}