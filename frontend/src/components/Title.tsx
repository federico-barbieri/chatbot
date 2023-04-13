import {useState} from 'react'
import axios from "axios"

type Props = {
    setMessages: any;
};


function Title({ setMessages }: Props) {
    const [isResetting, setIsResetting] = useState(false)

    // reset the conversation 
    const resetConversation = async () => {
        setIsResetting(true);

        await axios.get("http://localhost:8000/reset").then((res) => {
            if(res.status == 200){
                setMessages([])
            } else{
                console.error("there was an error with the API request to backend")
            } 

        }).catch((err) => {
            console.error(err.message)
        })

        setIsResetting(false);
    }


  return (
        <div className='flex justify-between items-center w-full p-4 bg-gray-900 text-white font-bold shadow'>
            <div className='italic'>Rachel GPT</div>
            <button onClick={resetConversation} 
            className={
                'transition-all duration-300 text-blue-300 hover:text-pink-500 ' + 
                (isResetting && "animate-pulse")
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
            </button>
        </div>
  ) 
  
}

export default Title