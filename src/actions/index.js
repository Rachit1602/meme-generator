import {username, password} from './secrets'
export const RECEIVE_MEMES='RECEIVE_MEMES';
export const NEW_MEME='NEW_MEME';

//regular action creator
export function receiveMemes(json){
    //because we are passing json into our action creator from the api with memes stroed in json.data 
    const {memes}=json.data;
    return {
        type:RECEIVE_MEMES,
        memes
    }
}

//fetching from api fn that return response.json
function fetchMemesJson(){
    return fetch(`https://api.imgflip.com/get_memes`)
    .then(response=>response.json());
}

//it allows us to return a inner fn that has a dispatch fn that allows us to dispatch the receiveMemes at any moment of time and handle async manner
export function fetchMemes(){
    return function(dispatch){
        return fetchMemesJson().then(json=>dispatch(receiveMemes(json)));
    }
}

export function newMeme(meme){
    return{
        type:NEW_MEME,
        meme
    }
}
//params will store the object we pass in the memeItem
export function postMemeJson(params){
    params["username"]=username;
    params["password"]=password;

    const bodyParams=Object.keys(params).map(key=>{
        return encodeURIComponent(key)+ '=' + encodeURIComponent(params[key]);
    }).join('&');
    //console.log(bodyParams);

    return fetch('https://api.imgflip.com/caption_image',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());
}

export function createMeme(new_meme_object){
    return function(dispatch){
        return postMemeJson(new_meme_object)
        .then(json=>dispatch(newMeme(json)));
    }
}