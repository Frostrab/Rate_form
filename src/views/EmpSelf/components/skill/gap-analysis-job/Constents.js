
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default class  Contents  extends PureComponent{
  render(){
    return(
      <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" disabled>
        <p>{text}</p>
      </Panel>
    </Collapse>
    )
  }
}

          