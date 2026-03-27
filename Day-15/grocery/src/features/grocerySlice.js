import {createSlice} from '@reduxjs/toolkit'



const grocerySlice = createSlice({
  name: "grocery",
  initialState: {
    items: []
  },
  reducers: 
  {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        name: action.payload
      });
    },

    deleteItem: (state, action) => 
        {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    editItem: (state, action) => {
      const { id, newName } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.name = newName;
      }
    }
  }
});

export const { addItem, deleteItem, editItem } = grocerySlice.actions;
export default grocerySlice.reducer;