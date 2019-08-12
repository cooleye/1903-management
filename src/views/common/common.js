import React, { Component } from 'react';
import { Button, Row, Col,Steps } from 'antd';
import { Typography } from 'antd';

let { Title,Text } = Typography;
const { Step } = Steps;

class common extends Component {
    state = {
        current: 0,
    };    
    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };
    render() {
        const { current } = this.state;
        return (
            <div style={{padding:20}}>
            <Row>
                <Col span={12}>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </Col>
                <Col span={12}>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">
                    Search
                    </Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <br />
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">
                    Search
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Title>h1. Ant Design</Title>
                    <Title level={2}>h2. Ant Design</Title>
                    <Title level={3}>h3. Ant Design</Title>
                    <Title level={4}>h4. Ant Design</Title>
                </Col>
                <Col span={12}>
                    <Text>Ant Design</Text>
                    <br />
                    <Text type="secondary">Ant Design</Text>
                    <br />
                    <Text type="warning">Ant Design</Text>
                    <br />
                    <Text type="danger">Ant Design</Text>
                    <br />
                    <Text disabled>Ant Design</Text>
                    <br />
                    <Text mark>Ant Design</Text>
                    <br />
                    <Text code>Ant Design</Text>
                    <br />
                    <Text underline>Ant Design</Text>
                    <br />
                    <Text delete>Ant Design</Text>
                    <br />
                    <Text strong>Ant Design</Text>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                <Steps current={2}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                </Col>
                <Col span={12}>
                    <Steps current={current} onChange={this.onChange} direction="vertical">
                    <Step title="Step 1" description="This is a description." />
                    <Step title="Step 2" description="This is a description." />
                    <Step title="Step 3" description="This is a description." />
                </Steps>
                </Col>
            </Row>
                
            </div>
        );
    }
}

export default common;
