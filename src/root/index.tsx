import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';

export const App = (): JSX.Element => {
  return (
    <div className='content-container d-flex flex-column px-4 pt-2'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
