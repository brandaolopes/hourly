import { useState } from 'react';
import { Text, 
    Center, 
    Box, 
    HStack, 
    Input, 
    Button, 
    InputField, 
    ButtonText,  } from '@gluestack-ui/themed';
import CurrencyInput from 'react-native-currency-input';


export function Config() {

    const [hourValue, setHourValue] = useState(0)
    const [hourValueFromDB, setHourValueFromDB] = useState(20)

    const saveHour = () => {
        console.log(`value saved= ${hourValue}`)
        
    }

    return(
        <Center flex={1}>
            <Text fontFamily='$heading' 
                color='$coolGray500' 
                textAlign='justify' 
                lineHeight='$2xl' 
                fontSize="$2xl">
                Configurações
            </Text>

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
                    Digite o valor da sua hora trabalhada.   
                </Text>    
            </Box>

            {hourValueFromDB > 0 ? 
                (<Text fontFamily='$body' color='$coolGray500' mb='$2.5' textAlign='justify' fontSize="$lg">Valor atual: ${hourValueFromDB}</Text>) 
                : ''
            }
            

            <HStack>
                <CurrencyInput 
                        value={hourValue}
                        onChangeValue={setHourValue}
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
                    onPress={saveHour} 
                    
                    >
                    <ButtonText>Salvar</ButtonText>
                </Button>
            </HStack>

        </Center>
    )
}