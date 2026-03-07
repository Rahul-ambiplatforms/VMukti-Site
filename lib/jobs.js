import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
// const API_URL = 'https://vmukti.com/backend/api';

export const getJobs = async (page = 1, limit = 10, status = 'OPEN') => {
  try {
    const response = await axios.get(`${API_URL}/jobs`, {
      params: { page, limit, status }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error.response?.data || error.message;
  }
};

export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error.response?.data || error.message;
  }
};
