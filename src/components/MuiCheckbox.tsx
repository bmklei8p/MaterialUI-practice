import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // check and see if the string is in the skills array, if it is not add it. if it is, filter it out.
    const index = skills.indexOf(event.target.value)
    if ( index === -1) {
        setSkills([...skills, event.target.value])
    } else {
        setSkills(skills.filter((skill) => skill !== event.target.value))
    }
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setAcceptTnC(!acceptTnC)
    setAcceptTnC(event.target.checked)
  }
  console.log({skills})
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept the terms and conditions'
            control={<Checkbox size="small" color='secondary' checked={acceptTnC} onChange={handleChange} />}/>
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            onChange={handleChange}
            checked={acceptTnC} />
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label='HTML' control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillChange} />} />
                    <FormControlLabel label='JavaScript' control={<Checkbox value="javascript" checked={skills.includes('javascript')} onChange={handleSkillChange} />} />
                    <FormControlLabel label='CSS' control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkillChange} />} />
                </FormGroup>
                <FormHelperText>
                    Invalid selection
                </FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}
