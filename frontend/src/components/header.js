import Menu, { Box, Button, Icon, MenuItem, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import RocketIcon from '@mui/icons-material/Rocket';

export default function HeaderBar() {
    return (
        <AppBar>
            <Toolbar>
                <RocketIcon></RocketIcon>
                <h1>Orbital Night</h1>
                <Button variant='text'>Orbital Night</Button>
                <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
                    <Button variant='contained'>Hummpe</Button>
                    <Button variant='contained'>Lovisa</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}