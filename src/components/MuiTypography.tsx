import { Typography } from "@mui/material"


export const MuiTypography = () => {
  return (
    <div>
        {/* h-tags */}
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4" component={'h1'} gutterBottom={true}>h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>

        <Typography variant="subtitle1">h6 Heading</Typography>
        <Typography variant="subtitle2">h6 Heading</Typography>

        {/* p-tag */}
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint a fugiat. Voluptas sapiente ipsam nihil ratione nobis beatae temporibus at repellat amet omnis et natus voluptatum officia, sint unde.</Typography>
        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, harum? Ratione expedita repellat voluptate, corrupti, error omnis vel cum eveniet nobis quia quisquam voluptates asperiores ab ea deleniti, modi eos.</Typography>

        {/* can change the symantic element using the component prop ex: use h4 for all pages but want it to show as h1

        */}
    </div>
  )
}
