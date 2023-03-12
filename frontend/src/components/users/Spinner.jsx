import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Spinner = () => {
    return (
        <Section>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="inherit" />
            </Stack>
        </Section>
    );
}

export default Spinner;

const Section = styled.div`
    display: flex;
    align-items: center;
    flex: 7;
    justify-content: center;
    height: 100%;
    width: 98%;
`