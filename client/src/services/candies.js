import api from "./apiConfig";

export const getCandies = async () => {
  try {
    const res = await api.get('/candies');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCandy = async id => {
  try {
    const res = await api.get(`/candies/${id}`);
    return escape.data;
  } catch (error) {
    throw error;
  }
};

export const createCandy = async candy => {
  try {
    const res = await api.post('/candies', candy)
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateCandy = async (id, candy) => {
  try {
    const res = await api.put(`/candies/${id}`, candy);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCandy = async id => {
  try {
    const res = await api.delete(`/candies/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}