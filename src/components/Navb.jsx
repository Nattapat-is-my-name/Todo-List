import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function Navb() {
    return (
        <Box >
            <AppBar position="static" color="inherit" >
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} fontSize="1.6rem">
                        ToDo List
                    </Typography>
                       <Button color="inherit">Login</Button> 
                       <Button color="inherit">Register</Button> 
                </Toolbar>
            </AppBar>
        </Box>
    );
}

