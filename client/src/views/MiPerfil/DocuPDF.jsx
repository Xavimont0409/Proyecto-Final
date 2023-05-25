import React from "react";
import {BsFillEnvelopeAtFill, BsFillTelephoneFill, BsGlobeAmericas, BsLinkedin} from 'react-icons/bs'
// import style from "./MiPerfil.module.css"
import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
// import email from "../../assets/img/email.svg"


const DocuPDF = ({perfil}) => {


    const styles = StyleSheet.create( {
        image: {
          width: '15vw',
          height: '20vh',
          borderRadius: '50%',
        },
        container: {
          padding: '2%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30pt',
        },
        container1: {
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '20pt',
        },
        container2: {
          padding: '2%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
        //   justifyContent: 'space-evenly',
          alignItems: 'center',
        //   gap: '30pt',
          border: 'solid black 1pt',
          width: '80%',
          height: '100%',
        },
        container3: {
          display: 'flex',
          flexDirection: 'row',
        //   gap: '10pt',
        },
        container4: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        //   gap: '30pt',
        },
      });



    return (
        <Document>
            <Page size='A4'>
                {perfil ?
                    <>
                        <View style={styles.container2}>   {/*container 2*/}

                            <View style={styles.container1}>   {/*Container 1*/}

                                <View>
                                    <Image
                                        style={styles.image}
                                        src={perfil.photo}
                                        alt="Profile" />
                                </View>

                                <View>
                                    <Text>{perfil.name} {perfil.apellido}</Text>

                                    <View style={styles.container4}>

                                        <View style={styles.container3}>
                                            <BsFillEnvelopeAtFill></BsFillEnvelopeAtFill>
                                            {/* <Image src={email}></Image> */}
                                            <Text>{perfil.email}</Text>
                                        </View>

                                        <View style={styles.container3}>
                                            <BsFillTelephoneFill></BsFillTelephoneFill>
                                            <Text>{perfil.celular}</Text>
                                        </View>

                                    </View>

                                    <View style={styles.container4}>

                                        <View style={styles.container3}>
                                            <BsLinkedin></BsLinkedin>
                                            <Text>{perfil.linkedin}</Text>
                                        </View>

                                        <View style={styles.container3}>
                                            <BsGlobeAmericas></BsGlobeAmericas>
                                            <Text>{perfil.pais}</Text>
                                        </View>

                                    </View>

                                </View>

                            </View>

                            <View>
                                <Text>{perfil.profesion}</Text>
                                <Text>{perfil.descripcion}</Text>
                            </View>

                            <View>
                                <Text>Mis experiencias profesionales</Text>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta omnis, quidem neque laboriosam delectus eos rerum! Aperiam, sint itaque necessitatibus ipsum perspiciatis similique recusandae doloribus fugit. Quidem, amet vero?</Text>
                            </View>

                            <View>
                                <Text>Mis estudios</Text>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta omnis, quidem neque laboriosam delectus eos rerum! Aperiam, sint itaque necessitatibus ipsum perspiciatis similique recusandae doloribus fugit. Quidem, amet vero?</Text>
                            </View>

                            <View>
                                <Text>Skills</Text>
                                <Text>{perfil.skills}</Text>
                            </View>

                        </View>

                    </>
                    : <Text>Cargando...</Text>}


            </Page>
        </Document>

    )


}


export default DocuPDF;