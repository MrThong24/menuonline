import { notification } from 'antd';
import { RcFile } from 'antd/es/upload';
import { showError } from 'src/shared/utils/error';
import http from 'src/shared/utils/http';
import { uploadFileFn } from 'src/shared/utils/uploadFile';
import { ProfilePayload, ProfileStorePayload } from 'src/validate/userSchema';
import { create } from 'zustand';
import useAuthStore from './authStore';
import { Bank } from 'src/types/user.type';

interface ProfileStore {
  isLoading: boolean;
  banks: Bank[];
  updateProfile: ( payload: ProfilePayload, avatar: RcFile | string ) => Promise<void>;
  updateProfileStore: (id: string, payload: ProfileStorePayload, thumbnail: RcFile | string ) => Promise<void>;
  getBanks: () => Promise<void>;
}

const useProfileStore = create<ProfileStore>((set) => ({
  isLoading: false,
  banks:[],

  updateProfile: async ( data: ProfilePayload, avatar: RcFile | string ) => {
    set({ isLoading: true });
    try {
      let resFile;
      if (avatar && typeof avatar !== 'string') {
        resFile = await uploadFileFn(avatar as RcFile);
        avatar = resFile.link;
      }
      const response = await http.put(`/user/my`, { ...data, avatar });
      await useAuthStore.getState().getCurrentUser()
      set({ isLoading: false });
      notification.success({
        message: 'Chỉnh sửa thông tin tài khoản thành công'
      });
      return response.data;
    } catch (error) {
      showError({ error, title: 'Chỉnh sửa thông tin tài khoản thất bại' });
      set({ isLoading: false });
      throw error;
    }
  },

  updateProfileStore: async (id: string, data: ProfileStorePayload, thumbnail: RcFile | string ) => {
    set({ isLoading: true });
    try {
      let resFile;
      if (thumbnail && typeof thumbnail !== 'string') {
        resFile = await uploadFileFn(thumbnail as RcFile);
        thumbnail = resFile.link;
      }
      const response = await http.put(`/store/${id}`, { ...data, thumbnail });
      await useAuthStore.getState().getCurrentUser()
      set({ isLoading: false });
      notification.success({
        message: 'Chỉnh sửa thông tin cửa hàng thành công'
      });
      return response.data;
    } catch (error) {
      showError({ error, title: 'Chỉnh sửa thông tin cửa hàng thất bại' });
      set({ isLoading: false });
      throw error;
    }
  },

  getBanks: async () => {
    set({ isLoading: true });
    try {
      const response = await http.get('/qr-code-payment/bank');
      set({ banks: response.data, isLoading: false });
    } catch (error) {
      showError({ error, title: 'Lấy thông tin thất bại' });
      set({ isLoading: false });
    }
  }
}));

export default useProfileStore;
