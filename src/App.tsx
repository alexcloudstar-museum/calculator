import { FC } from 'react';
import GlobalStyles from './GlobalStyles';
import { CalculatorContainer } from './shared/containers';

const App: FC = () => (
  <div className='App'>
    <GlobalStyles />
    <CalculatorContainer />
  </div>
);

export default App;
