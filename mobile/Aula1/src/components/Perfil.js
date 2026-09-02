import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
    StyleSheet,
    ScrollView
} from 'react-native';

export default function Perfil() {

    const mostrarInformacoes = () => {
        Alert.alert(
            'Informações do usuário',
            'Nome: Emanuel Silva\n' +
            'Email: emanuel@email.com\n' +
            'Telefone: (84) 99999-9999\n' +
            'Localização: Natal - RN\n' +
            'Membro desde: 2025'
        );
    };

    return (
        <ScrollView style={styles.container}>

            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Meu Perfil</Text>
            </View>

            {/* Perfil */}
            <View style={styles.profile}>

                <Image
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    style={styles.profileImage}
                />

                <Text style={styles.name}>Emanuel Silva</Text>

                <Text style={styles.username}>
                    @emanuel
                </Text>

                <Text style={styles.description}>
                    Desenvolvedor de Software 💻
                </Text>

                <Text style={styles.location}>
                    📍 Natal - RN
                </Text>

                {/* Botão Ver mais */}
                <TouchableOpacity
                    style={styles.moreButton}
                    onPress={mostrarInformacoes}
                >
                    <Text style={styles.moreButtonText}>
                        Ver mais
                    </Text>
                </TouchableOpacity>

            </View>

            {/* Estatísticas */}
            <View style={styles.stats}>

                <View style={styles.stat}>
                    <Text style={styles.statNumber}>120</Text>
                    <Text style={styles.statLabel}>Publicações</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.statNumber}>850</Text>
                    <Text style={styles.statLabel}>Seguidores</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.statNumber}>320</Text>
                    <Text style={styles.statLabel}>Seguindo</Text>
                </View>

            </View>

            {/* Pesquisa */}
            <View style={styles.searchContainer}>

                <TextInput
                    style={styles.search}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#888"
                />

            </View>

            {/* Menu */}
            <View style={styles.menu}>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuIcon}>👤</Text>
                    <Text style={styles.menuText}>
                        Editar perfil
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuIcon}>📸</Text>
                    <Text style={styles.menuText}>
                        Minhas fotos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuIcon}>❤️</Text>
                    <Text style={styles.menuText}>
                        Curtidas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuIcon}>⚙️</Text>
                    <Text style={styles.menuText}>
                        Configurações
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },

    header: {
        height: 60,
        backgroundColor: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    profile: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 20,
    },

    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
    },

    username: {
        fontSize: 15,
        color: '#777',
        marginTop: 3,
    },

    description: {
        fontSize: 16,
        color: '#444',
        marginTop: 10,
    },

    location: {
        fontSize: 15,
        color: '#666',
        marginTop: 5,
    },

    moreButton: {
        backgroundColor: '#3498DB',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 15,
    },

    moreButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    stats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        marginTop: 2,
        paddingVertical: 18,
    },

    stat: {
        alignItems: 'center',
    },

    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },

    statLabel: {
        fontSize: 13,
        color: '#777',
        marginTop: 3,
    },

    searchContainer: {
        padding: 15,
    },

    search: {
        height: 45,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#DDD',
    },

    menu: {
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        marginBottom: 30,
        borderRadius: 10,
        overflow: 'hidden',
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },

    menuIcon: {
        fontSize: 22,
        width: 40,
    },

    menuText: {
        fontSize: 16,
        color: '#333',
    },

});