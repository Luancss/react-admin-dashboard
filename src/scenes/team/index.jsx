import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {
      field: "id", 
      headerName: "ID"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "AGE", 
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone", 
      headerName: "Phote Number",
      flex: 1,
    },
    {
      field: "email", 
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access", 
      headerName: "Access Level",
      flex: 1,
    renderCell: ({row: {access}}) => {

    }
    },
  ]

  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the Team Members"/>
      <Box >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          />
      </Box>
    </Box>
  )
}

export default Team