import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function Welcome() {
    return (
        <ImageBackground source={require('../../assets/fundo2.png')} style={styles.container} resizeMode='cover'>

            <View style={styles.containerForm}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 200, height: 80 }}
                        resizeMode='contain'
                    />
                </View>

                <Text style={styles.title}>Todos os seus animes favoritos. Agora num só lugar.</Text>

                <View style={styles.button1}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.textocoroa}>
                            <Image style={styles.coroa}
                                source={require('../../assets/coroa.png')}
                            />
                            <Text style={styles.buttonText1}>EXPERIMENTE O TESTE GRATUITO</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>LOGIN</Text>
                </TouchableOpacity>

                <Text style={styles.criarConta}>
                    ou <Text onPress={() => console.log('Criar Conta pressionado')} style={{ color: '#F47521' }}>Criar Conta</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },

    containerForm: {

        marginTop: 400,

    },

    containerLogo: {

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        height: 10,

    },
    button1: {

        display: 'flex',
        backgroundColor: '#f9b718',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,

    },

    buttonText1: {

        fontWeight:'bold',
        marginBottom: 4,
        display: 'flex',
        fontSize: 18,
        marginTop: 6,
        paddingLeft: 8,
        color: '#1f1f17',
        width: '100%',
        height: 20,
        textAlign: 'left',
    },

    coroa: {

        float: 'left',
        width: 20,
        height: 20,
        marginTop: 3,
        marginLeft: 90,

        // alignSelf: 'flex-start'

    },

    textocoroa: {

        flexDirection: 'row',
        alignItems: 'center',

    },


    button2: {

        
        borderColor: '#e67c42',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        alignItems: 'center',
        marginBottom: 10,
        display: 'flex',
    },

    buttonText2: {

        fontWeight:'bold',
        fontSize: 18,
        marginTop: 6,
        color: '#e67c42',
    },

    criarConta: {

        color: '#FFFFFF',
        fontFamily: 'sans-serif',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 20,

    },

    title: {

        marginTop: 20,
        color: '#FFFFFF',
        fontFamily: 'sans-serif',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,

    },



});