import React from 'react';


const Widget = (props) =>
<p><label>This is a widget: </label><input type="text" onChange={props.update} /></p>

export default Widget