import React, { Component } from 'react'
import { Button, Modal, List } from 'antd-mobile'
class Push extends Component {
  state = { show: false }
  render() {
    const { pushShow } = this.props
    return (
      <div>
        <Modal
          popup
          visible={pushShow}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
          afterClose={() => {
            alert('afterClose')
          }}
        >
          <List renderHeader={() => <div>委托买入</div>} className="popup-list">
            {['股票名称', '股票代码', '买入价格'].map((i, index) => (
              <List.Item key={index}>{i}</List.Item>
            ))}
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>
                买入
              </Button>
            </List.Item>
          </List>
        </Modal>
      </div>
    )
  }
}

export default Push
