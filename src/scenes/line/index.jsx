import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Gráfico de linha" subtitle="Simples gráfico de linha" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;