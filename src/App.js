import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {fetchSupermarketStores} from './DataMap/fetchData';
import AlbertHeijnMap from './Components/AlbertHeijnMap';
import Admin from "./Pages/Admin";
import SupermarketButton from './Components/SupermarketButton';

function App() {
    const [stores, setStores] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetchAlbertHeijnStores();
    //         setStores(data);
    //     };
    //
    //     fetchData();
    // }, []);

    const toggleMachineStatus = (storeId) => {
        const updatedStores = stores.map(store => {
            if (store.id === storeId) {
                return {
                    ...store,
                    isMachineBroken: !store.isMachineBroken
                };
            }
            return store;
        });
        setStores(updatedStores);
    };

    function handleSupermarketClick(supermarket) {
        const fetchDataForSupermarket = async () => {
            const data = await fetchSupermarketStores(supermarket);
            setStores(data);
        };

        fetchDataForSupermarket();
    }


    return (
        <Router>
            <div className="map-wrapper">
                <div className="button-container">
                    <SupermarketButton
                        className="button-supermarket"
                        iconPath="/images/albert-heijn.png"
                        supermarket="Albert Heijn"
                        onClick={handleSupermarketClick}
                    />
                    <SupermarketButton
                        className="button-supermarket"
                        iconPath="/images/Aldi.png"
                        supermarket="ALDI"
                        onClick={handleSupermarketClick}
                    />
                    <SupermarketButton
                        className="button-supermarket"
                        iconPath="/images/dirk.png"
                        supermarket="Dirk"
                        onClick={handleSupermarketClick}
                    />
                    <SupermarketButton
                        className="button-supermarket"
                        iconPath="/images/Jumbo.png"
                        supermarket="Jumbo"
                        onClick={handleSupermarketClick}
                    />
                </div>
                <Routes>
                    <Route path="/" element={<AlbertHeijnMap stores={stores} toggleMachineStatus={toggleMachineStatus} />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

