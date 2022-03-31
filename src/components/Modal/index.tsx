import React, { ReactNode } from 'react';
import Portal from '../Portal';
import { Backdrop, Content } from './styled';

function Modal(props: {children: ReactNode, open: any, onClose: any, locked: any}) {
  const [active, setActive] = React.useState(false);
  const { open, onClose, locked } = props;
  const backdrop = React.useRef(null);

  React.useEffect(() => {
    const current = backdrop.current as any;
    const transitionEnd = () => setActive(open);
    const keyHandler = (e: any) => !locked && [27].indexOf(e.which) >= 0 && onClose();
    const clickHandler = (e: any) => !locked && e.target === current && onClose();

    if (current) {
      current?.addEventListener('transitionend', transitionEnd);
      current?.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        (document?.activeElement as HTMLElement).blur();
        setActive(open);
        document?.querySelector('#root')?.setAttribute('inert', 'true');
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }

      document.querySelector('#root')?.removeAttribute('inert');
      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <>
      {(open || active) && (
        <Portal className="modal-portal" parent={document.getElementById('portal-root')}>
          <Backdrop data-cy="modal" ref={backdrop} className={active && open && 'active'}>
            <Content className="modal-content">{props.children}</Content>
          </Backdrop>
        </Portal>
      )}
    </>
  );
}

export default Modal;
