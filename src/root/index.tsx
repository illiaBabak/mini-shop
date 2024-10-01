import { createContext, useState } from 'react';
import { Cart } from 'src/components/Cart';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { ModalWrapper } from 'src/components/ModalWrapper';

type GlobalContextType = {
  shouldShowCart: boolean;
  setShouldShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  shouldShowCart: false,
  setShouldShowCart: () => {
    throw new Error('Global Context is not initalized!');
  },
});

export const App = (): JSX.Element => {
  const [shouldShowCart, setShouldShowCart] = useState(false);

  return (
    <GlobalContext.Provider value={{ setShouldShowCart, shouldShowCart }}>
      {shouldShowCart && (
        <ModalWrapper onClose={() => setShouldShowCart(false)}>
          <Cart />
        </ModalWrapper>
      )}

      <div className='content-container d-flex flex-column px-4 pt-2'>
        <Header />
        <Main />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
};
