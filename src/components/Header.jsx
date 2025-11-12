import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';


function Header() {
    const projectInfo = "A resume builder website helps users create professional resumes easily using pre-designed templates and simple steps. Users can enter their details like education, skills, and experience, and the website formats everything neatly. It often includes customization options, real-time previews, and PDF downloads. Popular examples are Canva, Resume.io, and Zety. These tools save time and ensure resumes look clean and professional."
  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'grey'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'60px'} src='public/attractive-online-curriculum-template.png'/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'><span>Resume</span><span>Builder</span></Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">About</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>

)
}

export default Header