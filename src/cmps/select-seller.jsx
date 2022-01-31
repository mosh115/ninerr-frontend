import React, {useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const levels = [
    'Top Rated Seller',
    'Level 2 Seller',
    'Level 1 Seller',
    'New Seller',
    'all'
];

export function SelectSellerLevels({ sellerLevel, setSellerLevel }) {
    const [stateSellerLevel, setsellerLevel] = React.useState( sellerLevel);

    useEffect(() => {
        setSellerLevel(stateSellerLevel);
    }, [stateSellerLevel])

    useEffect(() => {
        setsellerLevel(sellerLevel);
    }, [sellerLevel])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setsellerLevel(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Seller Level</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={stateSellerLevel}
                    onChange={handleChange}
                    input={<OutlinedInput label="Seller Level" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {levels.map((level) => (
                        <MenuItem key={level} value={level}>
                            <Checkbox checked={stateSellerLevel.indexOf(level) > -1} />
                            <ListItemText primary={level} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
