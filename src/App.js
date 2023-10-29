import { Dashboard } from "@mui/icons-material";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";



function App() {
  const [theme, colorMode] = useMode()
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="App">
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </main>
    </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
