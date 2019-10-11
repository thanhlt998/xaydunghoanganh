export default function(state = 'Trang chủ', action) {
    switch (action.type) {
      case "PAGE_SELECTED":
        return action.payload.description;
    }
  
    return state;
  }