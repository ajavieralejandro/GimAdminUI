import Sidebar from "../../Components/Sidebar/sidebar";
import Clients from "../../Components/Clients/clients";
import Conceptos from "./Cuentas/conceptos";
import Cajas from "./Cuentas/cajas";
const AdminPage = () =>{
    return(
        <>
        <Sidebar>
            <Cajas />
        </Sidebar>
        </>
    )
}

export default AdminPage;