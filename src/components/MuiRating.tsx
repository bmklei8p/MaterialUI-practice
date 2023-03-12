import { Stack, Rating } from '@mui/material'
import { useState } from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null)
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }
  console.log({value})
  return (
    <Stack spacing={2}>
        <Rating precision={0.5} icon={<FavoriteIcon fontSize='inherit' color="error" /> }
        emptyIcon={<FavoriteBorderIcon />} size="large" value={value} onChange={handleChange}/>
    </Stack>
  )
}
