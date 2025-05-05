import React from 'react';
// ... other imports like ReactDOM if this is your entry point
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { AboutMePage } from './components/AboutMePage.tsx'; // Explicitly import the .tsx file

function App() {
  return (
    // You might already have a Provider here. If so, just render AboutMePage inside it.
    // If not, wrap your app content with Provider.
    <Provider theme={defaultTheme}>
        {/* ... other application components like routing, headers, etc. */}

        <AboutMePage />

        {/* ... other application components */}
    </Provider>
  );
}

export default App;

// If this is your index.tsx/main.tsx:
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
