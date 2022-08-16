import React from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    
} from "@react-pdf/renderer";

const PdfDocument = ({data,cgpa}) => {
    const styles = StyleSheet.create({
        header:{
           textAlign:"center",
           textDecoration:"underline",
           fontSize:"15px",
           fontWeight:600
        },
        textName:{
            fontSize:10 ,
            fontWeight:500,
            marginBottom:"3px"
        },
        container:{
            marginTop:100 ,
            marginLeft:5
        },
        page: {
            backgroundColor: "#ffffff"
        },
        view_container:{
            width:'600px',
            display:"flex",
            flexDirection:"row",
            marginTop:"10px"
        },
        view_container_sub:{
          display:"flex",
          flex:1 ,
          flexDirection:"column",
          justifyContent:"center",
          border:"1px solid black"
        },
        subText:{
            fontSize:"13px",
            fontWeight:700
        }
    });

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.container}>
                    <Text>  pdf document </Text>
                    {/* <Text style={styles.header}>Customer Payment Detail </Text>
                    <Text style={styles.textName}>Name:{data.name}</Text>
                    <Text style={styles.textName}>Email:{data.email}</Text>
                    <Text style={styles.textName}>City:{data.shippingAddress.city}</Text>
                    <Text style={styles.textName}>Pincode:{data.shippingAddress.pincode}</Text>
                    <Text style={styles.textName}>Street:{data.shippingAddress.street}</Text>
                    <Text style={styles.textName}>Booking Date: {new Date(data.booking).toLocaleString()}</Text> */}

                   
                    <View style={styles.view_container}>
                          {/* <View  style={styles.view_container_sub}>
                              <Text style={styles.subText}>transactionId</Text>
                              <Text style={styles.textName}>{data.transactionId}</Text>
                          </View>
                          <View style={styles.view_container_sub}>
                              <Text style={styles.subText}>userId</Text>
                          <Text style={styles.textName}>{data.userId}</Text>
                          </View>
                          <View style={styles.view_container_sub}>
                            <Text style={styles.subText}>Pay</Text>
                            <Text style={styles.textName}>$ {data.orderAmount}</Text>
                          </View>
                          <View style={styles.view_container_sub}>
                              <Text style={styles.subText}>Payment Status</Text>
                              <Text style={styles.textName}>done</Text>
                          </View> */}
                    </View>
                   
                   
                     
                    
                  
                  
                      
             
                   
                 
                    
                  
                </View>    
            </Page>    
        </Document>
    );
};

export default PdfDocument;