import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import LoadingScreen from 'react-loading-screen';
import logo from '../assets/logo/react.gif';
import { NavigationBar } from '../components/NavigationBar';
import firebase from '../config/firebase'

export const Global = () => {

    const [positif, setPositif] = useState('');
    const [sembuh, setSembuh] = useState('');
    const [meninggal, setMeninggal] = useState('');
    const [rawat, setRawat] = useState('');
    const [data, setData]   = useState({});
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        document.title = 'Global';
        
        firebase.database()
        .ref('country/global')
        .once('value', (snapshot) => {
            const data = snapshot.val();
            setLoading(false);
            setData(data);
        });
    });

    const onSubmit = () => {
        const dataForm = {
            positif: positif,
            sembuh: sembuh,
            meninggal: meninggal,
            rawat: rawat
        }

        firebase.database().ref('country/global').set(dataForm, (error) => {
            if (error) {
                console.log(error.message)
            } else {
                console.log('Success');
            }
        });
    }

    if(loading)
    {
        return (
            <LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                logoSrc= {logo}
                text='L O A D I N G'
            >
            </LoadingScreen>
        )
    }

    return (
        <React.Fragment>
            <NavigationBar />
            <div className="container mt-5">
                <h2>Global</h2>
                <Table striped bordered hover>
                    <tr>
                        <td>Positif</td>
                        <td>
                            <input
                                className="form form-control"
                                placeholder="Positif"
                                value={positif !== '' ? positif : data.positif}
                                onChange={ (e) => setPositif(e.target.value) }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Sembuh</td>
                        <td>
                            <input
                                className="form form-control"
                                placeholder="Sembuh"
                                value={sembuh !== '' ? sembuh : data.sembuh}
                                onChange={ (e) => setSembuh(e.target.value) }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Meninggal</td>
                        <td>
                            <input
                                className="form form-control"
                                placeholder="Meninggal"
                                value={meninggal !== '' ? meninggal : data.meninggal}
                                onChange={ (e) => setMeninggal(e.target.value) }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Dirawat</td>
                        <td>
                            <input
                                className="form form-control"
                                placeholder="Dirawat"
                                value={rawat !== '' ? rawat : data.rawat}
                                onChange={ (e) => setRawat(e.target.value) }
                            />    
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button variant="primary" onClick={onSubmit}>Update</Button>
                        </td>
                    </tr>
                </Table>
            </div>
        </React.Fragment>
    )
}