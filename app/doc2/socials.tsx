import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export const Socials = () => {
  return (
    <Box sx={{ marginTop: '24px', textAlign: 'center' }}>
      <Typography variant="caption">Diary of CEO Socials</Typography>
      <IconButton target="_blank" href="https://www.youtube.com/TheDiaryOfACEO">
        <YouTubeIcon />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://podcasts.apple.com/gb/podcast/the-diary-of-a-ceo-with-steven-bartlett/id1291423644">
        <PodcastsIcon />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX">
        <LibraryMusicIcon />
      </IconButton>
      <IconButton target="_blank" href="https://thediary.com/collections/all">
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
};
