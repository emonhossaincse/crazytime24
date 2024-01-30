import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faI, faPaperPlane} from '@fortawesome/free-solid-svg-icons';


function Chat(){
    const closeChat = () => {
        const chatElement = document.querySelector('.chat');
        chatElement.classList.remove('open');
    };
    return(
        <div className="chat">
            <div className="chat-header">
                <h3>Chat</h3>
                <div className="chat-top-action">
                <span onClick={closeChat} className="chat-close">  <FontAwesomeIcon icon={faXmark} /> </span>
                
                </div>
            </div>
            <div className="chat-body">
                <div className="chat-messeges">
                <div className="chat-user">
                    <img src="/assets/media/avatar/01.avif"/>
                </div>
                <div className="messeges-box">
                    <span>Emoncse</span>
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                </div>
                </div>
                <div className="chat-messeges">
                <div className="chat-user">
                    <img src="/assets/media/avatar/01.avif"/>
                </div>
                <div className="messeges-box">
                    <span>Emoncse</span>
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                </div>
                </div>
                <div className="chat-messeges">
                <div className="chat-user">
                    <img src="/assets/media/avatar/01.avif"/>
                </div>
                <div className="messeges-box">
                    <span>Emoncse</span>
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                </div>
                </div>
                <div className="chat-messeges">
                <div className="chat-user">
                    <img src="/assets/media/avatar/01.avif"/>
                </div>
                <div className="messeges-box">
                    <span>Emoncse</span>
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                </div>
                </div>
                <div className="chat-messeges">
                <div className="chat-user">
                    <img src="/assets/media/avatar/01.avif"/>
                </div>
                <div className="messeges-box">
                    <span>Emoncse</span>
                    <p>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                </div>
                </div>
            </div>
            <div className="chat-footer">
                <div className="sent-messeges-box">
                    <input placeholder="Your Message"/>
                </div>
                <div className="send-message">
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
    );
}
export default Chat;