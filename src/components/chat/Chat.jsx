import { useState } from "react";
import "./Chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {

    const [open,setOpen] = useState(false);
    const [text,setText] = useState("");

    const handleEmoji = (e) =>{
        setText( (prev) => prev + e.emoji);
        setOpen(false);
    }

    return(
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />

                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis voluptas iste similique error, delectus magnam ratione consequatur, nobis ex doloribus minus assumenda molestias itaque vel earum, laudantium at necessitatibus.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis voluptas iste similique error, delectus magnam ratione consequatur, nobis ex doloribus minus assumenda molestias itaque vel earum, laudantium at necessitatibus.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis voluptas iste similique error, delectus magnam ratione consequatur, nobis ex doloribus minus assumenda molestias itaque vel earum, laudantium at necessitatibus.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis voluptas iste similique error, delectus magnam ratione consequatur, nobis ex doloribus minus assumenda molestias itaque vel earum, laudantium at necessitatibus.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis voluptas iste similique error, delectus magnam ratione consequatur, nobis ex doloribus minus assumenda molestias itaque vel earum, laudantium at necessitatibus.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quis voluptas iste similique error, delectus magnam ratione consequatur, nobis ex doloribus minus assumenda molestias itaque vel earum, laudantium at necessitatibus.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                    type="text" 
                    placeholder="Start a chat..." 
                    value={text}
                    onChange={e=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" 
                    onClick={()=> setOpen((prev) => !prev)}/>
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
};

export default Chat;