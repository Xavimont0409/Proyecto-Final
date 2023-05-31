import React from "react";
import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
// import ListItem from "../../components/ListItemExperience/ListItemExperience";
// import ListItemStudy from "../ListItemStudy/ListItemStudy";
import email from "../../assets/img/email.png"
import linkedin from "../../assets/img/linkedin.png"
import phone from "../../assets/img/phone.png"
import world from "../../assets/img/world.png"
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


const DocuPDF = ({ perfil }) => {

    const formatDate = (date) => {
        const formattedDate = format(new Date(date), 'MMMM yyyy', { locale: es });
        return formattedDate;
      };





    const styles = StyleSheet.create({
        container2: {
            padding: 20,
        },
        container1: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 20,
        },
        image: {
            width: 100,
            height: 100,
            marginRight: 20,
            borderRadius:100,
            borderWidth:1,
            borderColor: 'blue',
        },
        container4: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
        },
        container3: {
            display: 'flex',
            flexDirection: 'row',
            marginRight: 10,
        },
        container5: {
            marginBottom: 20,
        },
        containerList: {
            marginBottom: 10,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            padding: 10,
        

        },

        ContainerList: {
            marginLeft:15,
            marginRight:15,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',

        },





        containerListStudy: {
            marginBottom: 10,
            padding:1,
        },
        container: {
            marginBottom: 10,
        },
        charge: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        company: {
            fontSize: 11,
        },
        dates: {
            fontSize: 11,
        },
    });


    const ListItem = ({ charge, company, startDate, endDate }) => (
        <View >
          <Text style={styles.charge}>{charge}</Text>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.dates}>{formatDate(startDate)} - {endDate === 'Actualmente' ? endDate : formatDate(endDate)}</Text>
        </View>
      );

      const ListItemStudy = ({ study_level, title, institute, state}) => (
          <View >
            <Text style={styles.charge}>{study_level}</Text>
            <Text style={styles.charge}>{title}</Text>
            <Text style={styles.charge}>{institute}</Text>
            <Text style={styles.charge}>{state}</Text>
          </View>
      ); 


    return (
        <Document>
            <Page style={styles.container2}>
                <View style={styles.container1}>
                    <View>
                        <Image style={styles.image} src={perfil.photo} alt="Profile" />
                    </View>
                    <View>
                        <Text>{perfil.name} {perfil.apellido}</Text>
                        <View style={styles.container4}>
                            <View style={styles.container3}>

                                <Image style={{
                                    'width': '15pt',
                                    'height': '20pt'
                                }}
                                    src={email} >
                                </Image>

                                <Text>{perfil.email}</Text>
                            </View>
                            <View style={styles.container3}>

                                <Image style={{
                                    'width': '15pt',
                                    'height': '20pt'
                                }}
                                    src={phone} >
                                </Image>

                                <Text>{perfil.celular}</Text>
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <View style={styles.container3}>
                                <Image style={{
                                    'width': '15pt',
                                    'height': '20pt'
                                }}
                                    src={linkedin} >
                                </Image>
                                <Text>{perfil.linkedin}</Text>
                            </View>
                            <View style={styles.container3}>

                                <Image style={{
                                    'width': '15pt',
                                    'height': '20pt'
                                }}
                                    src={world} >
                                </Image>

                                <Text>{perfil.pais}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Text style={{ textAlign: 'left' }}>{perfil.profesion}</Text>
                    <Text style={{ textAlign: 'justify' }}>{perfil.descripcion}</Text>
                </View>
                <View style={styles.container5}>
                    <Text style={{ textAlign: 'left' }}>Mis experiencias profesionales</Text>
                    <View style={styles.ContainerList}>
                        {perfil.Experiences?.length === 0
                            ? <Text>No tienes experiencia registrada</Text>
                            : perfil.Experiences?.map(exp => (
                                <ListItem charge={exp.charge} company={exp.company} startDate={exp.start_date} endDate={exp.still_working ? 'Actualmente' : exp.end_date} />
                            ))}
                    </View>
                </View>
                <View style={styles.container5}>
                    <Text style={{ textAlign: 'left' }}>Mis estudios</Text>
                    <View style={styles.ContainerList} >
                        {perfil.Formations?.length === 0
                            ? <Text>No tienes estudios registrados</Text>
                            : perfil.Formations?.map(study => (
                                <ListItemStudy study_level={study.study_level} title={study.title} institute={study.institute} state={study.state} />
                            ))}
                    </View>
                </View>
                <View style={styles.container5}>
                    <Text style={{ textAlign: 'left' }}>Skills</Text>
                    <Text>{perfil.skills}</Text>
                </View>
            </Page>
        </Document>

    )


}


export default DocuPDF;