import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "@aula1:user";

export async function salvarUsuario(usuario) {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(usuario));
    return true;
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    throw error;
  }
}

export async function buscarUsuario() {
  try {
    const usuario = await AsyncStorage.getItem(USER_KEY);
    return usuario ? JSON.parse(usuario) : null;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
}

export async function removerUsuario() {
  try {
    await AsyncStorage.removeItem(USER_KEY);
    return true;
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
    throw error;
  }
}
