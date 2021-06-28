import React, {useState, useEffect} from 'react';
import LoadingScreen from 'react-loading-screen';
import logo from '../assets/logo/react.gif';
import { NavigationBar } from '../components/NavigationBar';

export const Dashboard = () => {
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

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
                <h2 style={{textAlign: "center"}}>SELAMAT DATADANG DI WEBSITE KAWAL COVID 19</h2>
            </div>
        </React.Fragment>
    );
}