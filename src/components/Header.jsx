import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom'; // Correct import for NavLink
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Header = () => {
  const [color, setColor] = useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="headerbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                  <h2 className="logo gradinet_color">LOGO</h2>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 header_middle align-items-center">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? 'nav-link active-link' : 'nav-link'
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/services"
                        className={({ isActive }) =>
                          isActive ? 'nav-link active-link' : 'nav-link'
                        }
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? 'nav-link active-link' : 'nav-link'
                        }
                      >
                        About Me
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                          isActive ? 'nav-link active-link' : 'nav-link'
                        }
                      >
                        Portfolio
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contactme"
                        className={({ isActive }) =>
                          isActive ? 'nav-link active-link' : 'nav-link'
                        }
                      >
                        Contact Me
                      </NavLink>
                    </li>
                    <li className="nav-item">
                    <FormControl fullWidth>
  <InputLabel 
    id="dropdown-label" 
    sx={{ color: '#959595' }}
  >
    Color
  </InputLabel>
  <Select
    labelId="dropdown-label"
    id="dropdown"
    label="Color"
    onChange={handleChange}
    sx={{ color: '#959595' }} // This changes the text color inside the dropdown to white
  >
    <MenuItem value={10}>Red</MenuItem>
    <MenuItem value={20}>Orange</MenuItem>
    <MenuItem value={30}>Green</MenuItem>
  </Select>
</FormControl>

                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <button className="button_primary" type="submit">
                      Hire Me
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
