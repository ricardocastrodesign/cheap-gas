import axios from 'axios';

const API_KEY = '3025572a-4a5e-216d-6141-7fd3a6b991fe';

const baseURL = 'https://creativecommons.tankerkoenig.de/json';

// Function to fetch gas stations based on search criteria
export async function getGasStations(searchParams) {
    try {
        const response = await axios.get(`${baseURL}/list.php`, {
            params: {
                lat: searchParams.lat,
                lng: searchParams.lng,
                rad: searchParams.rad,
                sort: searchParams.sort,
                type: searchParams.type,
                apikey: API_KEY,
            },
        });

        if (response.data.ok) {
            return response.data.stations.filter((station) => {
                return station.isOpen === true && station.brand === searchParams.brand;
            });
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        throw new Error('An error occurred while fetching gas stations: ' + error);
    }
}

// Function to fetch gas stations brands
export function getGasStationsBrands() {

    const brands= [
        "TotalEnergies",
        "ARAL",
        "Sprint",
        "JET",
        "ELAN",
        "Shell",
        "STAR",
        "ESSO",
        "HEM",
        "TAMOIL",
        "AGIP ENI",
        "SB",
        "Q1",
        "Tankcenter",
        "SB-Markttankstelle",
        "bft-Tankstelle",
        "Union Zapfstelle",
        "Bavaria Petrol",
        "SUN",
        "Kaufland",
        "Access",
        "CleanCar",
        "Greenline",
        "Markenfreie TS",
        "team",
        "Auto SPREVES",
        "ORLEN",
        "BHM Beyer",
        "OIL! (Automatenstation)",
        "bft",
        "Freie Tankstelle",
        "GO",
        "T"
    ]
   
    return brands;
}