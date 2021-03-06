import React from 'react';
import { Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home, Login, AdminPanelSettings } from '@mui/icons-material';

const Nav = () => {
    const navigate = useNavigate()
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    width: "100%",
                    background: "black",
                    height: "55px",
                    padding: "0px 3px",
                    overflow: "hidden",
                    paddingTop: 15,
                    zIndex: 99
                }}
            >
                <div style={{float:"left"}}>
                    <Stack spacing={2} direction="row">
                        <Button variant="text" onClick={()=>navigate("/")}><Home/></Button>
                    </Stack>
                </div>
                <div style={{float:"right"}}>
                    <Stack spacing={2} direction="row">
                        <Button variant="text" onClick={()=>navigate("/login")}>
                            <Login />
                            {/* <AdminPanelSettings/> */}
                        </Button>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default Nav;