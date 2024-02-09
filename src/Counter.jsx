import { useStateValue } from './State';

export const Counter = () => {
  const [, dispatch] = useStateValue();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'updateCount',
            diff: -1,
          })
        }
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'updateCount',
            diff: 1,
          })
        }
      >
        +
      </button>
    </div>
  );
};
