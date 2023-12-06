import { Text, HStack} from '@gluestack-ui/themed';
import { ThumbsUp } from 'lucide-react-native';

interface WorkInTime {
    stamp: string;
}

export function WorkIn({ stamp }: WorkInTime) {
    return(
    <HStack p="$5">
        <ThumbsUp color='#059669' size={20}/>
        <Text color="$tertiary600" fontSize="$lg" ml="$2.5">Entrada - {stamp}</Text>
    </HStack>
    )
}