import { useState, useEffect } from "react";

export default function useCurrentLocation() {

    const [position, setPosition] = useState(undefined);

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(response => {
            const { coords } = response;
            setPosition(coords);
        });
    }

    useEffect(() => {
        getPosition()
    }, [])

    return position;
}