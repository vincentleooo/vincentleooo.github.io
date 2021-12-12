import * as React from 'react'
import { Link } from 'gatsby'
import { 
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
  footer,
  active,
  link,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <div>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" activeClassName={active} className={link} >Home</Link></li>
            <li className={navLinkItem}><Link to="/about" activeClassName={active} className={link} >About</Link></li>
            <li className={navLinkItem}><Link to="https://github.com/vincentleooo" activeClassName={active} className={link} partiallyActive={true}>GitHub</Link></li>
            <li className={navLinkItem}><Link to="https://vinleonardo.com" activeClassName={active} className={link} partiallyActive={true}>Main Page</Link></li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
      
      <footer className={footer}>
        <p>
          Copyright &copy; 2021 by Vincent Leonardo. All
          rights reserved.
        </p>
      </footer>
      
    </div>
  )
}

export default Layout