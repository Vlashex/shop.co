import SuggestedProducts from "@/features/SuggestedProducts";
import BrandNav from "./components/BrandNav";
import BrowseStyle from "./components/BrowseStyle";
import HappyCustomers from "./components/HappyCustomers";
import Main from "./components/Main";

export default function Home() {

  return (
    <main>
      <Main/>
      <BrandNav/>
      <SuggestedProducts title="NEW ARRIVALS"/>
      <SuggestedProducts title="top selling"/>
      <BrowseStyle/>
      <HappyCustomers/>
    </main>
  );
}
