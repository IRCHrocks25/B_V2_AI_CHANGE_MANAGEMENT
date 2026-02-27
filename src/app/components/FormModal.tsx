import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "./ui/utils";

interface FormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FormModal({ open, onOpenChange }: FormModalProps) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/20" />
        <DialogPrimitive.Content
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] duration-200 p-6 bg-white rounded-[32px] shadow-2xl"
          )}
        >
          <div className="w-full h-[593px] rounded-[24px] overflow-hidden bg-white">
            <iframe
              src="https://l.industryrockstars.ch/widget/form/fzCQlAmoUcjf5ymPGPzp"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "24px",
              }}
              id="inline-fzCQlAmoUcjf5ymPGPzp"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="AI Change Management"
              data-height="593"
              data-layout-iframe-id="inline-fzCQlAmoUcjf5ymPGPzp"
              data-form-id="fzCQlAmoUcjf5ymPGPzp"
              title="AI Change Management"
            />
          </div>
          <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

