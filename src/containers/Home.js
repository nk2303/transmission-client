import React from 'react';
import Button from "react-bootstrap/Button";

const Home = () => {

    const generateKey = () => {
        const characters = [ 
            "A",  "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ]
        let r = '';
        for (let i = 0; i <= 3; i++) {
            let k = characters[Math.floor(Math.random()*characters.length)]
            r = r + k;
        }
        return r;
    }

    return (
        <Button variant="dark">
            Create a Page
        </Button>
    )
}

export default Home