//reducer  
const store = {  
    text: 'Hello'  
}
const reducer = (state = store, action) => {  
    switch (action.type) {  
        case 'CHANGE_TEXT':  
            return {  
                text: state.text=='Hello' ? 'world':'Hello'  
            }  
        case 'BUTTON_CLICK':  
            return {  
                text: 'Hello world'  
            }  
        default:  
            return store;  
    }  
}
export default reducer