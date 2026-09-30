import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

const STATUS_COLORS = { Alive: '#16A34A', Dead: '#DC2626', unknown: '#9CA3AF' };

export default function CharacterCard({ character }) {
  const { name, image, status, species, origin } = character;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.dot, { backgroundColor: STATUS_COLORS[status] }]} />
          <Text style={styles.detail}>{status} - {species}</Text>
        </View>
        <Text style={styles.detail} numberOfLines={1}>Origen: {origin.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    elevation: 2,
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  name: { fontSize: 17, fontWeight: 'bold', color: colors.text },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  detail: { fontSize: 14, color: colors.muted },
});
