import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import MatterEmptyAvatar from '../../assets/matter_empty_avatar.svg';
import Modal from 'react-modal';
import Form from '../App/Form';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '25em',
    height: '30em',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class TeamMember extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string
  };

  static defaultProps = {
    photoUrl: MatterEmptyAvatar,
    story: null,
    favoriteColor: '#3466F2'
  };

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    if (this.props.title === 'New Teammate') {
      return (
        <div className="container">
          <header>
            <div className="avatar-container">
              <img
                className="avatar"
                src={this.props.photoUrl}
                alt={this.props.name}
              />
            </div>
            <h2 className="title">{this.props.title}</h2>
            <h1 className="name">{this.props.name}</h1>
          </header>

          <div className="body">
            <button
              onClick={this.toggleModal}>
              Join the Team!
            </button>
            <Modal
              style={modalStyles}
              isOpen={this.state.showModal}
              onRequestClose={this.toggleModal}
            >
              <Form />
            </Modal>
          </div>

          <footer style={{ backgroundColor: this.props.favoriteColor }}>
            <div className="full-width-flex-box">
              <div className="one-third-flex-box stat">9.0</div>
              <div className="one-third-flex-box stat bordered">9.0</div>
              <div className="one-third-flex-box stat">9.0</div>
            </div>
            <div className="full-width-flex-box">
              <div className="one-third-flex-box">CANDID</div>
              <div className="one-third-flex-box">LEARNING</div>
              <div className="one-third-flex-box">GRIT</div>
            </div>
          </footer>
        </div>
      )
    } else {
      return (
        <div className="container">
          <header>
            <div className="avatar-container">
              <img
                className="avatar"
                src={this.props.photoUrl}
                alt={this.props.name}
              />
            </div>
            <h2 className="title">{this.props.title}</h2>
            <h1 className="name">{this.props.name}</h1>
          </header>

          <div className="body">{this.props.story}</div>
          <footer style={{ backgroundColor: this.props.favoriteColor }}>
            <div className="full-width-flex-box">
              <div className="one-third-flex-box stat">9.0</div>
              <div className="one-third-flex-box stat bordered">9.0</div>
              <div className="one-third-flex-box stat">9.0</div>
            </div>
            <div className="full-width-flex-box">
              <div className="one-third-flex-box">CANDID</div>
              <div className="one-third-flex-box">LEARNING</div>
              <div className="one-third-flex-box">GRIT</div>
            </div>
          </footer>
        </div>
      );
    }
  }
}

export default TeamMember;
