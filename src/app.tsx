import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

import './app.scss'

export type AppProps = {
    name: string;
}

// type AppState = {
//     name: string;
// }

// export class App extends Component<AppProps, AppState> {
//     constructor(props: AppProps) {
//         super(props);
//         this.state = { name: props.name }
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             const state = {
//                 ...this.state,
//                 name: "Preact's componentDidMount worked as expected"
//             };
//             this.setState(state);
//         }, 2000);
//     }

//     render (props: AppProps, state: AppState) {
//         return <h1>props: {props.name} state: {state.name}</h1>
//     }
// }

export const App: FunctionalComponent<AppProps> = props => {
    const [name, setName] = useState(props.name);
    setTimeout(() => {setName("Preact's componentDidMount worked as expected, with HOOKS!")}, 2000);
    return <h1 class="container">props: {props.name} state: {name}</h1>
}
