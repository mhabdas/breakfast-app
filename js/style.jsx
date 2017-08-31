import React from 'react';
import styled from 'styled-components';


// Colors 
const colors = {
    background: 'whitesmoke',
    accent: '#EE6C4D',
    text: '#3D5A80',

}


// Buttons & Links
const Button = styled.button`
    border: 2px solid ${colors.accent};
    background-color: ${colors.background};
    padding: .5rem;  
    margin: .25rem;
    color: ${colors.accent};
    font-weight: 700;
    cursor: pointer;
    border-radius: 2px; 
    transition: background-color 1s;

    a {
        color: ${colors.accent};
        text-decoration: none;
        width: 100%;
        height: 100%;
        &:hover {
            color: white;
        }
    }

    &:hover {
        background-color: ${colors.accent};
        color: white;
        a {
            color: white;   
        }
        
    }
`;

const Link = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${colors.text};

    &:hover {
        color: ${colors.accent};
    }
`

export {Button, Link};