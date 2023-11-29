import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

import { useFonts, Nunito_800ExtraBold, Nunito_500Medium, Nunito_400Regular } from '@expo-google-fonts/nunito';
import { Loading } from './src/components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({Nunito_800ExtraBold, Nunito_500Medium, Nunito_400Regular})


  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <StatusBar style='light' />
        
        {
          !fontsLoaded ? <Loading /> : <Text fontFamily='Nunito_500Medium' fontSize={24}>Nenhuma fonte carregada</Text>
        }

      </GluestackUIProvider>
    </NavigationContainer>
  );
}