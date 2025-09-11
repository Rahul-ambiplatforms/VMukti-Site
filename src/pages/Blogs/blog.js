// frontend/src/api/blog.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get all blogs with pagination, sorting, and searching
export const getBlogs = async (page = 1, limit = 6, searchTerm = "", sortOrder = "latest", status = "published") => {
  try {
    // Construct the parameters object
    const params = { page, limit };
    
    // Only add search and sort if they have a value
    if (searchTerm) {
      params.search = searchTerm;
    }
    if (sortOrder) {
      params.sort = sortOrder;
    }
    if (status) {
      params.status = status;
    }

    const response = await axios.get(`${API_URL}/blogs`, { params });
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