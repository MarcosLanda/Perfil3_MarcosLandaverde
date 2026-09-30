import { FlatList, StyleSheet } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import useCharacters from '../hooks/useCharacters';
import { colors } from '../theme/colors';

export default function CharactersScreen() {
  const { characters, loading, error, refetch } = useCharacters();

  if (loading && characters.length === 0) return <Loader message="Cargando personajes..." />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CharacterCard character={item} />}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: colors.background },
  content: { padding: 16 },
});
