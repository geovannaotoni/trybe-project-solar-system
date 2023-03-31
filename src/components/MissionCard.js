import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="MissionCard__div">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year"><i class="fa-solid fa-calendar-day"></i>{ year }</p>
        <p data-testid="mission-country"><i class="fa-sharp fa-solid fa-location-dot"></i>{ country }</p>
        <p data-testid="mission-destination"><i class="fa-solid fa-flag"></i>{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string,
  destination: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
}.isRequired;

export default MissionCard;
