import { Info, X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

export default function AIDisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="rounded-none border-x-0 border-t-0 bg-blue-50 border-blue-200 text-blue-900">
      <Info className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <span>
          <strong>AI-Generated Content Notice:</strong> All content on this website, including text, images, and educational materials, has been generated using artificial intelligence tools. This is a demonstration platform showcasing AI capabilities in educational content creation.
        </span>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 text-blue-700 hover:text-blue-900 transition-colors"
          aria-label="Dismiss notice"
        >
          <X className="h-4 w-4" />
        </button>
      </AlertDescription>
    </Alert>
  );
}
