import React, { useState, useEffect } from 'react';
import { fetchAlbertHeijnStores } from './DataMap/fetchData';
import AlbertHeijnMap from './Components/AlbertHeijnMap';

function App() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAlbertHeijnStores();
            setStores(data);
        };

        fetchData();
    }, []);

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

    return (
        <div className="map-wrapper">
        <AlbertHeijnMap stores={stores} toggleMachineStatus={toggleMachineStatus} />
        </div>
    );
}

export default App;

