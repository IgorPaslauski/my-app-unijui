import { Suspense } from "react";
import { HeaderPage } from "./home/HeaderPage";
import { ListaCardTurma } from "./ListaCardTurma";
import { NavBar } from "./nav/NavBar";
import { LoadingData } from "./LoadingData";
export default function Home() {
  return (
    <div className="container-pai">
      <HeaderPage />
      <div className="container-body">
        <NavBar />
        <main style={{ width: "100%" }}>
          <Suspense fallback={<LoadingData />}>
            <ListaCardTurma />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
