import Header from "../components/Header";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
