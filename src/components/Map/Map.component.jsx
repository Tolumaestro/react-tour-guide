import React from "react";
import googleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import Rating from "@mui/material";

import useStyles from "./Map.styles"

const Map = () => {
    const { paper, mapContainer, markerContainer, pointer } = useStyles()
    const isMobile = useMediaQuery("(min-width:600px)")

    const coordinates = { lat: 0, lng: 0 }

    return (
        <div className={mapContainer}>
            <googleMapReact
                bootstrapURLKeys= {{ key: '' }}
                defaultCenter={coords}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={""}
                onChildClick={""}

            >

            </googleMapReact>
        </div>
    ) 
};

export default Map;
