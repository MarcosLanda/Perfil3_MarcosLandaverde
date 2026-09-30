import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import CharactersScreen from '../screens/CharactersScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Información del estudiante' }} />
        <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personajes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
