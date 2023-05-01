import css from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'alboms'}>Alboms</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {NavBar};