
import React, { Component } from "react";
import helsinkimap from './MapofHelsinki.gif';

 
class contact extends Component {
  render() {
    return (
      <div>
     <div className="helsinkimap">
          <img src={helsinkimap} width="600" height="400" />
        </div>

        <h2>Contact information</h2>

	<h3>CEO: <strong>Kari Eronen</strong></h3>
	<p> Constreng is situated in Helsinki, address: BC Papula, Fredrikinkatu 61, 6.krs
00100 Helsinki
</p>

          <p> Call: +358 400 633 529</p>
<p>Email: kari.eronen@constreng.fi

</p>
<p> You can find more info about me from my LinkedIn-profile:
</p>

<a href="https://www.linkedin.com/in/karieronen71/">Kari Eronen LinkedIn CV</a>

        
      </div>
    );
  }
}
 
export default contact;
