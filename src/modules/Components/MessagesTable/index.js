import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import styles from './index.less';
import { toggleCreateModal } from '../../../actions';
import Error from './Error';
import { getErrorData, getIsMessagesLoaded } from '../../../selectors';
import Preloader from './Preloader';
import Table from './Table';

const List = ({ messages, onToggleCreateModal, error, isError, isLoaded }) => {
  const isOnError = isError || messages.length === 0;

  return (
    <div>
      {!isLoaded ?
        <Preloader className={styles.preloaderContainer} /> :
        <Table isOnError={isOnError}
          messages={messages}
          error={error}
          onToggleCreateModal={onToggleCreateModal} />}
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: getErrorData(state),
  isLoaded: getIsMessagesLoaded(state)
})

const mapDispatchToProps = {
  onToggleCreateModal: toggleCreateModal
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
