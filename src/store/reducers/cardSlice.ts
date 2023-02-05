import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { questionDefaultHistory } from '../../components/utils/constants';
import { IQuestion } from '../../components/utils/types';

export type CardData = {
  title: string;
  img: string;
  id?: number;
  date: string;
  desription: string;
  questionsArr: IQuestion[];
};

export type CardList = {
  list: CardData[];
};

export const initialState: CardList = {
  list: [
    {
      title: 'History quiz',
      img: 'https://i.ytimg.com/vi/s6yKBM3meeE/maxresdefault.jpg',
      date: '2022-09-06 03:00',
      id: 1,
      desription: `Belarus is mostly made up of forests, rivers and lakes and is mostly referred to as the rib of Europe. 
      The country has a very interesting history and people. Take up this quiz to test your knowledge of Belarus and its people.`,
      questionsArr: questionDefaultHistory,
    },
    {
      title: 'Programming quiz',
      img: 'https://obrmos.ru/kur/kur_dr/comp/img/pr.jpg',
      date: '2022-10-25 13:00',
      id: 2,
      desription: `It's a nice way to see how much you know, or don't know, about JavaScript.`,
      questionsArr: questionDefaultHistory,
    },
    {
      title: 'Art quiz',
      img: 'https://artinvestment.ru/lolo/yan/yan-main.jpg',
      date: '2023-01-06 23:00',
      id: 3,
      desription: `See What you know about art!`,
      questionsArr: questionDefaultHistory,
    },
    {
      title: 'Literature quiz',
      img: 'https://static.mk.ru/upload/entities/2019/04/11/23/articles/detailPicture/ec/ac/6d/01/306db442fae94a1476ddba3306b1f42f.jpg',
      date: '2023-02-01 03:00',
      id: 4,
      desription: `Take this quiz and learn more about Adult Easy - Literature`,
      questionsArr: questionDefaultHistory,
    },
    {
      title: 'Musical quiz',
      img: 'https://sadpanda.cn/wordpress/wp-content/uploads/2016/04/62c72e3218c9921f1ac0f28aba96f6c9wood-background-music-beat-wallchan-665381_1015x571.jpg',
      date: '2022-12-10 03:00',
      id: 5,
      desription: `Music is the soothing balm to a troubled soul. How well versed are you about music? 
      Are you a music fanatic? Take this quiz to test your knowledge about the intricacies of music. 
      It takes more than just a pretty voice to make a memorable melody! Prove yourself to be a musical genius by attempting 
      all the questions.`,
      questionsArr: questionDefaultHistory,
    },
  ],
};
export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCardReduser: (state, action: PayloadAction<CardData>) => {
      state.list.push(action.payload);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

console.log(initialState);
export const { addCardReduser } = cardSlice.actions;

export default cardSlice.reducer;
