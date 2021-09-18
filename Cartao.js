import React from 'react'
import { StyleSheet, View } from 'react-native'

const Cartao = (props) => {
    return (
        <View style={{...styles.cartao, ...props.style}}>
            {props.children}        
        </View>
    )
}

export default Cartao

const styles = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4,
        padding: 12,
        borderRadius: 12
    }
})