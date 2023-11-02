import React from 'react';
import PublicRoutes from './routes/PublicRoutes';
import { AppContext, useAppContext } from './contexts/AppContext';

function App() {
  const appContext = useAppContext();

  return (
      <AppContext.Provider value={appContext}>
        <PublicRoutes />
      </AppContext.Provider>
  );
}

export default App;