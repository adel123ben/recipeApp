import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function BottomBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 bg-white shadow">
          <div className="flex justify-between max-w-md mx-auto p-4">
            <div className="flex flex-col items-center">
              <HomeIcon className="text-[#ffc107] w-6 h-6 mb-1" />
              <span className="text-xs font-semibold text-gray-700">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <SearchIcon className="w-6 h-6 mb-1" />
              <span className="text-xs font-semibold text-gray-500">Browse</span>
            </div>
            <div className="flex flex-col items-center">
              <ShoppingCartIcon className="w-6 h-6 mb-1" />
              <span className="text-xs font-semibold text-gray-500">Cart</span>
            </div>
            <div className="flex flex-col items-center">
              <UserIcon className="w-6 h-6 mb-1" />
              <span className="text-xs font-semibold text-gray-500">Account</span>
            </div>
          </div>
        </div>
      )
    }
    
    function HomeIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    }
    
    
    function SearchIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      )
    }
    
    
    function ShoppingCartIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      )
    }
    
    
    function UserIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    }
    