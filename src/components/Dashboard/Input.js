import React from 'react';
import { useScrollToBottom } from 'react-scroll-to-bottom';
 
const useStyle = () => {
    return {
        input: {
            width: '70%'
        },
        button: {
            width: '28%'
        }
    }
}

const Input = ({ handleSubmit }) => {

    const scrollToBottom = useScrollToBottom();
    const [content, setContent] = React.useState('');
    const style = useStyle()
    return (
        <form onSubmit={(e)=>handleSubmit(e, content, setContent)} id="message-form">
            <input 
                onChange={(e)=>setContent(e.target.value)} 
                name="message" 
                placeholder="Message" 
                required
                value={content}
                style={style.input}
            />
            <button style={style.button} onClick={ scrollToBottom } type="submit" className="btn btn-primary">Send</button>
        </form>
    );
}

export default Input;
