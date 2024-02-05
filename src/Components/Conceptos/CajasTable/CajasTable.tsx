import Pagination from "../../Pagination/pagination";
const CajasTable = () =>{
    return(
        <>
      <div className="container p-2 mx-auto sm:p-4 text-white">
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
			</colgroup>
			<thead>
				<tr className="bg-blue-500">
					<th className="p-3">Descripcion</th>
					<th className="p-3">Punto de Venta</th>
					<th className="p-3">Sucursal</th>
					<th className="p-3">Activa</th>
					<th className="p-3">
						<span className="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b text-black dark:border-gray-700">
				<tr>
					<td className="px-3 text-black">						<p>Caja Admin Lomas</p>
</td>
					<td className="px-3 py-2">
					</td>
					<td className="px-3 py-2">
					<p>LAS HERAS 1512 (LOMAS DE ZAMORA)</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
					</td>
				
				
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full text-black hover: focus:">
							Editar
						</button>
						<button type="button" title="Open details" className="p-1 rounded-full text-black hover: focus:">
							Saldos
						</button>
					</td>
				</tr>

           
			
			
			</tbody>
		</table>
        <Pagination />

	</div>
    
</div>
        </>
    )
}

export default CajasTable;