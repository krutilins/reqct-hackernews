import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import Modal from '../Modal';
import { getItemById } from '../../api/HackerNewsApi';
import { HackerNewsItem } from '../../types/item';
import { RootState } from '../../store';
import { toggleByKey } from '../../features/collapseExpandComment/commentExpand';

function Comment({ id }: {id: number}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const [hasDescendant, setDescendant] = useState<boolean>(false);
  const [comment, setComment] = useState<HackerNewsItem>();
  const childrenIsExpanded = useSelector<RootState>((state) => state.commentExpander[comment ? comment.parent : ''] === id.toString());
  const dispatch = useDispatch();

  useEffect(() => {
    getItemById(id)
      .then((commentResponse) => {
        setComment(commentResponse);
        setDescendant(commentResponse && commentResponse.kids && commentResponse.kids.length > 0);
      });
  }, [id]);

  return (
    <>
      {!comment?.dead
        && (
        <ThemeContext.Consumer>
          {(state) => (
            <Card style={{ background: state.background, color: state.color, marginBottom: '10px' }}>
              <Card.Header>
                <Card.Title>{comment?.by}</Card.Title>
              </Card.Header>
              <Card.Body>
                <div dangerouslySetInnerHTML={{ __html: String(comment && comment.text ? comment.text : '') }} />
              </Card.Body>
              <Card.Footer>
                {hasDescendant ? (
                  <Button onClick={() => {
                    dispatch(toggleByKey({ parent: comment?.parent, id: comment?.id }));
                  }}
                  >
                    {hasDescendant && childrenIsExpanded ? 'Collapse' : 'Expand'}
                  </Button>
                ) : ''}
                {hasDescendant && childrenIsExpanded ? comment?.kids.map((kidId) => <Comment key={kidId} id={kidId} />) : ''}
                <Button variant="primary" size="sm" onClick={() => setIsOpen(true)}>
                  Show in modal
                </Button>
                <Modal
                  onClose={() => setIsOpen(false)}
                  open={isOpen}
                  locked={false}
                >
                  <Comment id={id} />
                </Modal>
              </Card.Footer>
            </Card>
          )}
        </ThemeContext.Consumer>
        )}
    </>
  );
}

export default Comment;
