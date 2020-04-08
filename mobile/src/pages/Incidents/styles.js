import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        padding:Constants.statusBarHeight + 10,
    
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    headerText:{
        fontSize:15,
        color:'#737380'
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:'bold'
    },
    description:{
        fontSize:16,
        color:'#737380'
    },
    incidentList:{
        marginTop: 32
    },
    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    incidentProp:{
        fontSize:14,
        color:'#41414d',
        fontWeight:"bold"
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:"#737380"
    },
    detailsButton:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    detailsButtonText:{
        color:"#6C53A1",
        fontSize:16,
        fontWeight:"bold"
    }
})