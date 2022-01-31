import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectDelivery({ daysToDelivery, setDaysToDelivery }) {
    const [age, setAge] = React.useState(daysToDelivery) || Infinity;

    useEffect(() => {
        setDaysToDelivery(age);
    }, [age])

    useEffect(() => {
        setAge(daysToDelivery);
    }, [daysToDelivery])

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }} className="box">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Delivery</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Delivery"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Express 24H</MenuItem>
                    <MenuItem value={3}>Up to 3 Days</MenuItem>
                    <MenuItem value={7}>Up to 7 Days</MenuItem>
                    <MenuItem value={Infinity}>Anytime</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
