import * as React from 'react';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react'

const Footer = () => {

    const [date, setDate] = useState(new Date());
    const [articleCount, setArticleCount] = useState<Number>(0);

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 500);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{
            height: '64px',
            width: '100%',
            backgroundColor: 'white',
            position: 'fixed',
            bottom: 0,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <Box sx={{ margin: '0 16px', fontSize: 16 }}>
                {date.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                })}
            </Box>
            <Box sx={{ margin: '0 20px', fontSize: 16 }}>
                Articles on this site:
                {` ${articleCount}`}
            </Box>
        </Box>
    )
}

export default Footer;