import React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import logo from '../logo.svg';
import { ThunkDispatch } from 'redux-thunk';
import { push } from 'connected-react-router';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        height: '100%',
    },
});

interface IProps extends WithStyles<typeof styles> {
    push: (url: string) => void;
}

const HomePage: React.FC<IProps> = ({
    classes,
    push,
}) => {
    return (
        <div className={classes.root}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Button onClick={() => push('/people')}>Go to People</Button>
            </header>
        </div>
    );
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        push: (url: string) => dispatch(push(url)),
    };
};

export default withStyles(styles)(connect(
    undefined,
    mapDispatchToProps,
)(HomePage));