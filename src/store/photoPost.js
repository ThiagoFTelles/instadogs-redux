import { PHOTO_POST } from '../api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'photoPost',
  fetchConfig: ({ formData, token }) => PHOTO_POST({ formData, token }),
});

export const photoPost = slice.asyncAction;
export const { resetState: resetPhotoPostState } = slice.actions;

export default slice.reducer;
