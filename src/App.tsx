import Preloader from "@/components/Preloader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Editor from "./pages/editor";

// const Editor = lazy(() => import("@/pages/editor"));
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
