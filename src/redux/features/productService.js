import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk("product/get", async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/getproducts`);
        return response.data;  
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const addProduct = createAsyncThunk("product/add", async (product) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/product`, product);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const editProduct = createAsyncThunk("product/edit", async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/updateproduct/${data.id}`, data.formData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/deleteproduct`, { id })
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});