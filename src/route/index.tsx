import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Theme, WithStyles, withStyles } from '@material-ui/core';
import { history } from '../store';
import { ConnectedRouter } from 'connected-react-router';
import HomePage from './HomePage';
import PeoplePage from './PeoplePage';
import logo from '../logo.svg';

const headerHeight: string = '48px';
const footerHeight: string = '40px';
const footerPadding: string = '10px';

const styles = (theme: Theme) => ({
    header: {
        height: headerHeight,
    },
    logo: {
        height: 'calc(100% - 1em)',
        margin: '0.5em',
        marginRight: '2em',
    },
    main: {
        height: `calc(100vh - ${headerHeight} - ${footerHeight})`,
    },
    footer: {
        height: `calc(${footerHeight} - ${footerPadding})`,
        padding: footerPadding,
        'text-align': 'center',
    },
});

interface IProps extends WithStyles<typeof styles> {}

const AppRoute: React.FC<IProps> = ({
    classes,
}) => {
    return (
        <ConnectedRouter history={history}>
            <AppBar position="static"
                    className={classes.header}>
                <Toolbar variant="dense">
                    <img className={classes.logo} 
                            alt="App Logo"
                            src={logo} />
                    <MenuItem component={RouterLink}
                                to="/people">
                        People
                    </MenuItem>
                </Toolbar>
            </AppBar>
            <main className={classes.main}>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/people' component={PeoplePage} />
            </main>
            <footer className={classes.footer}>
                &copy; New App Inc. {new Date().getFullYear()} - {process.env.NODE_ENV}
            </footer>
        </ConnectedRouter>
    );
}

export default withStyles(styles)(AppRoute);