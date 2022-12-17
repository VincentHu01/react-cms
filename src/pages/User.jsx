import React from 'react'
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Allen Green',
      age: 42,
      address: 'Tokyo City Hall',
      tags: ['loser', 'cool', 'tall'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Cinema',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Tom Brown',
      age: 31,
      address: 'New York Long Island',
      tags: ['nice', 'developer', 'java'],
    },
    {
      key: '5',
      name: 'Han Meimei',
      age: 44,
      address: 'Austin No. 2 Lake Park',
      tags: ['loser', 'web'],
    },
    {
      key: '6',
      name: 'Tom Hanks',
      age: 36,
      address: 'California Trump  Hotel',
      tags: ['actor', 'investor'],
    },
    {
      key: '7',
      name: 'John Smith',
      age: 39,
      address: 'San Diego ',
      tags: ['fancy', 'saler'],
    },
    {
      key: '8',
      name: 'Luis Vutton',
      age: 29,
      address: 'North Texas',
      tags: ['winner', 'banker'],
    },
    {
      key: '9',
      name: 'Henry Black',
      age: 44,
      address: 'Sidney No. 1 Lake Park',
      tags: ['teacher', 'nice'],
    },
    {
      key: '10',
      name: 'Owen Smith',
      age: 50,
      address: 'New York Central Park',
      tags: ['player', 'coach'],
    },
  ];

export default function User() {
  return (
    <div>
      <h2 style={{  margin: '-10px 0 20px 0' }} >User Information</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
