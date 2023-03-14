import './Loading.css';

interface LoadingProps {
  message: string;
}

const Loading = ({message}: LoadingProps) => {

  return (
    <div className='loading-container'>
      <div className='loading-message'>{message}</div>
    </div>
  );
};

export default Loading;