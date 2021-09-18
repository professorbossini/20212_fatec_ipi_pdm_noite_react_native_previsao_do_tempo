import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'

import Cartao from './Cartao'

const PrevisaoItem = ({previsao}) => {
    const data = new Date(previsao.dt * 1000).toLocaleTimeString()
    const tMin = `Min: ${previsao.main.temp_min}\u00B0`
    const tMax = `Max: ${previsao.main.temp_max}\u00B0`
    const umidade = `Umidade: ${previsao.main.humidity}%`
    const descricao = previsao.weather[0].description
    const nomeFigura = previsao.weather[0].icon
    const imgURI = `https://openweathermap.org/img/wn/${nomeFigura}.png`
    return (
        <Cartao style={styles.cartao}>
            <View style={styles.tela}>
                <Image 
                    style={styles.imagem}
                    source={{uri: `${imgURI}`}}
                />
                <View>
                    <View style={styles.primeiraLinha}>
                        <Text>{`${data} - ${descricao}`}</Text>
                    </View>
                    <View style={styles.segundaLinha}>
                        <Text style={styles.valor}>{tMin}</Text>
                        <Text style={styles.valor}>{tMax}</Text>
                        <Text style={styles.valor}>{umidade}</Text>
                    </View>
                </View>               
            </View>
        </Cartao>
    )
}

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomColor: '#DDD',
        marginTop: 4
    },
    valor: {
        marginHorizontal: 2
    }
})

export default PrevisaoItem
