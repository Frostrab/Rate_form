
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table,Steps, Icon } from 'antd';
const Step = Steps.Step;
const columns = [{
  title: 'Review template',
  dataIndex: 'reviewTemplate',
}, {
  title: 'Description',
  dataIndex: 'description',
}, {
  title: 'Review type',
  dataIndex: 'reviewType',
}];
const data = [{
  key: '1',
  reviewTemplate: 'ทดสอบ',
  description: "ทดสอบ",
  reviewType: 'Development',
}, {
    key: '2',
    reviewTemplate: 'ทดสอบ',
    description: "ทดสอบ",
    reviewType: 'Development',
},];
const columns2 = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Personal Number',
    dataIndex: 'personalNumber',
  }];
  const data2 = [{
    key: '1',
    name: 'นาย สามารถ สมบัตร',
    personalNumber: "0001",
  }, {
    key: '2',
    name: 'นาย สมบัตร สามารถ',
    personalNumber: "0002",
  },];
  
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
export default class ContentTemplate extends PureComponent {
    render() {
        return(
            <div>

            <Steps style={{marginBottom: 10}}>
              <Step
                style={{ color: "#00ff00" }}
                status="finish"
                title="User"
                icon={<Icon type="user" />}
              />
              <Step status="wait" title="Review" icon={<Icon type="solution" />} />
              <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>

            <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="small" />
            <br />
            <Table rowSelection={rowSelection} columns={columns2} dataSource={data2} size="small"title={() => 'Select Worker'} />
            </div> 
            )
    }
}
          