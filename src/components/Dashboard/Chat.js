import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useSelector } from 'react-redux';

import SendMessage from './SendMessage';


const useStyles = () => {
    return {
        row: { height: '100%' },
        chat: {
            display: 'flex',
            width: '100%'
        },
        main: {
            width: '100%',
            maxHeight: '100vh'
        },
        messages: {
            margin: '16px',
            height: '80%'
        },
        pullRight: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        pullLeft: {
            display: 'flex',
            justifyContent: 'flex-start'
        }
    }
}

const Chat = () => {
    const styles = useStyles();
    const chatState = useSelector(state=>state.chatState)
    const user = useSelector((state)=>(state.userState.user))
    let id;
    user.type==='client' ? id = user.linkId : id = user.id
    const messages = chatState.messages;
    return (
        <div className="col-md-8">
            <div className="row" style={styles.row} >
                <div style={styles.chat}>
                    <div style={styles.main}>
                        {messages === '' ?
                        <h2>Say hi, to begin with conversation</h2>
                        :
                        <ScrollToBottom style={styles.messages}>
                            {
                                messages.map((message, i)=>(
                                    <div key={i} style={message.userId===id ? styles.pullRight: styles.pullLeft}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{message.content}</h5>
                                                <h6 className="card-link">{message.createdAt.split('T')[1]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </ScrollToBottom>
                    }
                    {
                        !chatState.chat ? 
                        <div>Select User</div>:
                        <SendMessage userId={id} chatState={chatState} />
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
