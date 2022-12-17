import React from 'react'
import { Space, Table, Tag } from 'antd';
import Card1 from './Card1'
import './List.css'
import { Col, Row } from 'antd';

export default function List() {
  return (
    <div className='content'>
      <h2 style={{  margin: '-10px 0 20px 0' }}>Content Card List</h2>
      {/* <Table columns={columns} dataSource={data} /> */}
      <div className='cardZone'>
        <Row>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>
        </Row>
        <br />
        <Row>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>
            <Col span={4}><Card1/></Col>

        </Row>
      </div>
    </div>
  )
}
