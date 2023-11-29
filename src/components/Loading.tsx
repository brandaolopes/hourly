import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
    return(
        <Center flex={1} bgColor="$darkBlue800">
            <Spinner color="$blue100"/>
        </Center>
    );
}