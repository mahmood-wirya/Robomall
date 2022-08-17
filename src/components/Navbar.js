import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link , NavLink } from "react-router-dom";
import { logout } from '../app/slices/authSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "Categories", href: "/categories", current: false },
  ]);

  useEffect(() => {
    console.log("the state of auth is:", auth);
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center text-black ">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                        isActive
                          ? 'bg-[#2DBCB7] text-white px-3 py-2 rounded-md text-sm font-medium'
                          : 'text-gray-300 hover:bg-[#1e7a77] hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex flex-row-reverse items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {auth.isAuthenticated ? (
                < >
                <img className="h-10  rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
                  <p className="text-black mx-5 ">
                   
                     {auth.username}
                  </p>
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
                    ? 'block px-3 py-2 rounded-md text-base font-medium bg-[#2DBCB7] text-white'
                    : 'block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-[#437D7B] hover:text-white'
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
