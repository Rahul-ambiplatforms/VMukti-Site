import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get all blogs with pagination
export const getBlogs = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/blogs`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get a single blog by ID
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};