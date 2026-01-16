import './Container.css';

/**
 * Container component - applies horizontal padding to content
 * Uses 80px padding on left and right by default
 * Wraps regular page content while allowing full-width sections outside of it
 */
function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default Container;
