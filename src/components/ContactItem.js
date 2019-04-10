import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

class ContactItem extends Component {
  render() {
    const { name, phoneNumber, isFavorite } = this.props.detail;

    return (
      <div className="card card-default mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <b>{name}</b>
              <p className="m-0">{phoneNumber}</p>
            </div>
            {isFavorite != null && isFavorite ? (
              <FontAwesomeIcon icon={faStar} color="gold" />
            ) : (
              <FontAwesomeIcon icon={faStarRegular} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactItem;
