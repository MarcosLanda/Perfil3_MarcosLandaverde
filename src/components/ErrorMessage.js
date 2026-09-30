import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { colors } from '../theme/colors';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.center}>
      <Text style={styles.message}>No se pudo cargar: {message}</Text>
      {onRetry && <PrimaryButton title="Reintentar" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: colors.background },
  message: { marginBottom: 12, fontSize: 16, color: colors.error, textAlign: 'center' },
});
