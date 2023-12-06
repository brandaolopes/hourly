import { useState, useEffect } from 'react';
import { Text, Box, HStack } from '@gluestack-ui/themed';
import { Clock3 } from 'lucide-react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


export function ClockBox() {

    const [currentTime, setCurrentTime] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    dayjs.locale('pt-br')

    useEffect(() => {
        // Atualiza a hora a cada segundo
        const intervalId = setInterval(() => {
          const now = dayjs().format('HH:mm:ss');
          const day = dayjs().format('dddd[, ]DD[ de ]MMMM');
          setCurrentTime(now);
          setCurrentDay(day);
        }, 1000);
    
        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
      }, []);

    return(
        <Box bg="$primary700" p="$5" borderRadius="$md" width="$5/6" alignItems='center' mb="$2.5">
            <Text color="$primary50" fontSize="$lg" textTransform='capitalize'>{currentDay}</Text>
            <HStack p="$1.5">
                <Clock3 color="#CCE9FF" size={35}/>
                <Text ml="$2.5" color="$primary50" fontSize="$3xl" textAlignVertical='bottom'>{currentTime}</Text>
            </HStack>
        </Box>
    )
}
