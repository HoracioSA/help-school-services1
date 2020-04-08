import React from 'react';
import * as MailComposer from 'expo-mail-composer'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from "@react-navigation/native";
import {View, TouchableOpacity,Image, Text, Linking } from 'react-native';
import styles from './styles';
import logoimg from '../../assets/Logo.png';
export default function Detail(){
    const navigation =useNavigation();
    const route =useRoute();
    const incident = route.params.incident;
    const message = `Hello helper ${incident.name} I am contacting you to helpe ${incident.title} whith amout of${incident.value}.`
    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject:`Helper with the case: ${incident.title}`,
            recipients:[incident.email],
            body:message,
        })
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }
    return (
        <View style={[styles.container,{marginTop:0}]}>
            <View style={styles.header}>
                <Image source={logoimg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name={"arrow-left"} size={28} color="#574B90"/>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                    <Text style={styles.incidentProp}>University</Text>
    <Text style={styles.incidentValue}>{incident.name} of {incident.city}-{incident.uf}</Text>
                    <Text style={styles.incidentProp}>Case</Text>
    <Text style={styles.incidentValue}>{incident.description}</Text>
                    <Text style={styles.incidentProp}>Value</Text>
    <Text style={styles.incidentValue}>{incident.value}</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.helperTitle}>Save a Day</Text>
                <Text style={styles.helperTitle}>Be the Helper of this Case</Text>
                <Text style={styles.helperDescription}>Be in Touch</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}