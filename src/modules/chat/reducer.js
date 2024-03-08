
// PART 1: State Type and Initial State Value

export const userSlots = {
  pink: true,
  red: true,
  blue: true,
  purple: true,
  green: true,
  orange: true,
};


export const initialChatState = {
  userSlots,
  messages: [],
};



export default (state = initialChatState, action) => {
  // User Joins
  if (action.type === 'join') {
    return {
      ...state,
      userSlots: {
        ...state.userSlots,
        [action.payload.userSlot]: false,
      },
    };
  }
  // User Leaves
  else if (action.type === 'leave') {
    return {
      ...state,
      userSlots: {
        ...state.userSlots,
        [action.payload.userSlot]: true,
      },
    };
  }
  // Message gets submitted
  else if (action.type === 'submit') {
    const nextMsg = action.payload;

    return {
      ...state,
      messages: [...state.messages, nextMsg],
    };
  }

  return state;
};
