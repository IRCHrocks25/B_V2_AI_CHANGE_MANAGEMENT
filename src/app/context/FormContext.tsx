import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import FormModal from "../components/FormModal";

interface FormContextType {
  openForm: () => void;
  closeForm: () => void;
  isOpen: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

// Global script loading - only load once
let scriptLoaded = false;

function loadFormScript() {
  if (scriptLoaded || document.querySelector('script[src="https://l.industryrockstars.ch/js/form_embed.js"]')) {
    return;
  }
  
  const script = document.createElement("script");
  script.src = "https://l.industryrockstars.ch/js/form_embed.js";
  script.async = true;
  document.body.appendChild(script);
  scriptLoaded = true;
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load script when provider mounts
    loadFormScript();
  }, []);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <FormContext.Provider value={{ openForm, closeForm, isOpen }}>
      {children}
      <FormModal open={isOpen} onOpenChange={setIsOpen} />
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}

