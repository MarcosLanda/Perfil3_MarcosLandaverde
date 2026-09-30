import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D1D5DB',
  },
  label: { fontSize: 13, color: colors.muted, textTransform: 'uppercase' },
  value: { fontSize: 18, color: colors.text, fontWeight: '600', marginTop: 2 },
});
