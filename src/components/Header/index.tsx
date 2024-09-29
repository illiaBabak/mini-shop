export const Header = (): JSX.Element => (
  <div className='header d-flex flex-row align-items-center justify-content-between'>
    <h3 className='fw-bold'>mini shop</h3>
    <div className='d-flex flex-row align-items-center'>
      <p className='price p-0 m-0 fw-bolder me-3'>$00.00</p>
      <div className='cart position-relative d-flex justify-content-center align-items-center rounded-circle'>
        <img src='src/images/cart.png' alt='cart' className='cart-icon object-fit-contain' />
        <p className='counter d-flex justify-content-center align-items-center rounded-circle position-absolute m-0 fw-bolder'>
          0
        </p>
      </div>
    </div>
  </div>
);
