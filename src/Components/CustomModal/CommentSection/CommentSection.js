import React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import style from './CommentSection.module.scss'

export default function CommentSection(props) {

  const {comment, changeComment ,callback} = props
  const addEmoji = (emoji) => () => changeComment(`${comment}${emoji}`);
  return (
    <>
    <Textarea
      placeholder="Type in here…"
      value={comment}
      onChange={(event) => changeComment(event.target.value)}
      minRows={2}
      maxRows={4}
      startDecorator={
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
            👍
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
            🏖
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <Typography level="body-xs" sx={{ ml: 'auto' }}>
          {comment.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
    <button className={style.btn} onClick={callback}>Send</button>
    </>
  );
}