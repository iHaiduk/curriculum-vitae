import { render } from 'preact';

import 'semantic-ui-css/components/reset.min.css'
import 'semantic-ui-css/components/container.min.css'

import './main.css'

import App from './App.tsx'

render(<App />, document.getElementById('root')!);
