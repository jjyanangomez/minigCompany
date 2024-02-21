import react,  {useContext, useState,useEffect} from "react";
import { Text, View, TextInput, TouchableOpacity, Image, Modal,ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from '../styles/stylesInventory';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
const Inventory = () => {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
      ];
      const [value, setValue] = useState(null);
      const [isFocus, setIsFocus] = useState(false);
  
      const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Materiales
            </Text>
          );
        }
        return null;
      };
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.txtInfoUser}>Hola, Celia Macas</Text>
                <Text style={styles.txtBien}>Bienvenida a Mining Company</Text>
                <View style={styles.VistaInventario}>
                        <Text style={styles.txtInventario}>Inventario</Text>
                        <TouchableOpacity style={styles.btnInventario}>
                            <Icon name="search" size={25} color="#282928" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.VistaNewmaterial}>
                        <View style={styles.contenedorTexto}>
                            <Text style={styles.txtNewMaterial}>Nuevo Material</Text>
                        </View>
                        <View style={styles.contenedorImagen}>
                            <Image style={styles.image} source={require('../../assets/category.png')} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.txtFiltro}>Filtros</Text>
                    <View style={styles.VistaInventario}>
                        <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Material' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        />
                        <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Categoria' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        />
                    </View>
                    <Text style={styles.txtFiltro}>Materiales</Text>
                    <View >
                        <ScrollView>
                            <View  style={styles.VistaMateriales}>
                                <View style={styles.Separador}>
                                    <Text style={styles.txtFiltro}>$0.25</Text> 
                                    <Icon name="search" size={25} color="#282928" />
                                </View>
                                <View style={styles.Separador}>
                                    <Text style={styles.tituloMaterial}>Tornillo Autoperforante</Text>
                                    <Text style={styles.subtitulo}>Acero Inoxidable</Text>
                                    <View style={styles.VistaCodigo}>
                                        <View style={styles.VistaCodigo}>
                                            <Text style={styles.subtitulo}>Codigo: </Text>
                                            <Text style={styles.subtitulo}>000000</Text>
                                        </View>
                                        <View style={styles.VistaCodigo}>
                                            <Text style={styles.subtitulo}>Cant.</Text>
                                            <Text style={styles.subtitulo}>56</Text>
                                        </View>
                                    </View>
                                    
                                    
                                </View >
                                <View style={styles.Separador}>
                                    <TouchableOpacity
                                    style={styles.colorBtn}>
                                        <Icon name="search" size={25} color="#282928" />
                                    </TouchableOpacity> 
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            </View>
          
        </View>
    )
}
export default Inventory;