import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Clock } from '../screens/Clock';
import { Bonus } from '../screens/Bonus';
import { Config } from '../screens/Config';
import { History } from '../screens/History';

import { Clock3, CircleDollarSign, History as Back, Settings  } from 'lucide-react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return(

            <Navigator screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                tabBarActiveTintColor: '#7CC2FF',
                tabBarInactiveTintColor: '#737373',
                tabBarStyle: {
                    position: 'absolute',
                    height: 65,
                    backgroundColor: '#CCE9FF',
                    borderTopWidth: 1,
                    borderTopColor: '#737373'
                },
                tabBarItemStyle: {
                    position: 'relative',
                    top: Platform.OS === 'android' ? -8 : 0,
                }
            }}>
                <Screen 
                    name='clock'
                    component={Clock}
                    options={{
                        tabBarIcon: ({ color }) => <Clock3 color={color} />,
                        tabBarLabel: "Relógio",
                        tabBarLabelStyle: {
                            fontSize: 12
                        }
                    }}
                 />

                <Screen 
                    name='bonus'
                    component={Bonus}
                    options={{
                        tabBarIcon: ({ color }) => <CircleDollarSign color={color} />,
                        tabBarLabel: "Bônus",
                        tabBarLabelStyle: {
                            fontSize: 12
                        }
                    }}
                 />

                <Screen 
                    name='history'
                    component={History}
                    options={{
                        tabBarIcon: ({ color }) => <Back color={color} />,
                        tabBarLabel: "Histórico",
                        tabBarLabelStyle: {
                            fontSize: 12
                        }
                    }}
                 />
                <Screen 
                    name='config'
                    component={Config}
                    options={{
                        tabBarIcon: ({ color }) => <Settings color={color} />,
                        tabBarLabel: "Configurações",
                        tabBarLabelStyle: {
                            fontSize: 12
                        }
                    }}
                 />
            </Navigator>

    );
}