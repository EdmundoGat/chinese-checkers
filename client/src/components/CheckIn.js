import { useState } from "react";
import RemoteBoard from './RemoteBoard'

function CheckIn(){

    const [room, setRoom] = useState('');

    const [user, setUser] = useState('');

    const [inputRoom, setInputRoom] = useState('');

    function dec2hex (dec) {
        return dec.toString(16).padStart(2, "0")
    }  

    function generateId (len) {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, dec2hex).join('')
    }

    return(
        room === '' ?
            <div>
                <button
                    onClick = {() => {
                        setRoom(generateId(15));
                        setUser(generateId(10));
                    }}
                >
                    Create new room
                </button>
                <div>
                    <input
                        onChange={event => 
                            setInputRoom(event.target.value)
                        }
                    >
                    </input>
                    <button
                        onClick = {() => {
                            if(inputRoom !== ''){
                                setRoom(inputRoom);
                                setUser(generateId(10));
                            }
                        }}
                    >
                        Join
                    </button>
                </div>
            </div>
        :
        <div>
            <RemoteBoard
                room = {room}
                user = {user}
            />
        </div>
    );
}

export default CheckIn;