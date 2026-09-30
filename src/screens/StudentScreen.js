import { StyleSheet, Text, View } from 'react-native';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { student } from '../data/student';
import { colors } from '../theme/colors';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Datos del estudiante</Text>
        <InfoRow label="Nombre" value={student.nombre} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección" value={student.seccion} />
        <InfoRow label="Grupo" value={student.grupo} />
      </View>
      <PrimaryButton title="Ver personajes" onPress={() => navigation.navigate('Characters')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20, justifyContent: 'center' },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    elevation: 3,
  },
  title: { fontSize: 22, fontWeight: 'bold', color: colors.primary, marginBottom: 8 },
});
