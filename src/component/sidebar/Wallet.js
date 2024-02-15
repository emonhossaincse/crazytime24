import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import { InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPiggyBank, faMoneyBillTransfer, faCreditCard, faXmark, faMoneyBill, faPhone} from '@fortawesome/free-solid-svg-icons';


const Wallet = () => {
  const [key, setKey] = useState('balance');
  const closeWallet = () => {
    const chatElement = document.querySelector('.wallet');
    chatElement.classList.remove('open');
};


  return (
    
    <>
    <div className='top-balance'>

    </div>
   
     <div className='max-width wallet'>
  
  <Tab.Container id="left-tabs-example" defaultActiveKey="home" activeKey={key} onSelect={(k) => setKey(k)}>
      <div className='wallet-header'>
        <div className='wallte-title'>
          Wallet
        </div>
        <div className='wallet-action'>
        <FontAwesomeIcon onClick={closeWallet} icon={faXmark} />
        </div>

      </div>
      <div className='wallet-body'>
          
          <div className='wallet-nav'>
          <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey="balance"><FontAwesomeIcon icon={faWallet} /> Balance</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="deposit"><FontAwesomeIcon icon={faPiggyBank} /> Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="wihtdraw"><FontAwesomeIcon icon={faCreditCard} /> Withdraw</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="transaction"><FontAwesomeIcon icon={faMoneyBillTransfer} /> Transaction</Nav.Link>
      </Nav.Item>
    </Nav>
   
          </div>
          <div className='wallet-content'>
          <Tab.Content>
      <Tab.Pane eventKey="balance">
        <p><img className='icon-bdt' src='assets/BDT.black.png'/> Your Balance: 100.00</p>
      </Tab.Pane>
      <Tab.Pane eventKey="deposit">
      <div className='wallte-title'>
          Deposit
        </div>
          <div className='payment-methods'>
              <div className='payment-method'>
                  <img src='https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg'/>
              </div>
              <div className='payment-method'>
                  <img src='https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png'/>
              </div>
              <div className='payment-method'>
                  <img src='https://seeklogo.com/images/U/upay-logo-44D7B11A45-seeklogo.com.png'/>
              </div>
              <div className='payment-method'>
                  <img src='https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png'/>
              </div>
          </div>
          <div className='transation-from'>
              <form>
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMoneyBill} /></InputGroup.Text>
              <FormControl
                  placeholder="Amount"
                  aria-label="amount"
                  aria-describedby="basic-addon1"
              />
              
               </InputGroup>
               <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMoneyBillTransfer} /></InputGroup.Text>
              <FormControl
                  placeholder="Transaction id"
                  aria-label="transaction_id"
                  aria-describedby="basic-addon1"
              />
              
               </InputGroup>
               <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
              <FormControl
                  placeholder="Sender Wallet Number"
                  aria-label="from"
                  aria-describedby="basic-addon1"
              />
              
               </InputGroup>

               <div className="buttons">
                <button  type="button"  className="ui-button button-big s-conic">
                    <div className="button-inner">Submit</div>
                    </button>
                    </div>
               
              </form>
          </div>
      </Tab.Pane>
      <Tab.Pane eventKey="wihtdraw">
      <div className='wallte-title'>
          Withdraw
        </div>
          <div className='payment-methods'>
              <div className='payment-method'>
                  <img src='https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg'/>
              </div>
              <div className='payment-method'>
                  <img src='https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png'/>
              </div>
              <div className='payment-method'>
                  <img src='https://seeklogo.com/images/U/upay-logo-44D7B11A45-seeklogo.com.png'/>
              </div>
              <div className='payment-method'>
                  <img src='https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png'/>
              </div>
          </div>
          <div className='transation-from'>
              <form>
              <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMoneyBill} /></InputGroup.Text>
              <FormControl
                  placeholder="Amount"
                  aria-label="amount"
                  aria-describedby="basic-addon1"
              />
              
               </InputGroup>
               <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMoneyBillTransfer} /></InputGroup.Text>
              <FormControl
                  placeholder="Transaction id"
                  aria-label="transaction_id"
                  aria-describedby="basic-addon1"
              />
              
               </InputGroup>
               <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
              <FormControl
                  placeholder="Receiver Wallet Number"
                  aria-label="from"
                  aria-describedby="basic-addon1"
              />
              
               </InputGroup>

               
               <div className="buttons">
                <button  type="button"  className="ui-button button-big s-conic">
                    <div className="button-inner">Submit</div>
                    </button>
                    </div>
               
              </form>
          </div>
      </Tab.Pane>
      <Tab.Pane eventKey="transaction">
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>SL</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      {/* ... other rows ... */}
    </tbody>
  </Table>
      </Tab.Pane>
    </Tab.Content>
          </div>
      </div>
  </Tab.Container>

  

 </div>
    
    </>
  
  );
};

export default Wallet;
