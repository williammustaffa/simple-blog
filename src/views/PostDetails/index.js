import React from 'react';
import { useSelector, useDispatch } from 'redux-saga';
import { Grid, Segment } from 'semantic-ui-react';

function PostDetails () {
  const props = useSelector(state => ({
    post: state.post,
  }));

  const dispath = useDispatch();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PostDetails;