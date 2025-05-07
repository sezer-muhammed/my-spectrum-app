import React from 'react';
// ... other imports like ReactDOM if this is your entry point
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import MainPage from './components/MainPage.tsx';
import LibraryPage from './components/LibraryPage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <BrowserRouter basename="/my-spectrum-app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </BrowserRouter>
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
