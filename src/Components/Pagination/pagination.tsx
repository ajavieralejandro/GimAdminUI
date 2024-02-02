const Pagination = ()=>{
    return(
<div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        
<nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm bg-white dark:text-blue-500">
	<button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-blue-700">
		<span className="sr-only">Previous</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
		</svg>
	</button>
	<button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border  dark:text-blue-900 dark:border-blue-700">1</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-blue-700">2</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-blue-700">3</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-blue-700">...</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-blue-700">7</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-blue-700">8</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-blue-700">9</button>
	<button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-blue-700">
		<span className="sr-only">Next</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
		</svg>
	</button>
</nav>
        </div>
    )
}

export default Pagination;