import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from "react";


export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([])
  const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats);
  }

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text" href="https://google.com">Text</Button>
            {/* primary */}
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant="text" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="success">Success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant="contained" size="small">small</Button>
            <Button variant="contained" size="medium">medium</Button>
            <Button variant="contained" size="large">large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant="contained"  disableRipple onClick={() => alert("Clicked")} startIcon={<SendIcon />}>Send</Button>
            <Button variant="contained" endIcon={<SendIcon />} disableElevation={true}>Send</Button>
            <IconButton aria-label="send" color="success" size="small">
                <SendIcon />
            </IconButton>
        </Stack>

        <Stack direction={"row"}>
            <ButtonGroup aria-label="alignment button group" variant="contained" orientation="vertical" size="small" color="secondary">
                <Button onClick={() => alert('Left clicked')}>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>

        {/* exclusive will allow only one toggle at a time - on toggleButtonGroup*/}
        <Stack direction={"row"}>
            <ToggleButtonGroup size="small" color="success" orientation="vertical" value={formats} onChange={handleFormatChange} aria-label="text-formatting">
                <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic' aria-label="italic"><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}
