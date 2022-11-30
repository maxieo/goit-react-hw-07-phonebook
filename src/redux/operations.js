import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://6385414e875ca3273d3975f0.mockapi.io/`

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => { 
    try {
      const response = await axios.get('/contact')
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkApi) => { 
    try {
      const response = await axios.get('/contact', { name, phone })
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => { 
    try {
      const response = await axios.get(`/contacts/${contactId}`)
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)