// prefered way to toggle on mobile
import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  console.log(checked)
  return (
    <Box>
        <FormControlLabel label='dark mode' control={<Switch checked={checked} color="success" onChange={handleChange} />} />
    </Box>
  )
}
