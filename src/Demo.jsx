import { useStateValue } from './State';

export const Demo = () => {
  const [state] = useStateValue();

  return <div style={{ background: state.color }}>Count: {state.count}</div>;
};
