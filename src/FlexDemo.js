import * as FlexLayout from 'flexlayout-react';

import React from 'react';
import '../node_modules/flexlayout-react/style/light.css';

var json = {
  global: { tabEnableClose: false },
  borders: [
    {
      type: 'border',
      location: 'bottom',
      size: 100,
      children: [
        {
          type: 'tab',
          name: 'four',
          component: 'text',
        },
      ],
    },
    {
      type: 'border',
      location: 'left',
      size: 100,
      children: [],
    },
  ],
  layout: {
    type: 'row',
    weight: 100,
    children: [
      {
        type: 'tabset',
        weight: 50,
        selected: 0,
        children: [
          {
            type: 'tab',
            name: 'One',
            component: 'text',
          },
        ],
      },
      {
        type: 'tabset',
        weight: 50,
        selected: 0,
        children: [
          {
            type: 'tab',
            name: 'Two',
            component: 'text',
          },
          {
            type: 'tab',
            name: 'Three',
            component: 'text',
          },
        ],
      },
    ],
  },
};

const FlexDemo = () => {
  const [model] = React.useState(FlexLayout.Model.fromJson(json));

  const factory = (node) => {
    var component = node.getComponent();
    if (component === 'text') {
      return <div className="panel">Panel {node.getName()}</div>;
    }
  };

  return <FlexLayout.Layout model={model} factory={factory} />;
};

export default FlexDemo;
