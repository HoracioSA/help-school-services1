import {StyleSheet} from 'react-native';

import Contents from 'expo-constants'
export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        padding:Contents.statusBarHeight + 20
    },

    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        
    },
    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
        marginTop:30
    },
    incidentProp:{
        fontSize:14,
        color:'#41414d',
        fontWeight:"bold",
       
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        color:"#737380"
    },
    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
    },
    helperTitle:{
        fontSize:15,
        fontWeight:"bold",
        color:"#13131a",
        lineHeight:30,
    },
    helperDescription:{
        fontSize:15,
        color:"#767680",
        marginTop:16
    },
    actions:{
        marginTop:16,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    action:{
        backgroundColor:"#574B90",
        borderRadius:8,
        height:50,
        width:"40%",
        justifyContent:"center",
        alignItems:"center",   
    },
    actionText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold"
    }
});