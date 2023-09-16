import axios from 'axios';

const overpassUrl = 'https://overpass-api.de/api/interpreter';

export const fetchAlbertHeijnStores = async () => {
    const query = `
        [out:json];
        area["name"="Nederland"]->.searchArea;
        node["shop"="supermarket"]["brand"="Albert Heijn"](area.searchArea);
        out;
    `;

    try {
        const response = await axios.post(overpassUrl, query, {
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8',
            },
        });
        return response.data.elements;
    } catch (error) {
        console.error("Error fetching Albert Heijn stores:", error);
        return [];
    }
};
