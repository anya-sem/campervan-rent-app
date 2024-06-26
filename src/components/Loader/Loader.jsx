import { Rings } from 'react-loader-spinner';

export default function Loader() {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <div style={style}>
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#E44848"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
