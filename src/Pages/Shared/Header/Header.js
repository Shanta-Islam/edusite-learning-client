import { Avatar, Button, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container mx-auto my-2">
            
            <Navbar fluid={true} rounded={true}>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img
                            src="https://i.postimg.cc/rp6z5qcP/image.png"
                            className="mr-1 h-10 sm:h-9 mt-1"
                            alt="edusite"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            EduSite
                        </span>
                    </Navbar.Brand>
                </NavLink>
                <div className="flex md:order-2 mt-1 md:mt-0 items-center">
                    <div className='md:mr-2 flex'>
                        <div className=''>
                            <Flowbite >
                                <DarkThemeToggle className='border' />
                            </Flowbite>
                        </div>
                    </div>
                    <div className='hidden md:flex'>
                        <div className=''>
                            <Button.Group>
                                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-white font-bold bg-blue-600 rounded-lg mr-1' : 'hover:text-blue-800 mr-1'}>
                                    <Button className='border' color="blue">
                                        <span className='dark:text-white'>Login</span>
                                    </Button>
                                </NavLink>
                                <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-white font-bold bg-blue-600 rounded-lg mr-2' : 'hover:text-blue-800 mr-2'}>
                                    <Button className='border' color="blue">
                                        <span className='dark:text-white'>Signup</span>
                                    </Button>
                                </NavLink>
                            </Button.Group>
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <div className='mr-2'>
                                <div className=''>
                                    <Dropdown
                                        arrowIcon={false}
                                        inline={true}
                                        label={<Avatar alt="User settings" img='' rounded={true} />} >
                                        <Dropdown.Header>
                                            <span className="block text-sm">
                                                name
                                            </span>
                                            <span className="block truncate text-sm font-medium">
                                                email
                                            </span>
                                        </Dropdown.Header>
                                        <Link to="/profile">
                                            <Dropdown.Item>
                                                Profile Setting
                                            </Dropdown.Item>
                                        </Link>
                                        <Link to="/resetpassword">
                                            <Dropdown.Item>
                                                Reset Password
                                            </Dropdown.Item>
                                        </Link>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>
                                            <button>Sign Out</button>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </div>
                            <Navbar.Toggle className='border' />     
                        </div>
                    </div>
                </div>   

                <Navbar.Collapse>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/home">
                            Home
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/courses" >
                            Courses
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/blog" >
                            Blog
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/faq" >
                            FAQ
                        </NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;