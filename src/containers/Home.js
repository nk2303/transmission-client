import React from 'react';
import Button from "react-bootstrap/Button";

const Home = () => {

    const generateKey = () => {
        const character = [ 
            "A",  "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        ]
    }

    return (
        <Button variant="dark">
            Create a Page
        </Button>
    )
}

export default Home