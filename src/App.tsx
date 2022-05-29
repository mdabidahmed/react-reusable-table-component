import './App.css';
import Table from './components/table';
import {tableData} from './data';

function App() {
  const columns = [
    {field: 'id', header: '#'},
    {field: 'name', header: 'Name'},
    {field: 'address', header: 'Address'},
    {field: 'date', header: 'Date'},
    {field: 'order', header: 'Order No'}
  ];

  return (
    <div className='App'>
      <h2>React-App</h2>
      <h4>Building a Reusable Component</h4>
      <Table data={tableData} columns={columns} hover={false} striped={false} />
    </div>
  );
}

export default App;
