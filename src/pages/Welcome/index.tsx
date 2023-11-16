import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {styles} from './styles';

export default function Welcome({navigation}) {
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
                <TouchableOpacity onPress={() => navigation.navigate('Sigin')} style={styles.button2}>
                    <Text style={styles.buttonText2}>LOGIN</Text>
                </TouchableOpacity>

                <Text style={styles.criarConta}>
                    ou <Text onPress={() => console.log('Criar Conta pressionado')} style={{ color: '#F47521' }}>Criar Conta</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}