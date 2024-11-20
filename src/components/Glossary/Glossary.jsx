import React from 'react';
import styles from './Glossary.module.css';
import glossary_items from './term-explorer-eli5.json';

import { useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react';

export const TermTip = ({ jargon }) => {
  const glossary = jargon.toLowerCase();
  const [isOpen, setIsOpen] = useState(false);
  const glossary_items = Object.fromEntries(
    Object.entries(require('./term-explorer-eli5.json')).map(([key, value]) => [key.toLowerCase(), value]),
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right-end',
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift(),
    ],
  });

  // Event listeners to change the open state
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  // Role props for screen readers
  const role = useRole(context, { role: 'tooltip' });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()} className={styles.glossary}>
        {jargon}
      </span>
      <FloatingPortal>
        {isOpen && (
          <div className={styles.tooltip} ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {glossary_items[glossary]}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

export const GlossaryListing = () => {
  const sortedGlossaryItems = Object.keys(glossary_items).sort();

  return (
    <div className={styles.glossaryContainer}>
      <div className={styles.glossaryContent}>
        {sortedGlossaryItems.map((item, index) => (
          <Glossary key={index} name={item} description={glossary_items[item]} />
        ))}
      </div>
    </div>
  );
};

const Glossary = ({ name, description }) => {
  return (
    <div>
      <dl className={styles.glossaryList} id={name}>
        <dt>{name}</dt>
        <dd>{description}</dd>
      </dl>
    </div>
  );
};

export default Glossary;
