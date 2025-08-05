import type { JSX } from "react";
import NavBar from "../ui/NavBar";
import Countries from "../components/Countries";

function HomePage(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Countries />
    </div>
  );
}

export default HomePage;
