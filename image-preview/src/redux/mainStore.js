const initialState = {
    theme:'red',
    information:'This wine is so goodThis wine is so good  This wine is so good  This wine is so good  This wine is so good  This wine is so good   This wine is so good   This wine is so good   This wine is so good  This wine is so good  This wine is so good',
    title:'Red Wine',
    uploadType:'',
    uploadUrl:'',
    selectedStream:''
  };
  
  export default function mainStore(state = initialState, action) {    
    switch (action.type) {
      case "CHANGE_THEME": {        
        return {
          ...state,
          theme: action.payload
        };
      }
      case "CHANGE_TITLE": {        
        return {
          ...state,
          title: action.payload
        };
      }
      case "UPDATE_UPLOAD_TYPE": {        
        return {
          ...state,
          uploadType: action.payload
        };
      }
      case "UPDATE_SELECTED_STREAM": {        
        return {
          ...state,
          selectedStream: action.payload
        };
      }
      case "UPDATE_UPLOAD_URL": {        
        return {
          ...state,
          uploadUrl: action.payload
        };
      }
      case "UPDATE_INFORMATION": {        
        return {
          ...state,
          information: action.payload
        };
      }
      default:
        return state;
    }
  }
  