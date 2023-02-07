import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import ImageIcon from '@mui/icons-material/Image';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { btnImgSX, TitleQuizPaper, TitleQuizPaperBtn } from './styles';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addCard } from '../../store/reducers/cardSlice';

interface ITitleQuiz {
  block: string[];
  setBlock: (arg0: string[]) => void;
}

export const TitleQuiz = (props: ITitleQuiz) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [desription, setDescription] = useState('');
  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    //dataQuiz.title = e.target.value;
    setTitle(e.target.value);
  }
  function handleDescription(e: ChangeEvent<HTMLInputElement>) {
    //dataQuiz.description = e.target.value;
    setDescription(e.target.value);
  }
  const addNewCard = () =>
    dispatch(
      addCard({
        title,
        img: '',
        date: new Date().toISOString(),
        desription,
        questionsArr: [],
        passed: false,
        passedOn: 0,
      })
    );
  const { block, setBlock } = props;
  function handleClick() {
    setBlock([...block, new Date().toString()]);
  }
  // // const dataQuiz = {
  // //   img: '',
  // //   title: '',
  // //   description: '',
  // //   questionArr: [],
  // // };
  // function handleConfigure() {
  //   // console.log('handleConfigure', dataQuiz);
  // }
  return (
    <Box sx={{ margin: '0 auto' }}>
      <Paper elevation={3} sx={TitleQuizPaper}>
        <Button sx={btnImgSX} component="label">
          <ImageIcon />
          <Typography>{SERVICE_MESSAGES.addImage}</Typography>
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Box>
          <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.title}</Typography>
          <TextField
            multiline
            rows={3}
            placeholder={SERVICE_MESSAGES.writeSmth}
            sx={{ width: '100%' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleTitle(e)}
          />
        </Box>
        <Box>
          <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.description}</Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={2}
            placeholder={SERVICE_MESSAGES.writeSmth}
            sx={{ width: '100%' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleDescription(e)}
          />
        </Box>
        <Button sx={TitleQuizPaperBtn}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }} onClick={handleClick}>
            {SERVICE_MESSAGES.addQBlock}
          </Typography>
        </Button>
        <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }} onClick={addNewCard}>
          {SERVICE_MESSAGES.configure}
        </Button>
      </Paper>
    </Box>
  );
};
