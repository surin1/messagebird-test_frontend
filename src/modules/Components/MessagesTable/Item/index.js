import React from 'react';
import styles from './index.less';
import MessageModal from './Modal';
import _ from 'lodash';
import moment from 'moment';

class Item extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal () {
    this.setState({
      isModalOpen: false
    });
  }

  render () {
    const { body, originator, direction, recipients, createdDatetime } = this.props;
    const recipient = _.get(recipients, 'items[0].recipient');
    const status = _.get(recipients, 'items[0].status');
    const date = moment(createdDatetime).format('MMMM Do YYYY, HH:mm')
    const { isModalOpen } = this.state;
    const types = {
      mt: 'sent',
      mo: 'received'
    }

    return (
      <tr className={styles.item} onClick={this.openModal}>
        <MessageModal isModalOpen={isModalOpen} closeModal={this.closeModal} {...this.props} />
        <td>{types[direction]}</td>
        <td>{recipient}</td>
        <td>{originator}</td>
        <td>{body}</td>
        <td>{status}</td>
        <td>{date}</td>
      </tr>
    )
  }
}

export default Item;
