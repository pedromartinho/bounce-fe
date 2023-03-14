import './loading.css';

interface BlurMessageProps {
  message: string;
}

function BlurMessage(props: BlurMessageProps) {

  return (
    <div className="blur-message-container">
      <div className="blur-message">{props.message}</div>
    </div>
  );
}

export default BlurMessage;