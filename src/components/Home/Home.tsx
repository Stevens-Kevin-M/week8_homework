import React from 'react';
// New Styles Code
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ship_image from '../../assets/images/wp1982908.jpeg';
import { Link } from 'react-router-dom';
import {AuthCheck} from 'reactfire';


interface Props{
    title: string
}

//New Styling Code
const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a:{
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: 'yellow'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'yellow'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ship_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text: {
        fontFamily: "Brush Script MT, Brush Script Std, cursive",
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'Yellow',
        fontSize: '30px'
    }

});


export const Home = ( props:Props ) => {
    // Create our classes variable
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={`${classes.logo}`}>
                        <Link to="/" className={`${classes.logo_a} ${classes.logo_navigation}`}>{props.title}</Link>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        {/* START OF NEW ADDITION */}
                        <AuthCheck fallback={
                        <li>
                        <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                        </li>
                        }>
                        <li>
                        <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign Out</Link>
                        </li>
                        </AuthCheck>
										{/* END OF NEW ADDITION */}
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <br/>
                    <Link to='/dashboard'>
                        <Button color='primary' variant="contained">Explore Ships</Button>
                    </Link>
                    
                </div>
            </main>
        </div>
    )
}