import React from 'react';
import styles from './index.less';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { getCreationError } from '../../../selectors';

class MessageCreation extends React.Component {
  constructor (props) {
    super(props);
    this.initalState = {
      formValues: {
        originator: null,
        recipient: null,
        message: null
      }
    }

    this.state = this.initalState;

    this.handleValueInput = this.handleValueInput.bind(this);
    this.handleMessageCreation = this.handleMessageCreation.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleValueInput (e) {
    const { formValues } = this.state;
    const { name, value } = e.target;

    this.setState({
      formValues: Object.assign({}, formValues, { [name]: value })
    })
  }

  handleMessageCreation () {
    const { formValues } = this.state;

    this.props.onCreateMessage({ data: formValues })
  }

  handleModalClose () {
    this.props.closeModal();

    this.setState(this.initalState)
  }

  render () {
    const { closeModal, isModalOpen, creationError } = this.props;
    const { formValues: { originator, recipient, message } } = this.state;
    const isButtonActive = originator && recipient && message;

    return (
      <Modal isOpen={isModalOpen}
        onRequestClose={this.handleModalClose}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Message creation">
        <div className={styles.title}>Create SMS</div>
        {Boolean(creationError) && <div className={styles.errorText}>Error: {creationError}</div>}
        <div className={styles.form}>
          <div className={styles.contacts}>
            <input name="originator"
              onChange={this.handleValueInput}
              className={styles.input}
              placeholder="Originator" />
            <input name="recipient"
              onChange={this.handleValueInput}
              className={styles.input}
              placeholder="Recipient" />
          </div>
          <textarea name="message"
            onChange={this.handleValueInput}
            className={styles.textarea}
            placeholder="Message" />
        </div>
        <button disabled={!isButtonActive} className={styles.button} onClick={this.handleMessageCreation}>Send sms</button>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  creationError: getCreationError(state)
})

export default connect(mapStateToProps)(MessageCreation);
