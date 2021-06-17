import {Fragment, useEffect, useState} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {BellIcon, MenuIcon, PlusIcon, XIcon} from '@heroicons/react/outline';
import {authentication, user as userAuth} from "../services/AuthenticationService";

const navigation = [
    { name: 'DealApp', href: '/', current: true },
    { name: 'Top de la semaine (1er deals)', href: '/first', current: false },
    { name: 'Nouveaux', href: '/deals/last', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Nav() {
    const [user, setUser] = useState({
        name: false,
        img: "https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png"
    });

    useEffect(() => {
        if (authentication) {
            setUser({...user, userAuth});
        }
    }, [userAuth]);

    const linksUser = [
        { text: "Mes deals", link: "/profile/"+ (userAuth._id || "") },
        { text: "Votre profil", link: "#profil" },
        { text: "Déconnexion", link: "/logout" }
    ];

    function getMenuUser() {

        if (!authentication) {
            return (
                <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href="/login"
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                )}
                            >
                                Connexion
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            );
        }

        return (
            <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                { linksUser.map(el => {
                    return (
                        <Menu.Item key={el.link}>
                            {({ active }) => (
                                <a
                                    href={el.link}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    {el.text}
                                </a>
                            )}
                        </Menu.Item>
                    );
                }) }
            </Menu.Items>
        );
    }

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    {/*<svg id="Capa_1"  height="48" viewBox="0 0 512 512" width="48" xmlns="http://www.w3.org/2000/svg"><g><path d="m200.693 81.752c-6.14-2.032-12.892.101-16.751 5.291l-84.048 113.054c-25.458 33.941-38.914 74.365-38.914 116.903 0 107.77 87.215 195 195 195 96.259-.001 172.886-67.903 190.653-153.253 11.826-56.805-.438-113.13-34.538-158.612 0 0-50.633-68.503-50.654-68.531-23.804-31.735-25.001-75.251-2.98-108.283 3.068-4.603 3.354-10.521.744-15.398s-7.694-7.923-13.225-7.923c-57.897 0-105 47.552-105 106v30c0 8.271-6.729 15-15 15s-15-6.729-15-15v-40.007c0-6.468-4.146-12.208-10.287-14.241zm25.287 99.248c24.813 0 45-20.187 45-45v-30c0-32.481 20.21-60.268 48.559-71.124-12.681 36.935-7.686 80.579 17.867 114.682 0 0 50.64 68.513 50.661 68.541 28.874 38.495 39.242 86.273 29.195 134.534-15.604 74.96-83.433 129.367-161.282 129.367-91.191 0-165-73.797-165-165 0-35.995 11.381-70.195 32.951-98.953l57.319-77.1c2.471 22.494 21.589 40.053 44.73 40.053z"/><circle cx="285.98" cy="377" r="15"/><path d="m217.659 389.481c6.863 4.575 16.185 2.763 20.801-4.161l60-90c4.595-6.893 2.732-16.206-4.161-20.801-6.892-4.595-16.205-2.733-20.801 4.16l-60 90c-4.595 6.893-2.732 16.206 4.161 20.802z"/><circle cx="225.98" cy="287" r="15"/><path d="m135.98 332c0 66.168 53.832 120 120 120s120-53.832 120-120-53.832-120-120-120-120 53.832-120 120zm120-90c49.626 0 90 40.374 90 90s-40.374 90-90 90-90-40.374-90-90 40.374-90 90-90z"/></g></svg>*/}
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
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <a href="/new-deal" className="flex bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="">Ajouter un deal</span>
                                    <PlusIcon className="h-6 w-6" />
                                </a>

                                <Menu as="div" className="ml-3 relative">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={user.img}
                                                        alt="img de profil"
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                {getMenuUser()}
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
