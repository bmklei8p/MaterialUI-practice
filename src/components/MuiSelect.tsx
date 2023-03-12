import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
  const [countries, setCounties] = useState<string[]>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCounties(typeof value === 'string' ? value.split(',') : value)
  }
console.log({countries})
  return (
    <Box width='250px'>
        <TextField SelectProps={{multiple: true}}
        fullWidth label='Select country' select value={countries}
        onChange={handleChange}>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>

  )
}
