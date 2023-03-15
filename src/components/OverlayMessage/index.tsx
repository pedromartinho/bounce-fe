import './Loading.css';

interface OverlayMessageProps {
  message: string;
}

const OverlayMessage = ({message}: OverlayMessageProps) => {

  return (
    <div className='container'>
      <div className='message'>{message}</div>
    </div>
  );
};

export default OverlayMessage;