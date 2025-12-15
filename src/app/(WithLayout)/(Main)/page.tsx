import dynamic from "next/dynamic";

const loading = () => (
  <p className="w-full h-16 text-center">Загрузка</p>
)
const DynamicMain = dynamic(() => import('./components/Main'), {
  ssr: true, 
  loading: loading
});
const DynamicSuggestedProducts = dynamic(() => import('@/features/SuggestedProducts'), {
  ssr: false,
  loading: loading
});
const DynamicBrandNav = dynamic(() => import('./components/BrandNav'), {
  ssr: false,
  loading: loading
});
const DynamicBrowseStyle = dynamic(() => import('./components/BrowseStyle'), {
  ssr: false,
  loading: loading
});
const DynamicHappyCustomers = dynamic(() => import('./components/HappyCustomers'), {
  ssr: false,
  loading: loading
});


export default function Home() {

  return (
    <main>
      <DynamicMain/>
      <DynamicBrandNav/>
      <DynamicSuggestedProducts title="NEW ARRIVALS"/>
      <DynamicSuggestedProducts title="top selling"/>
      <DynamicBrowseStyle/>
      <DynamicHappyCustomers/>
    </main>
  );
}
