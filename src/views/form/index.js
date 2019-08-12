import React, { Component } from 'react';
import { AutoComplete ,Checkbox,Rate,Card,Calendar} from 'antd';

const { Meta } = Card;

function onSelect(value) {
    console.log('onSelect', value);
  }
  
  class Complete extends React.Component {
    state = {
      dataSource: [],
    };
  
    handleSearch = value => {
      this.setState({
        dataSource: !value ? [] : [value, value + value, value + value + value],
      });
    };
    onChange = (e) =>{
        console.log(`checked = ${e.target.checked}`);
    }
    onPanelChange = (value, mode) => {
        console.log(value, mode);
    }
      
  
    render() {
      const { dataSource } = this.state;
      return (
        <div style={{padding:20}}>
            <div>
                <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                />
            </div>
            <div>
                <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
            </div>

            <div>
                <Rate onChange={(num)=>{
                    console.log(num)
                }}/>
            </div>
            <div>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            </div>
            <div>
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
        </div>
      );
    }
  }

export default Complete;