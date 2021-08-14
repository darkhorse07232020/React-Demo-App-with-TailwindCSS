import React from 'react';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import Card from '../card';

type Props = {
  items: IPlanetList[];
  handleRLDDChange: any;
};

const itemRenderer = (item: IPlanetList): React.ReactElement => (
  <Card image={item.value} label={item.label} />
);

const DND = ({ items, handleRLDDChange }: Props): React.ReactElement => (
  <RLDD
    cssClasses="list-container"
    items={items}
    itemRenderer={itemRenderer}
    onChange={handleRLDDChange}
  />
);

export default DND;
