'use client';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { type Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import { green, red, yellow } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { ThemeToggle } from '../../src/common/components/ThemeToggle';
import { useCardDataStorage } from '../../src/common/hooks/storage';
import { DOC2_CARDS } from '../../src/routes/doc2/constants';
import { Socials } from './socials';

function getRandomInt(y: number): number {
  return Math.floor(Math.random() * (y + 1)); // 0 to y inclusive
}

function getCardSharedSx(theme: Theme): any {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[100],
    boxShadow: 3,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[900],
      boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.1)',
    }),
  };
}

const CARD_WIDTH = 350;

function getCardContainerSharedSx() {
  return {
    width: `${CARD_WIDTH}px`,
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  };
}

const Doc2: NextPage = () => {
  const { seenCardIds, addSeenCardId, removeSeenCardId, deleteAllSeenCardIds } =
    useCardDataStorage();

  const [authorShowSkeleton, setAuthorShowSkeleton] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [checkedLevels, setCheckedLevels] = useState({
    1: false,
    2: false,
    3: false,
  });

  const [currentCard, setCurrentCard] = useState<(typeof DOC2_CARDS)[0] | null>(
    null
  );

  const checkboxLevelOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, { level }: { level: number }) => {
      setCheckedLevels((prev) => {
        const newCheckedLevels = {
          ...prev,
          [level]: e.target.checked,
        };
        // If nothing is checked, disable the button
        const isAnythingChecked = Object.values(newCheckedLevels).some(
          (x) => x
        );
        setIsButtonDisabled(!isAnythingChecked);
        return newCheckedLevels;
      });
    },
    []
  );

  const setNewQuestion = () => {
    const levels = Object.entries(checkedLevels)
      // Get the checked levels
      .filter(([level, checked]) => checked)
      .map(([level]) => level);
    if (levels.length === 0) {
      return [];
    }
    const docCards = DOC2_CARDS
      // Filter based on levels
      .filter((c) => levels.includes(`${c.level}`))
      // Filter out the seen ones
      .filter((c) => !seenCardIds.includes(c.id));

    if (docCards.length === 0) {
      setCurrentCard(null);
    } else {
      const currCard = docCards[getRandomInt(docCards.length - 1)];
      setCurrentCard(currCard);
      addSeenCardId(currCard.id);
    }
  };

  const seenCardIdsLength = seenCardIds.length;
  useEffect(() => {
    if (seenCardIdsLength === 0) {
      // Reset the card
      setCurrentCard(null);
    }
  }, [seenCardIdsLength]);

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
          perspective: '1000px', // needed for 3D flip
        }}>
        {!currentCard && (
          <Box
            sx={(theme) => {
              return {
                ...getCardContainerSharedSx(),
              };
            }}>
            <Card
              variant="outlined"
              sx={(theme) => ({
                ...getCardSharedSx(theme),
              })}>
              <CardContent>
                <Box
                  sx={(theme) => {
                    return {
                      fontSize: theme.typography.h4,
                    };
                  }}>
                  Select the levels that you want and hit the button!
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {currentCard && (
          <Box
            sx={(theme) => {
              return {
                ...getCardContainerSharedSx(),
                transformStyle: 'preserve-3d',
                transition: 'transform 0.8s',
                transform: `rotateY(${rotation}deg)`,
              };
            }}>
            <>
              {/* Front face */}
              <Card
                variant="outlined"
                sx={(theme) => ({
                  ...getCardSharedSx(theme),
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
              {/* Back Face */}
              <Card
                variant="outlined"
                sx={(theme) => ({
                  ...getCardSharedSx(theme),
                  transform: 'rotateY(180deg)',
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
            </>
          </Box>
        )}
      </Box>
      <Box
        sx={(theme) => ({
          fontSize: theme.typography.subtitle2,
          color: theme.palette.grey[400],
          textAlign: 'center',
          marginTop: '10px',
          height: '22px',
        })}>
        {authorShowSkeleton || !currentCard ? (
          <Skeleton
            variant="text"
            {...(!currentCard ? { animation: false } : {})}
            sx={{ display: 'inline-block', width: '300px' }}
          />
        ) : (
          `${currentCard.level} || ${currentCard.author}`
        )}
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
                checked={checkedLevels['1']}
                onChange={(e) => {
                  checkboxLevelOnChange(e, { level: 1 });
                }}
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
                checked={checkedLevels['2']}
                onChange={(e) => {
                  checkboxLevelOnChange(e, { level: 2 });
                }}
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
                checked={checkedLevels['3']}
                onChange={(e) => {
                  checkboxLevelOnChange(e, { level: 3 });
                }}
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
          disabled={isButtonDisabled}
          onPointerDown={() => {
            if (isButtonDisabled) {
              return;
            }
            setAuthorShowSkeleton(true);
            setRotation((prev) => prev + 180); // add 180° each click
            setTimeout(() => {
              setAuthorShowSkeleton(false);
              setNewQuestion();
            }, 300);
          }}
          sx={(theme) => ({
            marginTop: '12px',
          })}>
          Get Question
        </Button>
      </Box>
      <Socials />
      {seenCardIds.length > 0 && (
        <Box sx={{ marginTop: '100px', paddingBottom: '100px' }}>
          <Typography variant="h4" sx={{ marginLeft: '12px' }}>
            History{' '}
            <DeleteForeverIcon
              sx={{
                cursor: 'pointer',
                ':hover': {
                  opacity: 0.8,
                },
                transition: 'opacity 200ms',
              }}
              onClick={() => {
                deleteAllSeenCardIds();
                window.scrollTo(0, 0);
              }}
            />
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: '16px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              margin: '12px',
            }}>
            {seenCardIds.map((id) => {
              const card = DOC2_CARDS.find((c) => id === c.id);
              if (!card) {
                return null;
              }
              return (
                <Card
                  key={id}
                  variant="outlined"
                  sx={(theme) => ({
                    position: 'relative',
                    maxWidth: `${CARD_WIDTH - 50}px`,
                    boxShadow: theme.shadows[3],
                    ...theme.applyStyles('dark', {
                      boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.1)',
                    }),
                  })}>
                  <IconButton
                    onClick={() => {
                      removeSeenCardId(id);
                      // If we remove the same card as the current one, reset
                      if (id === currentCard?.id) {
                        setCurrentCard(null);
                      }
                    }}
                    sx={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      cursor: 'pointer',
                      ':hover': {
                        opacity: 0.8,
                      },
                      transition: 'opacity 200ms',
                      zIndex: 1,
                    }}>
                    <CloseIcon />
                  </IconButton>
                  <CardActionArea
                    onClick={() => {
                      // Set the current card to be this one
                      setCurrentCard(card);
                      window.scrollTo(0, 0);
                    }}
                    sx={{ height: '100%' }}>
                    <CardContent>
                      <Box
                        sx={(theme) => {
                          return {
                            fontSize: theme.typography.caption,
                          };
                        }}>
                        <Box>{card?.question}</Box>
                        <Box
                          sx={(theme) => ({
                            fontSize: '10px',
                          })}>
                          {card?.level}
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Doc2;
