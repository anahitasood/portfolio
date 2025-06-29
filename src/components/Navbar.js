import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = (
    <Box className="space-y-4 flex flex-col items-center mt-8 md:mt-0 md:space-y-0 md:space-x-6 md:flex-row">
      <a href="#about" className="text-primary md:text-white hover:text-gray-200 transition-colors">About</a>
      <a href="#experience" className="text-primary md:text-white hover:text-gray-200 transition-colors">Experience</a>
      <a href="#skills" className="text-primary md:text-white hover:text-gray-200 transition-colors">Skills</a>
      {/* <a href="#projects" className="text-primary md:text-white hover:text-gray-200 transition-colors">Projects</a> */}
      <a href="#contact" className="text-primary md:text-white hover:text-gray-200 transition-colors">Contact Me</a>
      <a
        href="/AnahitaSood_Resume.pdf"
        className="inline-flex items-center text-primary md:text-white hover:text-gray-200 transition-colors"
        download
      >
        Resume <DownloadIcon className="ml-1" fontSize="small" />
      </a>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{ backgroundColor: 'var(--tw-bg-background, #212A31)' }}
    >
      <Toolbar className="flex flex-wrap justify-between">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="font-bold">
          Anahita Sood
        </Typography>
        <div className="md:hidden">
          <IconButton onClick={() => setDrawerOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
        <div className="hidden md:block">{navLinks}</div>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ className: 'bg-background p-6' }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          >
            {navLinks}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
