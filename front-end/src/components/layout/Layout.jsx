import './Layout.css';

/**
 * Layout component - responsible for overall page structure
 * This component defines the page structure without imposing content constraints
 * Children can be full-width or constrained using the Container component
 */
function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

export default Layout;
