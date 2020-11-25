import React, {  useState } from 'react'
import { gif, send, smile } from '../../SVG/SVG'
import Picker,{SKIN_TONE_DARK} from 'emoji-picker-react';

const UserMedia = () => {
    const [emojies,setEmojies]=useState(false);
    const [text,setText]=useState({text:""});
    const onChangeText=(e)=>{
        const val=e.target.value
          setText({text:val})
    }
    const onChange=(e,emoji)=>{
        const val=emoji.emoji
          setText({text: text .text+ val})
    }
    return (
        <div className="fixed bottom-2  rounded-2xl flex justify-center opacity-90 bg-white" style={{
            width:'600px',
            height:'50px'
        }}>
            <form className="flex pb-2 relative">
            <input style={{border:'1px solid #333'}} 
            type="text" 
            value={text.text}
            onChange={onChangeText}
            className=" rounded text-black mt-3 p-2 outline-none" 
            placeholder="Send Message"/>
                <label  className="mt-4 ml-2">{send}</label>
            </form>
            <label className="mt-4 ml-5">{gif}</label>
            <label onClick={()=>setEmojies(!emojies)} className="mt-4 ml-5">{smile}</label>
          {emojies !==false &&  <div className="absolute bottom-10 right-0">
            <Picker   onEmojiClick={onChange} skinTone={SKIN_TONE_DARK} />
            </div>}
        </div>
    )
}

export default UserMedia
