import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainLayout} from "./Layouts/MainLayout";
import {CanadianCityListing, cityListing} from "./Components/citiesListing"

function App() {
  return (
      <div className="App">
          <MainLayout title={"Weather Application"}>
              <CanadianCityListing cities={cityListing.cities}/>
          </MainLayout>
      </div>
  );
}

export default App;
