import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions,
    Pressable,
    TouchableOpacity,
    FlatList,
    TextInput
} from "react-native";

import CurrencyBtn from "./currencyBtn/CurrencyBtn.jsx";
import constent from "../constent.js"

const CurrencyConvert = () => {
    const [inputValue, setInputValue] = useState(0)
    const [result, setResult] = useState(true)
    const [resultValue, setResultValue] = useState(0)
    const [symbol, setSymbol] = useState('')

    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    const handlePress = (price) => {
        let res = parseFloat(inputValue * price.value).toFixed(2);
        setResultValue(res)
        setSymbol(price.symbol)
    }

    return (
        <View style={[styles.container, { height: height, width: width }]}>
            <Text style={styles.heading}>Currency Converter</Text>
            <View style={styles.inputSec}>
                <Text style={styles.inputCurSym}>৳</Text>
                <TextInput style={styles.inputCurSec} value={inputValue} placeholder="Ex-8" clearButtonMode='always' keyboardType='numeric' onChangeText={setInputValue} />
            </View>
            <View style={styles.resultView}>
                {
                    result && (
                        <Text style={styles.resultText}>{`${symbol} ${resultValue} `}</Text>
                    )
                }
            </View>
            <View style={styles.btns}>
                <FlatList
                    numColumns={3}
                    data={constent}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { handlePress(item) }} >
                            <CurrencyBtn name={item.name} flag={item.flag} styles={symbol === item.symbol && styles.selected}/>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}

export default CurrencyConvert;

const styles = StyleSheet.create({
    selected: {   //we will pass this style to currencyBtn component
        backgroundColor: "#aaa"
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        paddingVertical: 15,
        fontSize: 28,
        color: "black",
        fontWeight: "bold"
    },
    inputSec: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        height: "10%",
        width: "90%",
        // backgroundColor: 'red'
    },
    inputCurSym: {
        marginHorizontal: 10,
        fontSize: 34,
        fontWeight: "bold",
        color: "black"
    },
    inputCurSec: {
        paddingHorizontal: 10,
        height: 50,
        width: "60%",
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 28,
        fontWeight: "bold",
        borderRadius: 10

    },
    resultView: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "90%",
        backgroundColor: 'grey',
        borderRadius: 10,
        elevation: 4
    },
    resultText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        color: "white"
    },
    btns: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        width: "95%",
        height: "70%"
        // backgroundColor: 'red'
    },
    btnsTwo: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: 'blue'
    },
})