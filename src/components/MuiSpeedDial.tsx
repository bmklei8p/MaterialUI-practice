import { SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'

export const MuiSpeedDial = () => {
  return (
    <SpeedDial ariaLabel='Navigation speed dial'
    sx={{position: 'absolute', bottom: '16px', right: '16px'}}
    icon={<SpeedDialIcon openIcon={<EditIcon />} />} >
        <SpeedDialAction tooltipOpen icon={<CopyIcon />} tooltipTitle='Copy' />
        <SpeedDialAction tooltipOpen icon={<PrintIcon />} tooltipTitle='Print'/>
        <SpeedDialAction tooltipOpen icon={<ShareIcon />} tooltipTitle='Share' />
    </SpeedDial>
  )
}
