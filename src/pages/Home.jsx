import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

export const Home = () => {
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Пост о том, как я нихуя не запоминаю в этой херне и скоро начну говнокодить"
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={{
                avatarUrl:
                  'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                fullName: 'SERGONIUS',
              }}
              createdAt={'29 июля 2022 г.'}
              viewsCount={100500}
              commentsCount={3}
              tags={['react', 'fun', 'typescript']}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Алекс Фолин',
                  avatarUrl: 'https://sun9-east.userapi.com/sun9-43/s/v1/ig1/l3ZDUXLL33_QEFHeZ5DD0KX3GlzuhO-eDc2BKPc88A2d8H95xVu3A9ETCkmxlwZZtlmPqZdP.jpg?size=1600x1200&quality=96&type=album',
                },
                text: 'Развитие есть бытие',
              },
              {
                user: {
                  fullName: 'Надюшонок',
                  avatarUrl: 'https://sun4.userapi.com/sun4-11/s/v1/ig1/mCGjROzLLT9Ji9xredxrdjOJF8FdYvYPustkmNPmOgotRbVzko1ymnRTQ0i-8qbGYw_Ozpc3.jpg?size=1414x1875&quality=96&type=album',
                },
                text: 'эх, щас бы суши с BambooRolls пожрать)))',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
