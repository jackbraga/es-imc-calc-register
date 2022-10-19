import React from "react"
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Subheader from "./Subheader.component";


export default function Cadastro(props: any) {
    const { navigation } = props;
  
    return <View style={styles.container}>
      
      {/* <Text>Cadastro ...</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Text>Go login...</Text>
      </TouchableOpacity> */}
<Subheader titulo={"Bem vindo!"} subtitulo={"a tela de Cadastro!"} />

      <View style={styles.fields}>
            <View style={styles.filler}></View>
            <TextInput
                style={styles.input}
                placeholder='Nome'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={false} />
            <TextInput
                style={styles.input}
                placeholder='Sobrenome'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={false} />
            <TextInput
                style={styles.input}
                placeholder='Data de Nascimento'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={false} />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={true} />
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => alert('Cadastro efetuado com sucesso!')}
            >
                <Text style={styles.btnLoginText}>
                    Criar Conta
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => navigation.navigate("Login")}
                // <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            >
                <Text style={styles.btnLoginText}>
                    Cancelar
                </Text>
            </TouchableOpacity>
            <View style={styles.filler}></View>
        </View>


    </View>
  }

  const styles = StyleSheet.create({
    container: {
        paddingLeft: "5%",
        paddingRight: "5%",
        display: 'flex',
        flex: 10,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    fields: {
        display: 'flex',
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderBottonColor: '#aaa',
        width: Dimensions.get('screen').width * 0.9,
        flex: 1.5
    },
    filler: {
        flex: 1,
    },
    forgetPasswordLink: {
        flex: 1,
        marginTop: 5,
    },
    createAccountLink: {
        flex: 1,
        marginTop: 5,
    },
    accountActionText: {
        color: "#00A6FF"
    },
    actions: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    btnLogin: {
        backgroundColor: "#FF00FF",
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.08,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        margin:2
    },
    btnLoginText: {
        color: "#fff",
        fontSize: 16
    }
});

  