import React, { Component } from "react";
import { connect } from "react-redux";
import { addContacts } from "../modules/reducers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import ContactItem from "../components/ContactItem";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      isFormShowing: false
    };

    this.updateInput = this.updateInput.bind(this);
    this.toggleAddContactForm = this.toggleAddContactForm.bind(this);
    this.onButtonAddContact = this.onButtonAddContact.bind(this);
  }

  updateInput(input, type) {
    this.setState({
      [type]: input
    });
  }

  toggleAddContactForm() {
    this.setState({
      isFormShowing: !this.state.isFormShowing
    });
  }

  onButtonAddContact() {
    this.props.addContacts({
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      isFavorite: false
    });

    this.setState({
      name: "",
      phoneNumber: "",
      isFormShowing: false
    });
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-md-4 offset-md-4 col-sm-10 offset-sm-2 col-12">
            <div className="navbar-app d-flex align-items-center">
              <FontAwesomeIcon icon={faEllipsisV} className="mr-3" />
              <span>Contacts App</span>
            </div>
            <div className="app p-4">
              <button
                className="btn btn-primary btn-sm mb-2"
                onClick={this.toggleAddContactForm}
              >
                {this.state.isFormShowing ? "Cancel" : "Add Contact"}
              </button>
              {this.state.isFormShowing ? (
                <div className="card mb-4">
                  <form className="card-body">
                    <div className="form-group">
                      <label>
                        <small>Nama</small>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama"
                        onChange={e => this.updateInput(e.target.value, "name")}
                        value={this.state.name}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <small>Nomor Ponsel</small>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nomor Ponsel"
                        onChange={e =>
                          this.updateInput(e.target.value, "phoneNumber")
                        }
                        value={this.state.phoneNumber}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-dark btn-block"
                        onClick={this.onButtonAddContact}
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div />
              )}

              {this.props.redux.contacts.map((item, index) => (
                <ContactItem detail={item} key={index} />
              ))}
            </div>
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ redux: state });

export default connect(
  mapStateToProps,
  { addContacts }
)(Home);
