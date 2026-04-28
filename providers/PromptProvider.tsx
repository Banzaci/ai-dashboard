"use client";
import { Button } from "@/app/components/Button";
import { createContext, useContext, useState, ReactNode } from "react";

type PromptOptions = {
  message: string;
  onConfirm: () => void;
};

type PromptContextType = {
  showPrompt: (options: PromptOptions) => void;
};

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export const usePrompt = () => {
  const context = useContext(PromptContext);
  if (!context) throw new Error("usePrompt must be used within a PromptProvider");
  return context;
};

export function PromptProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<PromptOptions | null>(null);

  const showPrompt = (opts: PromptOptions) => {
    setOptions(opts);
    setIsOpen(true);
  };

  const handleConfirm = () => {
    options?.onConfirm();
    setIsOpen(false);
  };

  const handleCancel = () => setIsOpen(false);

  return (
    <PromptContext.Provider value={{ showPrompt }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full">
            <p className="text-gray-800 mb-4 text-md">{options?.message}</p>
            <div className="flex justify-end gap-3">
              <Button
                onClick={handleCancel}
                className="bg-red-600 hover:bg-red-700"
                >
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                className="bg-green-600 hover:bg-green-700"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </PromptContext.Provider>
  );
}
