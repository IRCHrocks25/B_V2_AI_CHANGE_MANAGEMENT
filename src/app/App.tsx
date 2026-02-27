import LandingPage from "../imports/LandingPage";
import { FormProvider } from "./context/FormContext";

export default function App() {
  return (
    <FormProvider>
      <div className="w-full overflow-x-hidden">
        <LandingPage />
      </div>
    </FormProvider>
  );
}
