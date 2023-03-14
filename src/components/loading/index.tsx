import './loading.css';

interface LoadingProps {
  message: string;
}

function Loading(props: LoadingProps) {

  return (
    <div className="loading-container">
      <div className="loading-message">{props.message}</div>
    </div>
  );
}

export default Loading;