import { ProviderAssessments } from "./core/context";
import { AppRoute } from "./core/config/routes/route";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <ProviderAssessments>
      <AppRoute />
      <GlobalStyles />
    </ProviderAssessments>
  );
}

export default App;
