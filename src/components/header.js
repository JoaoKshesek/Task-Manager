import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../styles/global.css'
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1, borderRadius: '5px' }}>
        <AppBar position="static" sx={{ borderRadius: '5px' }} >
          <Toolbar sx={{ background: 'linear-gradient(0deg, rgba(40,118,105,1) 0%, rgba(54,156,148,1) 100%);', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Gerenciamento de Tarefas
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;