import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../utils/api';

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
        const response = await api({
            method: "post",
            url: "/product",
            data: product,
            headers: { 
                Authorization: "Bearer " + sessionStorage.getItem("adminToken") ,
                "Content-Type": "application/json",
              },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const editProduct = createAsyncThunk("product/edit", async (data) => {
    try {
        const response = await api({
            method: "post",
            url: `/product/updateproduct/${data.id}`,
            data: data.formData,
            headers: { 
                Authorization: "Bearer " + sessionStorage.getItem("adminToken") ,
                "Content-Type": "application/json",
              },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
    try {
        const response = await api({
            method: "post",
            url: "/product/deleteproduct",
            data: { id },
            headers: { 
                Authorization: "Bearer " + sessionStorage.getItem("adminToken") ,
                "Content-Type": "application/json",
              },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});