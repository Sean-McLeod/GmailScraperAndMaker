import { ClientTable } from './ClientTable/ClientTable.js'
import { EmailTable } from './EmailTable/EmailTable.js'
import AddClientBox from './AddClientBox/AddClientBox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClientTable />
        <EmailTable />
        <AddClientBox />
      </header>
      
    </div>
  );
}

export default App;
