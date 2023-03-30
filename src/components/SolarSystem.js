import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="SolarSystem__section">
          {planets.map(({ name, image }) => (
            <PlanetCard planetName={ name } planetImage={ image } key={ name } />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
