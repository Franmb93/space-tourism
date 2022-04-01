import './TextBody.scss';


function TextBody(props) {
    return (
        
        <article className="body-text-container">
            <h2 className='pre-title'>{props.info.pretitle}</h2>
            <h1 className='title'>{props.info.title}</h1>
            <p className='text-content'>{props.info.text}</p>
        </article>
    );
  }
  
  export default TextBody;