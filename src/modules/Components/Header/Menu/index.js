import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styles from './index.less';
import Item from './Item';
import MessageCreation from '../../MessageCreation';
import { createMessage, toggleCreateModal } from '../../../../actions';
import { getIsCreateModalOpen } from '../../../../selectors';

const Menu = ({
  onCreateMessage,
  onToggleCreateModal,
  isCreateModalOpen,
  location: { pathname }
}) => {
  const menuItems = [
    {
      id: 1,
      title: 'All messages',
      page: '/'
    },
    {
      id: 2,
      title: 'Received',
      page: '/received'
    },
    {
      id: 3,
      title: 'Sent',
      page: '/sent'
    }
  ];

  return (
    <div className={styles.menu}>
      {menuItems.map(({ id, title, page }) =>
        <Item key={id}
          page={page}
          pathname={pathname}
          title={title} />
        )}
      <div onClick={onToggleCreateModal} className={styles.createButton}>Send sms</div>
      <MessageCreation isModalOpen={isCreateModalOpen}
          onCreateMessage={onCreateMessage}
          closeModal={onToggleCreateModal}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isCreateModalOpen: getIsCreateModalOpen(state)
});

const mapDispatchToProps = {
  onCreateMessage: createMessage,
  onToggleCreateModal: toggleCreateModal
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
