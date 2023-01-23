import React from 'react'
import './Profile.css'
import PhotoProfile from './PhotoProfile.png'
import Adresse from './Address';
import FullName from './FullName';
import Naviguer from './Naviguer';

function ProfilePhoto(){
return(
<div>
<Naviguer/>

      <div class="description">
        <div>
          <img src={PhotoProfile} alt="pf" />
          <FullName/>
          <Adresse/>
        </div>
        <div>
          <h1>Un peu sur moi</h1>
          <p>
            Développeur web confirmé avec 2 ans d’expérience dans le
            développement web. Fort de cette expérience et animé par ma passion
            du développement web, je souhaiterais rejoindre votre équipe au
            poste de directeur technique. Diplomate, dynamique et toujours à la
            pointe des nouvelles technologies, j’aime relever les défis et mets
            un point d’honneur à livrer des applications performantes qui
            satisfont les besoins des clients.
          </p>
        </div>
      </div>
      <div class="description">
        <h3 type="button" id="circle1">
          Projects
        </h3>
        <h3 type="button" id="circle2">
          Contact
        </h3>
        <h3 type="button" id="circle3">
          Formation
        </h3>
      </div>
      <footer>
        <p>2022 -2023 | Copyright | All rights reserved</p>
      </footer>
    </div>
  );
  }

export default ProfilePhoto
