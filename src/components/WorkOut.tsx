import { Text, HStack} from '@gluestack-ui/themed';
import { Unplug } from 'lucide-react-native';

interface WorkOutTime {
    stamp: string;
}

export function WorkOut({ stamp }: WorkOutTime) {
    return(
    <HStack p="$5">
        <Unplug color='#dc2626' size={20}/>
        <Text color="$red700" fontSize="$lg" ml="$2.5">Saída - {stamp}</Text>
    </HStack>
    )
}