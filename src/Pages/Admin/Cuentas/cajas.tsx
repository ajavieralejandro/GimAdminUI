import CajasTable from "../../../Components/Conceptos/CajasTable/CajasTable";
import ConceptBreadcrumbs from "../../../Components/Conceptos/conceptBreadCumbs/conceptBreadCrums";
const Cajas = () =>{
    return(
        <>
                    <div className="container px-6 py-10 mx-auto">
                 <ConceptBreadcrumbs  />
               <div className="p-6">
               <div className="inline-flex  shadow-sm float-right" role="group">

  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
   
    Buscar
  </button>

</div></div>  

                 <CajasTable />
        </div>
        </>
    )
}

export default Cajas;
