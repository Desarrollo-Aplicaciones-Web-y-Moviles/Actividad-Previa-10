import Grid from '@mui/material/Grid'; // Importa desde '@mui/material/Grid'
import './App.css';
import Calculator from './components/Calculator';
import Plan from './components/Plan';
import Result from './components/Result';

function App() {
  return (
    <Grid container spacing={5}>
      {/* Cada Grid debe incluir `item` para que funcione como un elemento de cuadrícula */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Calculator />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Plan title="Plan" subtitle="100 Gb" description="Todos los servicios incluídos" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Result title="$120" subtitle="6 meses" description="Plan 100 Gb" />
      </Grid>
    </Grid>
  )
}

export default App
