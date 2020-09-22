import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} 
                    source={{ 
                        uri: 'https://avatars1.githubusercontent.com/u/53796153?s=400&u=5fb4f4f34f78ee55148b7a69c269339105d68408&v=4' }}
                />

                <View style={styles.profileInfo} >
                    <Text style={styles.name} >Júlia Stefanoni</Text>
                    <Text style={styles.subject} >História</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                    Melhor professora do mundo
                {'\n'} {'\n'}
                    A melhor professora de história da sua vida toda
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price} >
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                        <RectButton style={[styles.favoriteButton, styles.favorited]} >
                        {/* <Image source={heartOutlineIcon} /> */ }
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton} >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;