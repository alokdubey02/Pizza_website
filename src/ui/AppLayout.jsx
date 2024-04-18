import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(isLoading);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />

      <div className=" overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet /> {/* render the child routes element */}
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
