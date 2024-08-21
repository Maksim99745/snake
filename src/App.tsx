import { RouterProvider } from 'react-router-dom';
import './App.css';
import LoaderSpinner from './components/LoaderSpinner';
import { router } from './core/router';
import { useHandleSwipe } from './hooks/useHandleSwipe';

export default function App() {
  const { handlers } = useHandleSwipe();

  return (
    <div className="App" {...handlers}>
      <RouterProvider router={router} fallbackElement={<LoaderSpinner />} />
    </div>
  );
}
