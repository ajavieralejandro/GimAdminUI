import Sidebar from "../../Components/Sidebar/sidebar";
import Clients from "../../Components/Clients/clients";
import Conceptos from "./Cuentas/conceptos";
const AdminPage = () =>{
    return(
        <>
        <Sidebar>
            <Conceptos />
        </Sidebar>
        </>
    )
}

export default AdminPage;