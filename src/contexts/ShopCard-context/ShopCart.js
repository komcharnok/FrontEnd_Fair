import { create } from 'zustand';
import axios from 'axios';

const useShopCart = create((set, get) => ({
  orderUser: [],

  getOrderId: async () => {
    try {
      const rs = await axios.get('http://localhost:8080/order', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      set({ orderUser: rs.data });
    } catch (err) {
      console.log('error get orderUser_id', err);
    }
  },

  hdlDelete: async (id) => {
    try {
      await axios.delete(`http://localhost:8080/order/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      set((state) => ({
        orderUser: state.orderUser.filter((order) => order.order_id !== id),
      }));
      getOrderId();
    } catch (err) {
      console.log('error deleting order', err);
    }
  },

  updateQuantity: async (productId, newQuantity) => {
    try {
      await axios.put(`http://localhost:8080/order/${productId}`, { quantity: newQuantity }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      set((state) => ({
        orderUser: state.orderUser.map((item) =>
          item.product_id === productId ? { ...item, quantity: newQuantity } : item
        ),
      }));
    } catch (err) {
      console.log('error updating quantity', err);
    }
  },

  calculateTotalPrice: () => {
    const { orderUser } = get();
    return orderUser.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
  },
}));

export { useShopCart };
