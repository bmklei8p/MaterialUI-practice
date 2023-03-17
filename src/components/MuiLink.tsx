import { Stack, Link, Typography } from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color={"secondary"}>Link</Link>
        <Typography variant='h6'>
            <Link href='#' color={"secondary"} underline='hover'>Link</Link>
        </Typography>
        <Link href='#' color={"secondary"} underline='none'>Link</Link>
    </Stack>
  )
}
