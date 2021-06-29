import './styles.css';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import Plugin from './Plugin';

function dispatch(pluginMessage) {
    parent.postMessage({pluginMessage}, '*');
}

window.onload = () => {
    ReactDOM.render(
        <StrictMode>
            <Plugin dispatch={dispatch} />
        </StrictMode>,
        document.getElementById('root')
    );
}
