import ClientCard from "../clientCard/clientCard";
import SearchBar from "../SearchBar/searchBar";
import Breadcrumbs from "../BreadCrumbs/breadcrumbs";
import ClientButtons from "../clientButtons/clientButtons";
const Clients = () =>{
    return(
    <>
    <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <Breadcrumbs />
        <div className="grid grid-cols-1 gap-4">
        <SearchBar />
        <div className="items-end">
        <ClientButtons />
        </div>

        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />

       </div>
    </div>
</section>
    </>)
}

export default Clients;