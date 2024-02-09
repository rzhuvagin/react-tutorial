import './App.css';
import { StateProvider } from './State';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Demo } from './Demo';
import { Counter } from './Counter';

const App = () => {
  const initialState = {
    color: 'lightGreen',
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          color: action.newColor,
        };
      case 'updateCount':
        return {
          ...state,
          count: state.count + action.diff,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Demo></Demo>
      <ThemeSwitcher></ThemeSwitcher>
      <Counter></Counter>
    </StateProvider>
  );
};

export default App;
