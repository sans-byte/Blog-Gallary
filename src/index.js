// import React, { StrictMode } from "react";
import App from "./App";
// import ReactDOM from 'react-dom'
import "./index.css"

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<StrictMode><App/></StrictMode>);

// ReactDOM.render(<StrictMode>
//     <App></App>
// </StrictMode>,
// document.getElementById("root")
// );
