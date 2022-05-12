import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Nav from './nav';
// import { minHeight } from '@mui/system';

export default function Layouts({ children }) {

    return (
        <>
            <div style={{
                // minHeight:"100vh",
            }}>
                <Nav />
                <div style={{
                    width:"100%",
                    minHeight:"100vh",
                    // overflow:"hidden",
                    boxSizing:"border-box",
                    padding:"100px 0px",
                    background:"#eceeee"
                }}>
                    <Container maxWidth="lg" style={{
                        // minHeight:"50vh",
                        boxSizing:"border-box",
                        padding:0,
                        background:"white",
                        boxShadow:"grey 0px 1px 10px -1px"
                    }}>
                        {children}
                    </Container>
                </div>
            </div>

        </>
    )
}