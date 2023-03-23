import Popup from './Popup';
import { useState } from 'react'
import { Button } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface ChildProps {
    open?: boolean;
    handleDrawerOpen?: () => void;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Header = ({ open, handleDrawerOpen }: ChildProps) => {

    const [openModal, setOpen] = useState(false);
    const handleOpenModal: () => void = () => setOpen(true);
    const handleCloseModal: () => void = () => setOpen(false);

    return (
        <AppBar position="fixed" open={open} >
            <Popup open={openModal}
                handleCloseModal={handleCloseModal} />
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}>
                    <MenuIcon />
                </IconButton>
                <LanguageIcon fontSize='large' sx = {{mr: 1}}/>
                <Typography variant="h6" noWrap component="div">
                    News
                </Typography>
                <ButtonGroup
                    sx={{
                        display: open ? (window.innerWidth < 500 ? 'none' : 'blok') : 'blok',
                        m: '0 5px',
                        position: 'absolute',
                        right: 20,
                    }}
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    color='secondary'>
                    <Button >VIEW</Button>
                    <Button onClick={handleOpenModal}>POPUP</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

export default Header;