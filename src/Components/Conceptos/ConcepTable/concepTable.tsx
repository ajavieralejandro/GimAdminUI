import Pagination from "../../Pagination/pagination";
const ConcepTable = () =>{
    return(
        <>
     <div className="container p-2 mx-auto sm:p-4 text-black">
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup>
			<thead>
				<tr className="bg-blue-500">
					<th className="p-3">Descripcion</th>
					<th className="p-3">Abreviatura</th>
					<th className="p-3">Categoria</th>
					<th className="p-3">Real</th>
					<th className="p-3">Tipo por defecto</th>
					<th className="p-3">Aplica a CAC</th>
					<th className="p-3">
						<span className="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b  dark:border-gray-700">
				<tr>
					<td className="px-3 text-black">Abonos</td>
					<td className="px-3 py-2">
						<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
					<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
					</td>
					<td className="px-3 py-2">
						<p>Egreso</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full text-black hover: focus:">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>

                <tr>
					<td className="px-3 text-black">Abonos</td>
					<td className="px-3 py-2">
						<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
					<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
					</td>
					<td className="px-3 py-2">
						<p>Egreso</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full text-black hover: focus:">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			
            	<tr>
					<td className="px-3 text-black">Abonos</td>
					<td className="px-3 py-2">
						<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
					<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
					</td>
					<td className="px-3 py-2">
						<p>Egreso</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full text-black hover: focus:">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			
            	<tr>
					<td className="px-3 text-black">Abonos</td>
					<td className="px-3 py-2">
						<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
					<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
					</td>
					<td className="px-3 py-2">
						<p>Egreso</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full text-black hover: focus:">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			
            	<tr>
					<td className="px-3 text-black">Abonos</td>
					<td className="px-3 py-2">
						<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
					<p>Abonos</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
					</td>
					<td className="px-3 py-2">
						<p>Egreso</p>
					</td>
					<td className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full text-black hover: focus:">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
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

export default ConcepTable;