import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

const CurrencyBtn = (props) =>{
    return(
        <View style={styles.currencyBtn}>
            <Text style={styles.flagStyle}>{props.flag}</Text>
            <Text style={styles.nameStyle}>{props.name}</Text>
        </View>
    )
}
export default CurrencyBtn;

const styles = StyleSheet.create({
    currencyBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        marginVertical: 20,
        height: 85,
        width: 110,
        backgroundColor: "skyblue",
        borderRadius: 10,
        elevation: 3
    },
    flagStyle: {
        fontSize: 30
    },
    nameStyle: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold"
    }
})