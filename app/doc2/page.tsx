'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import { green, grey, red, yellow } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import type { NextPage } from 'next';
import { useState } from 'react';

import { ThemeToggle } from '../../src/common/components/ThemeToggle';
import { DOC2_CARDS } from '../../src/routes/doc2/constants';

function getRandomInt(y: number): number {
  return Math.floor(Math.random() * (y + 1)); // 0 to y inclusive
}

const Doc2: NextPage = () => {
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [docCards, setDocCards] = useState(DOC2_CARDS);
  const currentCard = docCards[currentNum];
  return (
    <>
      <ThemeToggle />
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
        <Card
          variant="outlined"
          sx={(theme) => ({
            backgroundColor: theme.palette.grey[100],
            width: '350px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            ...theme.applyStyles('dark', {
              backgroundColor: theme.palette.grey[800],
            }),
          })}>
          <CardContent>
            <Box
              sx={(theme) => {
                return {
                  fontSize: theme.typography.h4,
                };
              }}>
              {currentCard.question}
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={(theme) => ({
          fontSize: theme.typography.subtitle2,
          color: theme.palette.grey[400],
          textAlign: 'center',
          marginTop: '10px',
        })}>
        {currentCard.level} || {currentCard.author}
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          marginTop: '12px',
        })}>
        <FormGroup
          sx={(theme) => ({
            flexDirection: 'row',
          })}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: green[900],
                  '&.Mui-checked': {
                    color: green[600],
                  },
                }}
              />
            }
            label="Level 1"
            sx={{ color: green[900] }}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: yellow[900],
                  '&.Mui-checked': {
                    color: yellow[600],
                  },
                }}
              />
            }
            label="Level 2"
            sx={{ color: yellow[900] }}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: red[900],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
              />
            }
            label="Level 3"
            sx={{ color: red[900] }}
          />
        </FormGroup>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
        })}>
        <Button
          variant="outlined"
          onClick={() => {
            setCurrentNum(getRandomInt(1));
          }}
          sx={(theme) => ({
            marginTop: '12px',
          })}>
          Get Question
        </Button>
      </Box>
    </>
  );
};

export default Doc2;
