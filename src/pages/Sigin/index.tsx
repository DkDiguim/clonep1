import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { styles } from './styles';

export default function Sigin({ navigation }) {
    return (


        <View style={styles.background}>
            <View style={styles.containerForm}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 200, height: 80 }}
                        resizeMode='contain'
                    />

                </View>
                <TextInput
                    style={styles.input}

                    onChangeText={() => { }}
                    placeholder="   E-mail ou Nome de Usuário"
                    placeholderTextColor='#d4d5d7'
                    keyboardType="default"
                    textAlignVertical='top'
                />

                <TextInput
                    style={styles.password}
                    onChangeText={() => { }}
                    secureTextEntry={true}
                    placeholder="   Senha"
                    placeholderTextColor='#d4d5d7'
                    keyboardType="numeric"
                    textAlignVertical='center'
                />

                <Text style={styles.EULA}>Ao entrar com sua conta, você declara possuir mais de 16 anos de
                    idade e estar de acordo com nossos  <Text onPress={() => console.log('Criar Conta pressionado')} style={styles.link}>Termos e Condições</Text> e nossa
                    <Text onPress={() => console.log('Criar Conta pressionado')} style={styles.link}> Política de Privacidade.</Text></Text>

                <TouchableOpacity onPress={() => navigation.navigate('Sigin')} style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>

                <Text style={styles.help}><Text onPress={() => console.log('Criar Conta pressionado')} style={styles.link}>Esqueceu a Senha?  </Text>
                    |
                    <Text onPress={() => console.log('Criar Conta pressionado')} style={styles.link}>  Criar Conta   </Text></Text>
            </View>
        </View>
       
    );
}