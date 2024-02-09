import { useStateValue } from './State';

export const ThemeSwitcher = () => {
  const [, dispatch] = useStateValue();

  const setColor = (color) => {
    dispatch({
      type: 'changeTheme',
      newColor: color,
    });
  };

  return (
    <div>
      <button onClick={() => setColor('lightBlue')}>Blue</button>
      <button onClick={() => setColor('tomato')}>Red</button>
      <button onClick={() => setColor('yellow')}>Yellow</button>
    </div>
  );
};
