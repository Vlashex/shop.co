import BrandNav from "./components/BrandNav";
import BrowseStyle from "./components/BrowseStyle";
import HappyCustomers from "./components/HappyCustomers";
import Main from "./components/Main";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";

export default function Home() {

  const a = [1,2,3,4]

  return (
    <>
      <Main/>
      <BrandNav/>
      <NewArrivals/>
      <TopSelling/>
      <BrowseStyle/>
      <HappyCustomers/>
    </>
  );
}
