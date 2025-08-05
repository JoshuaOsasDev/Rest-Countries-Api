import type { JSX } from "react";
import Spinner from "./Spinner";

function FullPageSpinner(): JSX.Element {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm dark:bg-blue-950/70">
      <Spinner color="#3b82f6" />
    </div>
  );
}

export default FullPageSpinner;
