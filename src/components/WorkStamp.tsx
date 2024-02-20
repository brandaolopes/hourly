import { Text, HStack } from '@gluestack-ui/themed';
import { ThumbsUp, Unplug } from 'lucide-react-native';

interface WorkInTime {
    stamp: string;
    isIn: boolean;
}

export function WorkStamp({ stamp, isIn }: WorkInTime) {
    return(
    <HStack p="$5">
        {isIn ? (
            <><ThumbsUp color='#059669' size={20} />
            <Text color="$tertiary600" fontSize="$lg" ml="$2.5">Entrada - {stamp}</Text></>
        ) : (
            <><Unplug color='#dc2626' size={20} />
            <Text color="$red700" fontSize="$lg" ml="$2.5">Saída - {stamp}</Text></>
        )}
        
        
    </HStack>
    )
}