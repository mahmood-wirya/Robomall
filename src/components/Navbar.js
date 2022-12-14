import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link, NavLink } from "react-router-dom";
import { logout } from "../app/slices/authSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "Categories", href: "/categories", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "Feedback", href: "/feedback", current: false },
    { name: "About", href: "/about", current: false },
  ]);

  useEffect(() => {}, []);

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-[#2DBCB7] text-white px-3 shadow-md py-2 rounded-md text-sm font-medium"
                            : "text-gray-400 hover:bg-[#1e7a77] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="container pt-2 pl-8 pr-8  lg:w-auto">
                  <NavLink to="/carts" className="flex">
                    <p className="pl-3 text-sm text-gray-400">
                      {JSON.stringify(cart.products.length)}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[22px] w-[22px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                      strokeWidth="1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex flex-row-reverse items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {auth.isAuthenticated ? (
                  <>
                    <img
                      className="h-10  rounded-full"
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    />
                    <p className="text-black mx-5 ">{auth.username}</p>

                    <Link
                      to="/login"
                      className="bg-[#2DBCB7] p-1 rounded-full text-white px-4 hover:bg-[#1e7a77] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={() => dispatch(logout())}
                    >
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="bg-[#2DBCB7] p-1 rounded-full text-white px-4 hover:bg-[#1e7a77] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-3 py-2 rounded-md text-base font-medium bg-[#2DBCB7] text-white"
                      : "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-[#437D7B] hover:text-white"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
