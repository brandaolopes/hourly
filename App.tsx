import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

import { useFonts, Nunito_800ExtraBold, Nunito_500Medium, Nunito_400Regular } from '@expo-google-fonts/nunito';
import { Loading } from './src/components/Loading';
import { AppRoutes } from './src/routes/app.routes';


export default function App() {

  const [fontsLoaded] = useFonts({Nunito_800ExtraBold, Nunito_500Medium, Nunito_400Regular})
  

  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <StatusBar style='auto' translucent/>
        
        {
          fontsLoaded ? <AppRoutes /> : <Loading />
        }

      </GluestackUIProvider>
    </NavigationContainer>
  );
}