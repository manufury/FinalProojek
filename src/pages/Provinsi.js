import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import LoadingScreen from 'react-loading-screen';
import logo from '../assets/logo/react.gif';
import { NavigationBar } from '../components/NavigationBar';
import firebase from '../config/firebase'

export const Provinsi = () => {

    const [idprovinsi, setIdProvinsi] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [positif, setPositif] = useState('');
    const [sembuh, setSembuh] = useState('');
    const [meninggal, setMeninggal] = useState('');
    const [rawat, setRawat] = useState('');
    const [data, setData]   = useState([]);
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        document.title = 'Provinsi';
        firebase.database()
        .ref('provinsi')
        .once('value', (res) => {
            if(res.val())
            {
                const rawData = res.val();
                const dataArr = [];
                Object.keys(rawData).map(item => {
                    dataArr.push({
                        id: item,
                        ...rawData[item],
                    })
                })
                setData(dataArr);
            }
            setLoading(false);
        });
    });

    const onSubmit = () => {
        const dataForm = {
            provinsi: provinsi,
            positif: positif,
            sembuh: sembuh,
            meninggal: meninggal,
            rawat: rawat
        }

        if(idprovinsi !== '')
        {
            firebase.database().ref('provinsi/'+idprovinsi).set(dataForm, (error) => {
                if (error) {
                    console.log(error.message)
                } else {
                    console.log('Success');
                }
            });
        }
        else
        {
            firebase.database().ref('provinsi').push(dataForm, (error) => {
                if (error) {
                    console.log(error.message)
                } else {
                    console.log('Success');
                }
            });
        }

        clearInput();
    }

    const update = (item) => {
        setIdProvinsi(item.id);
        setProvinsi(item.provinsi);
        setPositif(item.positif);
        setSembuh(item.sembuh);
        setMeninggal(item.meninggal);
        setRawat(item.rawat);
    }

    const remove = (item) => {
        firebase.database().ref('provinsi/'+item.id).remove();
        clearInput();
    }

    const clearInput = () => {
        setIdProvinsi('');
        setProvinsi('');
        setPositif('');
        setSembuh('');
        setMeninggal('');
        setRawat('');
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
                <h2>PROVINSI</h2>

                <h2 style={{textAlign: "center"}}>Tambah Provinsi</h2>
                
                <Table striped bordered hover>
                    <tr>
                        <td>Provinsi</td>
                        <td>
                            <input
                                className="form form-control"
                                placeholder="provinsi"
                                value={provinsi}
                                onChange={ (e) => setProvinsi(e.target.value) }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Positif</td>
                        <td>
                            <input
                                className="form form-control"
                                placeholder="Positif"
                                value={positif}
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
                                value={sembuh}
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
                                value={meninggal}
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
                                value={rawat}
                                onChange={ (e) => setRawat(e.target.value) }
                            />    
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button variant="primary" onClick={onSubmit}>{idprovinsi !== '' ? 'Update' : 'Add'}</Button>
                        </td>
                    </tr>
                </Table>

                <h2 style={{textAlign: "center"}}>Daftar Provinsi</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>PROVINSI</th>
                            <th>MENINGGAL</th>
                            <th>POSITIV</th>
                            <th>SEMBUH</th>
                            <th>RAWAT</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={ i }>
                                <td>{ i+1 }</td>
                                <td>{ item.provinsi }</td>
                                <td>{ item.meninggal ?? '-' }</td>
                                <td>{ item.positif ?? '-' }</td>
                                <td>{ item.sembuh ?? '-' }</td>
                                <td>{ item.rawat ?? '-' }</td>
                                <td>
                                    <Button variant="primary" onClick={() => update(item)}>Update</Button>
                                    <Button variant="danger" onClick={() => remove(item)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    )
}