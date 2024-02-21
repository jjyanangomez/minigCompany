import react,  {useContext, useState,useEffect} from "react";
import { Text, View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from '../styles/stylesRegister';
const Register = () => {
    const navigation = useNavigation();

  const [Telefono, setTelefono] = useState(null);
  const [Nombres, setNombres] = useState(null);
  const [Apellidos, setApellidos] = useState(null);
  const [Email, setEmail] = useState(null);
  const [passwordConfir, setpasswordConfir] = useState(null);
  const [password, setpassword] = useState(null);
  return(
    <View style={styles.container}>
        <Text style={styles.textoBien} >Registrarse</Text>
        <TextInput style={styles.txtInput} 
                value={Nombres}
                placeholder="Ingresar Nombres"
                onChangeText={text => setNombres(text)}
                />
        <TextInput style={styles.txtInput} 
                value={Apellidos}
                placeholder="Ingresar Apellidos"
                onChangeText={text => setApellidos(text)}
                /> 
        <TextInput style={styles.txtInput} 
                value={Telefono}
                placeholder="Ingrese su número telefónico"
                keyboardType='number-pad'
                onChangeText={text => setTelefono(text)}
                />
        <TextInput style={styles.txtInput} 
                value={Email}
                placeholder="Ingrese su correo electrónico"
                onChangeText={text => setEmail(text)}
                />
        <TextInput secureTextEntry={true} style={styles.txtInput} 
                value={password}
                placeholder="Ingrese su contraseña"
                onChangeText={text => setpassword(text)}
                />
        <TextInput secureTextEntry={true} style={styles.txtInput} 
                value={passwordConfir}
                placeholder="Ingrese su contraseña nuevamente"
                onChangeText={text => setpasswordConfir(text)}
                />        
        <TouchableOpacity
            style={styles.colorBtn}>
            <Text style={styles.colorTxtBtn}>Registrar Cuenta</Text>
        </TouchableOpacity>
        <Text style={styles.colorTxtBtnOlvidar}>o</Text>
        <View style={styles.IconText}>
            <Text style={{right: -22,}}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.colorTxtBtnLogin}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>      
  </View>
  )
}
export default Register;