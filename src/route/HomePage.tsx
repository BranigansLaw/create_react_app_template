import React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import logo from '../logo.svg';

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        height: '100%',
    },
});

interface IProps extends WithStyles<typeof styles> {
}

const HomePage: React.FC<IProps> = ({
    classes,
}) => {
    return (
        <div className={classes.root}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}
  
export default withStyles(styles)(HomePage);