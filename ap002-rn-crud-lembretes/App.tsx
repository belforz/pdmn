import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";

interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState<string>("");
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  const adicionar = (lembrete: string) => {
    setLembretes((lembretes) => [
      ...lembretes,
      { id: new Date().toISOString(), texto: lembrete },
    ]);
  };
  return (
    <View style={styles.container}>
      <>
      {lembretes.map((lb) => {
        return (
          <View style={styles.lembreteItem} key={lb.id}>
            <Text style={styles.buttonText}>{lb.texto}</Text>
          </View>
        );
      })}
      </>

      <TextInput
        value={lembrete.toUpperCase()}
        onChangeText={setLembrete}
        style={styles.input}
        placeholder="Digite um lembrete"
      />
      <Pressable style={styles.button} onPress={() => adicionar(lembrete)}>
        <Text style={styles.buttonText}> Salvar lembrete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    textAlign: "center",
    borderRadius: 4,
  },
  button: {
    width: "80%",
    backgroundColor: "#0096F3",
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
  lembreteItem: {
    width: "80%",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f0d4d4ff",
  },
});
