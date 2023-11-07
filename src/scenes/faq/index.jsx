import {Box, useTheme, Typography} from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpendMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
         Your Favorite Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
         Some Random Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          The Final Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpendMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>

}

export default FAQ
