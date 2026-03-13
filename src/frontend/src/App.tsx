import { ThemeProvider } from "./context/ThemeContext";
import { ShowcasePage } from "./pages/ShowcasePage";

export default function App() {
  return (
    <ThemeProvider>
      <ShowcasePage />
    </ThemeProvider>
  );
}
