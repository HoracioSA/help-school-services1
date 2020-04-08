import React,{useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import {View,FlatList, Image, Text, TouchableOpacity} from 'react-native';
import logoimg from '../../assets/Logo.png';
import styles from './styles';
import api from '../../services/api'
export default function Incidents(){
    const [incidents, setIncidents]=useState([]);
    const [total, setTotal]=useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading]=useState(false)
    const navigation = useNavigation();
    function navigateToDetails(incident){
        navigation.navigate('Detail', {incident})
    }
    async function loadIncidents(){
        if(loading){
            return;
        }
        if (total > 0 && incidents.length === total){
            return;

        }
        setLoading(true);
        // const response = await api.get(`incidents?page=${page}`);
        const response = await api.get('incidents',{
            params:{page}
        });
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }
    useEffect(()=>{
        loadIncidents()
    },[])
    return (
        <View  style={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg}/>
                <Text style={styles.headerText}>
    Total: <Text style={styles.headerTextBold}>{total}</Text> 
                </Text>
            </View>
            <Text style={styles.title}>Well Come</Text>
            <Text style={styles.description}>Choose one of this cases and Solve it</Text>
            <FlatList 
            data={incidents}
            style={styles.incidentList}
            keyExtractor={incident =>String(incident.id)}
            // showsVerticalScrollIndicator={true}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.2}
            renderItem={({item: incident})=>(
                <View style={styles.incident}>
                    <Text style={styles.incidentProp}>University:NmeTau</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProp}>Case</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
                    <Text style={styles.incidentProp}>Value</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('en',{style:'currency', currency:'USD'}).format(incident.value)}</Text>
                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={()=>navigateToDetails(incident)}>
                        <Text style={styles.detailsButtonText}>See more Details</Text>
                        <Feather name="arrow-right" size={16} color="#574B90"/>
                    </TouchableOpacity>

                </View>

            )}/>
            
            </View>
    )
}