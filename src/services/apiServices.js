const axios = require('axios');

export async function getItems() {
  try {
    const response = await axios.get('http://localhost:3000/items');
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getItem(id) {
  try {
    const response = await axios.get(`http://localhost:3000/items/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function postItem(content) {
  try {
    const res = await axios.post('http://localhost:3000/items', {
      id: Math.random() * 1000,
      timeStamp: Date.now(),
      content: content,
      completed: false,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteItem(id) {
  try {
    const res = await axios.delete(`http://localhost:3000/items/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function editItem(id, updatedItem) {
  try {
    const res = await axios.put(
      `http://localhost:3000/items/${id}`,
      updatedItem
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}
