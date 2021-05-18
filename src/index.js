import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
const client = new W3CWebSocket('ws://127.0.0.1:8000');
const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;
export default class App extends Component {
  
  state = {
    userName: '',
    isLoggedIn: false,
    messages: []
  }


  onButtonClicked = (value) => {
    client.send(JSON.stringify({
      type: "message",
      msg: value,
      user: this.state.userName
    }));

    this.setState({ searchVal : ''});
  }

  componentDidMount()
  {
    client.onopen = () => {
      console.log('Websocket Client Conectado');
    }

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('reply ', dataFromServer);
      if(dataFromServer.type === "message")
      {
        this.setState((state) => ({
          messages: [...state.messages, { msg: dataFromServer.msg, user: dataFromServer.user }]
        }));
      }
    }
  }
  render() {
    return (
      <div className="main">
        {this.state.isLoggedIn ? 
        <div>
          <div className="title"> 
            <Text type="secondary" style={{ fontSize: '36px' }} > Magistri Chat</Text>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50}}>
            {this.state.messages.map(message => 
              <Card key={message.msg} style={{ width: 300, margin: '16px 4px 0 4px', alignSelf: this.state.userName === message.user ? 'flex-end': 'flex-start'}}>
                <Meta  
                  avatar = {
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf'}}>{message.user[0].toUpperCase()} </Avatar>
                  }
                  title={message.user}
                  description={message.msg}
                />
              </Card>  
            )}
          </div> 
          <div className="bottom">
            <Search 
              placeholder="Digite sua menssagem e envie"
              enterButton="Enviar"
              value={this.state.searchVal}
              size="large"
              onChange={(e) => this.setState({ searchVal: e.target.value })}
              onSearch={ value => this.onButtonClicked(value)}
            />
          </div>
        </div>
        : 
        <div style={{ padding: '200px 40px'}}>
          <Search 
            placeholder="Digite o Nome do Usuário"
            enterButton="Entre"
            size="large"
            onSearch={ value => this.setState({isLoggedIn: true, userName: value })}
          />
        </div>
      }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));