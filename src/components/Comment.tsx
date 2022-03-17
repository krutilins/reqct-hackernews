import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getItemById } from '../api/HackerNewsApi';
import ThemeContext from '../context/themes';
import { toggleByKey } from '../features/collapseExpandComment/commentExpand';
import { RootState } from '../store';
import { HackerNewsItem } from '../types/item';
import Modal from './Modal';

const Comment = ({id}: {id: number}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLocked, setIsLocked] = React.useState(true);
  const [isLockedOpen, setIsLockedOpen] = React.useState(false);

  const [hasDescendant, setDescendant] = useState<boolean>(false);
  const [comment, setComment] = useState<HackerNewsItem>();
  const childrenIsExpanded = useSelector<RootState>(state => state.commentExpander[comment ? comment.parent : ''] == id.toString())
  const dispatch = useDispatch();

  useEffect(() => {
    getItemById(id)
      .then(comment => {
        setComment(comment);
        setDescendant(comment && comment.kids && comment.kids.length > 0)
      })
  }, [id])

  return (
    <>
    {!comment?.dead && 
        <ThemeContext.Consumer>
          {state => (
            <Card style={{ background: state.background, color: state.color, marginBottom: '10px' }}>
              <Card.Header>
                <Card.Title>{comment?.by}</Card.Title>
              </Card.Header>
              <Card.Body>
                <div dangerouslySetInnerHTML={{ __html: String(comment && comment.text ? comment.text : '') }}></div>
              </Card.Body>
              <Card.Footer>
                {hasDescendant ? <Button onClick={() => {
                  dispatch(toggleByKey({parent: comment?.parent, id: comment?.id}));
                }}>
                {childrenIsExpanded ? 'Collapse' : 'Expand'}</Button> : ''}
                {hasDescendant && childrenIsExpanded ? comment?.kids.map(id => <Comment key={id} id={id} />) : ''}
                <Button variant="primary" size="sm" onClick={() => {
                  setIsOpen(true)
                }}>
                      Show in modal
                </Button>
                <Modal
                  onClose={() => setIsOpen(false)}
                  open={isOpen}
                  locked={false}
                >
                  <Comment id={id}></Comment>
                </Modal>
              </Card.Footer>
            </Card>
          )}
        </ThemeContext.Consumer>
    }
    </>
  )
}

export default Comment;