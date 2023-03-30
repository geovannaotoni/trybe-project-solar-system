import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="Missions__div">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            key={ name }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
