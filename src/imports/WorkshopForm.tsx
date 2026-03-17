"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../app/components/ui/dialog";
import { useWorkshopForm } from "./WorkshopFormContext";

export default function WorkshopForm() {
  const { isOpen, closeForm } = useWorkshopForm();

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://l.industryrockstars.ch/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://l.industryrockstars.ch/js/form_embed.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeForm()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex flex-col items-center text-center gap-1 mb-4">
            <DialogTitle className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#0d1353] text-[18px] md:text-[20px] leading-[1.1]">
              AI Change Management Workshop
            </DialogTitle>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#0d1353] text-[16px] md:text-[18px]">
              Saturday 28th March 2026 9:00 AM PST
            </p>
          </div>
        </DialogHeader>
        <div className="w-full" style={{ height: "566px" }}>
          <iframe
            src="https://l.industryrockstars.ch/widget/form/bEgSoPVsNkMA0i7narvB"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "32px",
            }}
            id="inline-bEgSoPVsNkMA0i7narvB"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FB - AI Change Management - March 28, 2026"
            data-height="566"
            data-layout-iframe-id="inline-bEgSoPVsNkMA0i7narvB"
            data-form-id="bEgSoPVsNkMA0i7narvB"
            title="FB - AI Change Management - March 28, 2026"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}