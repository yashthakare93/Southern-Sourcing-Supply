import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = () => {
    return (
        <div className="flex items-center justify-between  border-gray-200 bg-white px-8 py-3 sm:px-24">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft aria-hidden="true" className="size-5" />
                        </a>
                        <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                            ...
                        </span>
                        <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            6
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            7
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight aria-hidden="true" className="size-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination;