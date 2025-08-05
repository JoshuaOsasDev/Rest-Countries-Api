import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import FullPageSpinner from "./ui/FullPageSpinner";
import CountryDetails from "./pages/CountryDetails"; // normal import (no suspense)

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div className="bg-grey-50 flex min-h-screen flex-col dark:bg-blue-950 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<FullPageSpinner />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
