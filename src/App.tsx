import Preloader from "@/components/Preloader";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Editor = lazy(() => import("@/pages/editor"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Suspense>
  );
}

export default App;
