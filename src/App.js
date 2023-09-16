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

    return <AlbertHeijnMap stores={stores} />;
}

export default App;

