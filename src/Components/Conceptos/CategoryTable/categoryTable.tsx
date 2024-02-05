import Pagination from "../../Pagination/pagination";
const CategoryTable = () =>{
    return(
        <>
     <div className="container p-2 mx-auto sm:p-4 text-white">
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="" />
				<col />
				
				<col className="" />
			</colgroup>
			<thead>
				<tr className="bg-blue-500">
					<th className="p-3">Descripcion</th>
					<th className="p-3">Abreviatura</th>
				
					<th className="p-3">
						<span >Edit</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b  dark:border-gray-700 text-black">
				<tr>
					<td className="px-3 text-black">Abonos</td>
					<td className="px-3 py-2">
						<p>Abonos</p>
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
					<td className="px-3 py-2 ">
						<p>Abonos</p>
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

export default CategoryTable;