import React from 'react'
import Userscontact from './Userscontact'
const Users = () => {
  return (
    <div>
        <div class="bgtable  sm:py-32 shadow-blue-700 rounded-md users p-4">
      <table class="min-w-full divide-y z-30 divide-gray-200">
  <thead>
    <tr>
      <th class="px-6 py-3  text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Name</th>
      <th class="px-6 py-3  text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Title</th>
      <th class="px-6 py-3  text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Status</th>
      <th class="px-6 py-3  text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Role</th>
      <th class="px-6 py-3  text-left text-xs font-medium text-gray-100 uppercase tracking-wider">Email</th>
    </tr>
  </thead>
  <tbody class=" divide-y divide-gray-200">
    <tr class="">
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">Jane Doe</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">CEO</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  bg-green-100 text-green-800">Active</span></td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">Admin</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">janedoe@example.com</td>
    </tr>
    <tr class="">
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">John Smith</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">Developer</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span></td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">User</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">johnsmith@example.com</td>
    </tr>
    <tr class=" ">
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">John Smith</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">Developer</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span></td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">User</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">johnsmith@example.com</td>
    </tr>
    <tr class=" ">
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">John Smith</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">Developer</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span></td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">User</td>
      <td class="px-6 py-4 whitespace-nowrap text-gray-100">johnsmith@example.com</td>
    </tr>
  </tbody>

</table>
<div class="flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6">
  <div class="flex flex-1 justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
    <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
  </div>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
   
    <div>
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Previous</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>
       <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
        <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Next</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>

</div>

<Userscontact/>

    </div>
  )
}

export default Users