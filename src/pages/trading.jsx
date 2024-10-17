// import { FaArrowRightArrowLeft, FaWallet } from 'react-icons/fa'; // Importing icons

//  const [activeTab, setActiveTab] = useState('futures');
//    const [activeButton, setActiveButton] = useState('deposit'); // State to track active button

//   const selectTrading = (event, tab) => {
//     setActiveTab(tab);
//   };
//   const handleToggle = (button) => {
//     setActiveButton(button);
//   };
//   const [selectedAsset, setSelectedAsset] = useState('USDT');
//   const [selectedNetwork, setSelectedNetwork] = useState('ERC-20');
//   const [isAssetDropdownOpen, setAssetDropdownOpen] = useState(false);
//   const [isNetworkDropdownOpen, setNetworkDropdownOpen] = useState(false);
//   const [depositAddress] = useState('0x123...ABC'); // Example deposit address

//   const toggleAssetDropdown = () => setAssetDropdownOpen(!isAssetDropdownOpen);
//   const toggleNetworkDropdown = () => setNetworkDropdownOpen(!isNetworkDropdownOpen);

//   const copyAddress = () => {
//     navigator.clipboard.writeText(depositAddress);
//     alert('Address copied!');
//   };
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="trading.css" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
//     <script>
//       const currencyFormatter = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       });

//       function checkToken() {
//         if (localStorage.getItem("token" == null)) {
//           alert("Please login!");
//           location.assign("login.html");
//         }
//       }
//       checkToken();
//       async function loadUserData() {
//         try {
//           const response = await fetch("/api/getBalance", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: "Bearer " + localStorage.getItem("token"), // Include token
//             },
//           });
//           const data = await response.json();
//           document.getElementById(
//             "welcome-message"
//           ).textContent = `${data.username}`;
//           // document.getElementById("balance").textContent = `${data.balance}`;
//           document.getElementById("address").textContent = `${data.address}`;
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }

//       document.addEventListener("DOMContentLoaded", loadUserData);
//     </script>
//     <script>
//       document.addEventListener("DOMContentLoaded", () => {
//         const welcomeMessage = document.getElementById("welcome-message");
//         const welcomeMessageDuplicate = document.getElementById(
//           "welcome-message-duplicate"
//         );

//         // Function to sync the duplicate message with the original message
//         function syncWelcomeMessages() {
//           welcomeMessageDuplicate.textContent = welcomeMessage.textContent;
//         }

//         // Create an observer to watch for changes in the original welcome message
//         const observer = new MutationObserver(syncWelcomeMessages);

//         // Observe the text content changes in the original welcome message
//         observer.observe(welcomeMessage, { childList: true });

//         // Initially sync the messages in case the content is already updated
//         syncWelcomeMessages();
//       });
//     </script>
//   </head>
//   <body>
//     <div class="container">
//       <div class="main-content">
//         <!-- Navigation -->
//         <div
//           style="
//             padding: 0 20px;
//             justify-content: space-between;
//             width: 100%;
//             display: flex;
//             height: 64px;
//             background-color: #383839;
//             position: absolute;
//             z-index: 100;
//             align-self: center;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//           ">




//     <div className="nav-left" style={{ flexDirection: 'row', display: 'flex' }}>
//       <div className="tab">
//         <button
//           className={`tablinks ${activeTab === 'futures' ? 'active' : ''}`}
//           onClick={(e) => selectTrading(e, 'futures')}
//         >
//           Futures Trading
//         </button>
//         <button
//           className={`tablinks ${activeTab === 'spot' ? 'active' : ''}`}
//           onClick={(e) => selectTrading(e, 'spot')}
//         >
//           Spot Trading
//         </button>
//       </div>
//     </div>
//   }

// export default TradingTabs;
//   </div> -->
//           <div class="nav-right" style="flex-direction: row; display: flex">
//            <div>
//               <div>
//       <button
//         style={{ height: '60px', width: '120px', marginRight: '10px' }}
//         className="deposit-btn"
//         id="transfer-USDT-btn"
//       >
//         <FaArrowRightArrowLeft style={{ marginRight: '10px' }} />
//         Transfer
//       </button>

//       <button style={{ height: '60px' }} className="deposit-btn" id="deposit-btn">
//         <FaWallet style={{ marginRight: '10px' }} />
//         Deposit
//       </button>
//     </div>
//            </div>
//             <div id="popup-modal" class="popup-modal">
//               <div class="popup-modal-content">
//                 <div id="user-info">
//                   <div class="zaclose">
//                     <img
//                       src="img/close.png"
//                       id="popup-close-btn"
//                       class="closee" />
//                     <h2 style="font-size: 20px">Transfer Crypto</h2>
//                   </div>
//                   <div class="deposit-header"></div>



  

//   return (
//     <div className="toggle-buttons-custom">
//       <button
//         id="deposit-toggle-custom"
//         style={{
//           fontSize: '14px',
//           borderRadius: '10px',
//           paddingTop: '11px',
//         }}
//         className={`toggle-button-custom ${
//           activeButton === 'deposit' ? 'active' : ''
//         }`}
//         onClick={() => handleToggle('deposit')}
//       >
//         Deposit
//       </button>

//       <button
//         id="withdraw-toggle-custom"
//         style={{
//           fontSize: '14px',
//           borderRadius: '10px',
//           paddingTop: '11px',
//         }}
//         className={`toggle-button-custom ${
//           activeButton === 'withdraw' ? 'active' : ''
//         }`}
//         onClick={() => handleToggle('withdraw')}
//       >
//         Withdraw
//       </button>
//     </div>
//   );
// }
//     <div id="deposit-content-custom" className="content-section-custom active">
//       <div id="network-selectors">
//         {/* Asset Dropdown */}
//         <div className="custom-dropdown" style={{ flex: 1, fontWeight: 550, fontSize: '15px' }}>
//           <label className="choose">Choose Asset</label>
//           <div
//             className="custom-dropdown-selected"
//             style={dropdownStyle}
//             onClick={toggleAssetDropdown}
//           >
//             <span className="custom-dropdown-selected-text">{selectedAsset}</span>
//             <span className="custom-dropdown-arrow">
//               <img width="14px" src="img/arrow-right.png" alt="arrow" />
//             </span>
//           </div>
//           {isAssetDropdownOpen && (
//             <div className="custom-dropdown-options">
//               <hr className="separator2" />
//               {['ETH', 'BRETT', 'PEOPLE', 'USDT', 'USDC', 'BNB'].map((asset) => (
//                 <div
//                   key={asset}
//                   className="custom-dropdown-option"
//                   onClick={() => setSelectedAsset(asset)}
//                 >
//                   <img src={`img/${asset}.png`} style={optionImgStyle} alt={asset} />
//                   <span style={{ marginLeft: '10px' }}>{asset}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Network Dropdown */}
//         <div className="custom-dropdown" style={{ flex: 1, fontWeight: 550, fontSize: '15px' }}>
//           <label className="choose">Choose Network</label>
//           <div
//             className="custom-dropdown-selected"
//             style={dropdownStyle}
//             onClick={toggleNetworkDropdown}
//           >
//             <span className="custom-dropdown-selected-text">{selectedNetwork}</span>
//             <span className="custom-dropdown-arrow">
//               <img width="14px" src="img/arrow-right.png" alt="arrow" />
//             </span>
//           </div>
//           {isNetworkDropdownOpen && (
//             <div className="custom-dropdown-options">
//               <hr className="separator2" />
//               {['ERC-20', 'BSC', 'Base', 'Arbitrum One'].map((network) => (
//                 <div
//                   key={network}
//                   className="custom-dropdown-option"
//                   onClick={() => setSelectedNetwork(network)}
//                 >
//                   <img src={`img/${network.toLowerCase()}.png`} style={optionImgStyle} alt={network} />
//                   <span style={{ marginLeft: '10px' }}>{network}</span>
//                 </div>
//               ))}
//             </div>
//         </div>
//       </div>

//       {/* QR Code Section */}
//       <div className="qr-add" style={{ marginBottom: '15px' }}>
//         <div id="qr-code-container">
//           <img id="qr-code" style={{ display: 'none' }} alt="QR Code" />
//         </div>
//         <div id="address-container">
//           <div style={{ overflow: 'hidden' }}>
//             <label className="choose">Deposit Address</label>
//             <div id="address">{depositAddress}</div>
//           </div>
//           <img
//             src="img/copy.png"
//             style={{ width: '21px', marginTop: '15px' }}
//             id="copy-icon"
//             alt="copy"
//             onClick={copyAddress}
//           />
//         </div>
//       </div>

//       {/* Warning Section */}
//       <div id="warningContainer" className="warning-container-darkblue">
//         <p className="warning-text">
//           <img src="img/warning2.png" className="warning-icon" alt="warning" />
//           Minimum Deposit: $1.5 ∼ 1.5 USDT
//         </p>
//       </div>
//     </div>
//   );
// }

// // Inline styles
// const dropdownStyle = {
//   marginBottom: '5px',
//   marginTop: '5px',
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   backgroundColor: '#26235a',
//   padding: '10px',
//   borderRadius: '8px',
// };

// const optionImgStyle = {
//   width: '22px',
//   marginLeft: '10px',
// };

// export default DepositContent;
//                </div> -->

//                   <div
//                     id="withdraw-content-custom"
//                     class="content-section-custom"
//                     style="font-weight: bold">
//                 <!-- <div>
//                   import React, { useEffect, useState } from 'react';

// const NetworkSelectors = () => {
//   const [balances, setBalances] = useState({});
//   const [isAssetDropdownOpen, setIsAssetDropdownOpen] = useState(false);
//   const [isNetworkDropdownOpen, setIsNetworkDropdownOpen] = useState(false);
//   const [selectedAsset, setSelectedAsset] = useState('USDT');
//   const [selectedNetwork, setSelectedNetwork] = useState('ERC-20');

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const response = await fetch('/api/getBalance', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer ' + localStorage.getItem('token'),
//           },
//         });
//         const data = await response.json();
//         setBalances(data); // Assuming data is an object containing balances
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     loadUserData();
//   }, []);

//   const toggleAssetDropdown = () => {
//     setIsAssetDropdownOpen((prev) => !prev);
//   };

//   const toggleNetworkDropdown = () => {
//     setIsNetworkDropdownOpen((prev) => !prev);
//   };

//   const handleAssetSelect = (asset) => {
//     setSelectedAsset(asset);
//     setIsAssetDropdownOpen(false);
//   };

//   const handleNetworkSelect = (network) => {
//     setSelectedNetwork(network);
//     setIsNetworkDropdownOpen(false);
//   };

//   return (
//     <div id="network-selectors" style={{ display: 'flex' }}>
//       {/* Asset Dropdown */}
//       <div className="custom-dropdown" style={{ flex: 1 }}>
//         <label className="choose">Choose Asset</label>
//         <div
//           className="custom-dropdown-selected"
//           style={{
//             margin: '5px 0',
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: '#26235a',
//             padding: '10px',
//             borderRadius: '8px',
//           }}
//           onClick={toggleAssetDropdown}
//         >
//           <span className="custom-dropdown-selected-text" style={{ fontSize: '15px' }}>
//             {selectedAsset}
//           </span>
//           <span className="custom-dropdown-arrow">
//             <img width="14px" src="img/arrow-right.png" alt="arrow" />
//           </span>
//         </div>
//         {isAssetDropdownOpen && (
//           <div className="custom-dropdown-options">
//             <hr className="separator2" />
//             {['ETH', 'BRETT', 'PEOPLE', 'USDT', 'USDC', 'BNB'].map((asset) => (
//               <div
//                 key={asset}
//                 className="custom-dropdown-option"
//                 style={{
//                   fontSize: '14px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   padding: '10px',
//                 }}
//                 onClick={() => handleAssetSelect(asset)}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src={`img/${asset}.png`} style={{ width: '24px', height: '24px' }} alt={asset} />
//                   <span style={{ marginLeft: '10px' }}>{asset}</span>
//                 </div>
//                 <span
//                   style={{
//                     fontSize: '14px',
//                     fontWeight: 'bold',
//                     color: '#afafaf',
//                   }}
//                 >
//                   {balances[asset] || '0.00'}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Network Dropdown */}
//       <div className="custom-dropdown" style={{ flex: 1, fontSize: '15px' }}>
//         <label className="choose">Choose Network</label>
//         <div
//           className="custom-dropdown-selected"
//           style={{
//             margin: '5px 0',
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: '#26235a',
//             padding: '10px',
//             borderRadius: '8px',
//           }}
//           onClick={toggleNetworkDropdown}
//         >
//           <span className="custom-dropdown-selected-text">{selectedNetwork}</span>
//           <span className="custom-dropdown-arrow">
//             <img width="14px" src="img/arrow-right.png" alt="arrow" />
//           </span>
//         </div>
//         {isNetworkDropdownOpen && (
//           <div className="custom-dropdown-options">
//             <hr className="separator2" />
//             {['ERC-20', 'BSC', 'Base', 'Arbitrum One'].map((network) => (
//               <div
//                 key={network}
//                 className="custom-dropdown-option"
//                 onClick={() => handleNetworkSelect(network)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   padding: '10px',
//                 }}
//               >
//                 <img
//                   src={`img/${network.replace(' ', '').toLowerCase()}.png`}
//                   style={{ width: '24px', height: '24px', marginLeft: '10px' }}
//                   alt={network}
//                 />
//                 <span style={{ marginLeft: '10px' }}>{network}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NetworkSelectors;
//                 </div> -->

//                  <!-- <sdfsdf>
//                   import React, { useState } from 'react';
// import './styles.css'; // Optional for styling

// const WithdrawalForm = () => {
//   const [address, setAddress] = useState('');
//   const [amount, setAmount] = useState('');
//   const [memo, setMemo] = useState('');
//   const [error, setError] = useState('');
//   const [availableAmount] = useState(0); // Replace with dynamic value from props or context

//   const handleWithdraw = async () => {
//     if (!address || !amount) {
//       setError('Please fill in all required fields.');
//       return;
//     }
//     if (amount <= 0) {
//       setError('Amount must be greater than zero.');
//       return;
//     }
//     // Reset error before making the request
//     setError('');

//     try {
//       const response = await fetch('/withdraw', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ address, amount, memo }),
//       });

//       if (!response.ok) {
//         throw new Error('Withdrawal failed. Please try again.');
//       }

//       // Handle successful withdrawal (e.g., show a success message or update state)
//       alert('Withdrawal successful!');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <span
//         id="welcome-message"
//         style={{ pointerEvents: 'none', color: 'transparent' }}
//       >
//         Login
//       </span>
//       <div className="amount-sectionz">
//         <div className="razss">
//           <label style={{ margin: 0 }} className="choose">
//             Withdraw Address
//           </label>
//           <div id="error-message2" className="error-message2">{error}</div>
//         </div>
//         <div className="input-wrapperz">
//           <input
//             type="text"
//             style={{ height: '20px', fontSize: '13px', fontWeight: 'bold' }}
//             placeholder="0xc4.."
//             className="inputz"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="amount-sectionz">
//         <div className="razss">
//           <label style={{ margin: 0 }} className="choose">
//             Amount
//           </label>
//           <div id="error-message" className="error-message">{error}</div>
//         </div>
//         <div className="input-wrapperz">
//           <input
//             id="amountInput"
//             style={{ height: '20px', fontSize: '14px', fontWeight: 'bold' }}
//             placeholder="10"
//             className="inputz"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="availablez">
//         Available
//         <span style={{ fontWeight: 'bold' }} id="availableAmount" className="available-valuez">
//           {availableAmount.toFixed(3)}
//         </span>
//       </div>
//       <div className="memo-sectionz">
//         <label className="choose">MEMO (Optional)</label>
//         <input
//           type="text"
//           style={{ fontSize: '12px', color: '#dcd9ff' }}
//           className="inputz"
//           placeholder="Optional memo"
//           value={memo}
//           onChange={(e) => setMemo(e.target.value)}
//         />
//       </div>
//       <div className="network-feez">
//         <span style={{ color: '#dcd9ff', fontSize: '14px' }}>Network Fee</span>
//         <span style={{ fontSize: '14px' }} className="fee-valuez">&lt; 0.01 USDT</span>
//       </div>
//       <button className="withdraw-button33" id="withdrawButton" onClick={handleWithdraw}>
//         Withdraw
//       </button>
//     </div>
//   );
// };

// export default WithdrawalForm;

//                  </sdfsdf> -->
//               <!-- <scrypt>
//                 import React, { useEffect, useState } from 'react';

// const WithdrawForm = () => {
//   const [address, setAddress] = useState('');
//   const [amount, setAmount] = useState('');
//   const [availableAmount, setAvailableAmount] = useState(0);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [addressError, setAddressError] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const response = await fetch('/api/getBalance', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer ' + localStorage.getItem('token'),
//           },
//         });
//         const data = await response.json();
//         const balance = parseFloat(data.balance);
//         setAvailableAmount(balance);
//         document.getElementById('availableAmount').textContent = balance.toFixed(3); // Display formatted balance
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     loadUserData();
//   }, []);

//   const validateForm = () => {
//     const isValidAmount = amount.trim().length > 0 &&
//       !amount.startsWith('0') &&
//       !isNaN(parseFloat(amount)) &&
//       parseFloat(amount) >= 10 &&
//       parseFloat(amount) <= availableAmount;

//     if (address.length === 42 && isValidAmount) {
//       setIsButtonDisabled(false);
//       setErrorMessage('');
//     } else {
//       setIsButtonDisabled(true);
//     }
//   };

//   const handleAddressChange = (e) => {
//     const value = e.target.value;
//     setAddress(value);

//     if (value.length !== 42) {
//       setAddressError('Invalid address');
//     } else {
//       setAddressError('');
//     }

//     validateForm();
//   };

//   const handleAmountChange = (e) => {
//     const value = e.target.value;
//     setAmount(value);
//     setErrorMessage('');

//     const inputAmount = parseFloat(value);

//     if (value.startsWith('0')) {
//       setErrorMessage('Minimum withdrawal amount is 10');
//     } else if (isNaN(inputAmount)) {
//       return; // Skip validation if input is not a number
//     } else if (inputAmount < 10) {
//       setErrorMessage('Minimum withdrawal amount is 10');
//     } else if (inputAmount > availableAmount) {
//       setErrorMessage('Insufficient amount');
//     }

//     validateForm();
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="addressInput">Address:</label>
//         <input
//           type="text"
//           id="addressInput"
//           value={address}
//           onChange={handleAddressChange}
//         />
//         {addressError && <div id="error-message2" style={{ color: 'red' }}>{addressError}</div>}
//       </div>
//       <div>
//         <label htmlFor="amountInput">Amount:</label>
//         <input
//           type="number"
//           id="amountInput"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//         {errorMessage && <div id="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
//       </div>
//       <div>
//         Available Amount: <span id="availableAmount">{availableAmount.toFixed(3)}</span>
//       </div>
//       <button
//         id="withdrawButton"
//         onClick={() => console.log('Withdraw clicked')}
//         disabled={isButtonDisabled}
//       >
//         Withdraw
//       </button>
//     </div>
//   );
// };

// export default WithdrawForm;
//               </scrypt> -->


//                    <!-- <scrit>import React, { useState } from 'react';
// import './styles.css'; // Optional if you have custom styles

// function ToggleButtons() {
//   const [isDepositActive, setIsDepositActive] = useState(true);

//   const handleDepositClick = () => setIsDepositActive(true);
//   const handleWithdrawClick = () => setIsDepositActive(false);

//   return (
//     <div>
//       {/* Toggle Buttons */}
//       <div className="toggle-buttons-custom">
//         <button
//           id="deposit-toggle-custom"
//           style={toggleButtonStyle}
//           className={`toggle-button-custom ${isDepositActive ? 'active' : ''}`}
//           onClick={handleDepositClick}
//         >
//           Deposit
//         </button>
//         <button
//           id="withdraw-toggle-custom"
//           style={toggleButtonStyle}
//           className={`toggle-button-custom ${!isDepositActive ? 'active' : ''}`}
//           onClick={handleWithdrawClick}
//         >
//           Withdraw
//         </button>
//       </div>

//       {/* Deposit Content */}
//       {isDepositActive && (
//         <div id="deposit-content-custom" className="content-section-custom active">
//           <h2>Deposit Section</h2>
//           <p>Here you can deposit your assets.</p>
//         </div>
//       )}

//       {/* Withdraw Content */}
//       {!isDepositActive && (
//         <div id="withdraw-content-custom" className="content-section-custom active">
//           <h2>Withdraw Section</h2>
//           <p>Here you can withdraw your assets.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// // Inline Styles
// const toggleButtonStyle = {
//   fontSize: '14px',
//   borderRadius: '10px',
//   paddingTop: '11px',
//   height: '60px',
//   width: '120px',
//   marginRight: '10px',
// };

// export default ToggleButtons;</scrit> -->
//                   </div>

//                  <!-- <scri>
//                   import React, { useState } from 'react';
// import './styles.css'; // Include your CSS here

// function ToggleComponent() {
//   const [activeSection, setActiveSection] = useState('deposit'); // 'deposit' or 'withdraw'

//   const handleToggle = (section) => setActiveSection(section);

//   return (
//     <div>
//       {/* Toggle Buttons */}
//       <div className="toggle-buttons-custom">
//         <button
//           id="deposit-toggle-custom"
//           className={`toggle-button-custom ${activeSection === 'deposit' ? 'active' : ''}`}
//           onClick={() => handleToggle('deposit')}
//         >
//           Deposit
//         </button>
//         <button
//           id="withdraw-toggle-custom"
//           className={`toggle-button-custom ${activeSection === 'withdraw' ? 'active' : ''}`}
//           onClick={() => handleToggle('withdraw')}
//         >
//           Withdraw
//         </button>
//       </div>

//       {/* Deposit Content */}
//       <div
//         id="deposit-content-custom"
//         className={`content-section-custom ${activeSection === 'deposit' ? 'active' : ''}`}
//       >
//         <h2>Deposit Section</h2>
//         <p>Here you can deposit your assets.</p>
//       </div>

//       {/* Withdraw Content */}
//       <div
//         id="withdraw-content-custom"
//         className={`content-section-custom ${activeSection === 'withdraw' ? 'active' : ''}`}
//       >
//         <h2>Withdraw Section</h2>
//         <p>Here you can withdraw your assets.</p>
//       </div>
//     </div>
//   );
// }

// export default ToggleComponent;
//                  </scri> -->

//                  <!-- <scrip>
//                   import React, { useState, useRef, useEffect } from 'react';
// import './styles.css'; // Optional CSS

// function CustomDropdown({ options, defaultValue }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(defaultValue);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => setIsOpen((prev) => !prev);

//   const handleOptionClick = (option) => {
//     setSelectedValue(option);
//     setIsOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener('click', handleClickOutside);
//     return () => window.removeEventListener('click', handleClickOutside);
//   }, []);

//   return (
//     <div className={`custom-dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
//       <div className="custom-dropdown-selected" onClick={toggleDropdown}>
//         <span className="custom-dropdown-selected-text">{selectedValue}</span>
//         <span className="custom-dropdown-arrow">▼</span>
//       </div>

//       {isOpen && (
//         <div className="custom-dropdown-options">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               className="custom-dropdown-option"
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Custom Dropdown in React</h1>
//       <CustomDropdown options={['USDT', 'ETH', 'BNB', 'USDC']} defaultValue="USDT" />
//       <CustomDropdown options={['ERC-20', 'BSC', 'Arbitrum One']} defaultValue="ERC-20" />
//     </div>
//   );
// }
//                  </scrip> -->
//                 </div>
//               </div>
//             </div>
//            <!-- <div>
//             import React, { useState, useEffect, useRef } from 'react';
// import './styles.css'; // Optional for styling

// function App() {
//   const [isTransferModalVisible, setTransferModalVisible] = useState(false);
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [futuresUSDT, setFuturesUSDT] = useState('0.00');
//   const [spotUSDT, setSpotUSDT] = useState('0.00');
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const transferModalRef = useRef(null);
//   const popupModalRef = useRef(null);

//   // Close modal when clicking outside
//   const handleClickOutside = (ref, callback) => (event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       callback(false);
//     }
//   };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     if (urlParams.get('showPopup') === 'true') {
//       setPopupVisible(true);
//       window.history.replaceState(null, '', window.location.pathname);
//     }

//     window.addEventListener('click', handleClickOutside(popupModalRef, setPopupVisible));
//     return () => window.removeEventListener('click', handleClickOutside(popupModalRef, setPopupVisible));
//   }, []);

//   const generateQRCode = (address) => {
//     const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
//       address
//     )}&size=150x150`;
//     setQrCodeUrl(url);
//   };

//   const copyAddress = (address) => {
//     navigator.clipboard.writeText(address).then(() => {
//       alert('Address copied to clipboard');
//     });
//   };

//   return (
//     <div>
//       <button onClick={() => setTransferModalVisible(true)} id="transfer-USDT-btn">
//         Transfer USDT
//       </button>
//       <button onClick={() => (window.location.search = '?showPopup=true')} id="deposit-btn">
//         Deposit
//       </button>

//       {isTransferModalVisible && (
//         <div className="modal" ref={transferModalRef}>
//           <div className="modal-content">
//             <p>Futures USDT Balance: {futuresUSDT}</p>
//             <p>Spot USDT Balance: {spotUSDT}</p>
//             <button onClick={() => setTransferModalVisible(false)}>Close</button>
//           </div>
//         </div>
//       )}

//       {isPopupVisible && (
//         <div className="popup-modal" ref={popupModalRef}>
//           <div className="popup-modal-content show">
//             <p>Deposit Address: <span id="address">0x123...abc</span></p>
//             <button onClick={() => generateQRCode('0x123...abc')}>Generate QR Code</button>
//             <img src={qrCodeUrl} alt="QR Code" style={{ display: qrCodeUrl ? 'block' : 'none' }} />
//             <button onClick={() => copyAddress('0x123...abc')}>Copy Address</button>
//             <button onClick={() => setPopupVisible(false)}>Close</button>
//           </div>
//         </div>
//       )}

//       <WalletMenu />
//     </div>
//   );
// }

// function WalletMenu() {
//   return (
//     <div id="icon2">
//       <div id="main-menu2" className="dropdown-content2">
//         <div className="balance-info">
//           <img style={{ width: '20px' }} src="img/USDT.png" alt="USDT" />
//         </div>
//         <hr className="separator3" />
//         <MenuItem imgSrc="img/activity.png" label="Spot" />
//         <MenuItem imgSrc="img/lock.png" label="Futures" />
//         <MenuItem imgSrc="img/contact.png" label="Copy Trade" />
//       </div>
//     </div>
//   );
// }

// function MenuItem({ imgSrc, label }) {
//   return (
//     <a href="#" className="menu-item">
//       <img src={imgSrc} alt={label} style={{ width: '20px', marginRight: '20px' }} />
//       <p>{label}</p>
//     </a>
//   );
// }

// export default App;
//            </div> -->
//            <!-- <div>
//             import React, { useState, useRef } from 'react';
// import './styles.css'; // Optional for styling

// const UserMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   const handleToggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     window.addEventListener('click', handleClickOutside);
//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div id="icon3">
//       <div
//         id="main-menu"
//         className={`dropdown-content ${isOpen ? 'open' : ''}`}
//         ref={menuRef}
//         style={{
//           marginRight: '20px',
//           width: '250px',
//           padding: '20px',
//           borderRadius: '10px',
//           zIndex: 10,
//           boxShadow: '0 4px 8px rgba(0.3, 0.3, 0.3, 0.3)',
//           display: isOpen ? 'block' : 'none', // Show/hide based on state
//         }}
//       >
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
//           <img src="img/pfp.png" className="pfp-large" style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt="Profile" />
//         </div>
//         <hr
//           className="separator3"
//           style={{
//             width: '70%',
//             margin: '18px auto',
//             border: 0,
//             height: '1.8px',
//             background: 'linear-gradient(to right, #ff8c00, #ff0080)',
//             boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//           }}
//         />
//         <MenuItem imgSrc="img/activity.png" label="Activity" />
//         <MenuItem imgSrc="img/lock.png" label="Privacy & security" />
//         <MenuItem imgSrc="img/contact.png" label="Contact" />
//         <MenuItem imgSrc="img/logout.png" label="Login / Logout" link="login.html" />
//       </div>
//       <button onClick={handleToggleMenu} style={{ cursor: 'pointer', borderRadius: '20px', padding: '0 10px', height: '45px' }}>
//         User Menu
//       </button>
//     </div>
//   );
// };

// const MenuItem = ({ imgSrc, label, link }) => {
//   return (
//     <a
//       href={link || '#'}
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         textDecoration: 'none',
//         marginBottom: '8px',
//       }}
//     >
//       <img src={imgSrc} alt={label} style={{ width: '22px', height: '22px', marginRight: '20px', marginLeft: '5px' }} />
//       <p style={{ margin: 0, fontSize: '16px' }}>{label}</p>
//     </a>
//   );
// };

// export default UserMenu;
//            </div> -->
//           <!-- <script>
//             import React, { useState, useRef, useEffect } from 'react';
// import './styles.css'; // Optional for styling

// const UserMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);
//   const iconRef = useRef(null);

//   const handleLogout = async () => {
//     await fetch('/logout', { method: 'POST' });
//     localStorage.removeItem('token');
//     window.location.href = '/login.html'; // Redirect to the login page
//   };

//   const handleToggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       if (!menuRef.current.matches(':hover') && !iconRef.current.matches(':hover')) {
//         setIsOpen(false);
//       }
//     }, 100); // Allow for a small delay for hover transition
//   };

//   // Close dropdown when clicking outside
//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target) && iconRef.current && !iconRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('click', handleClickOutside);
//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div id="icon3" ref={iconRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <button onClick={handleToggleMenu} style={{ cursor: 'pointer', borderRadius: '20px', padding: '0 10px', height: '45px' }}>
//         User Menu
//       </button>
//       {isOpen && (
//         <div
//           id="main-menu"
//           ref={menuRef}
//           className="dropdown-content"
//           style={{
//             marginRight: '20px',
//             width: '250px',
//             padding: '20px',
//             borderRadius: '10px',
//             zIndex: 10,
//             boxShadow: '0 4px 8px rgba(0.3, 0.3, 0.3, 0.3)',
//           }}
//         >
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
//             <img src="img/pfp.png" className="pfp-large" style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt="Profile" />
//           </div>
//           <hr
//             className="separator3"
//             style={{
//               width: '70%',
//               margin: '18px auto',
//               border: 0,
//               height: '1.8px',
//               background: 'linear-gradient(to right, #ff8c00, #ff0080)',
//               boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
//             }}
//           />
//           <MenuItem imgSrc="img/activity.png" label="Activity" />
//           <MenuItem imgSrc="img/lock.png" label="Privacy & security" />
//           <MenuItem imgSrc="img/contact.png" label="Contact" />
//           <div onClick={handleLogout} id="headerlogout-btn" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//             <img src="img/logout.png" style={{ width: '25px', height: '25px', marginRight: '20px' }} alt="Logout" />
//             <p style={{ margin: 0, fontSize: '16px' }}>Login / Logout</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const MenuItem = ({ imgSrc, label }) => {
//   return (
//     <a
//       href="#"
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         textDecoration: 'none',
//         marginBottom: '8px',
//       }}
//     >
//       <img src={imgSrc} alt={label} style={{ width: '22px', height: '22px', marginRight: '20px', marginLeft: '5px' }} />
//       <p style={{ margin: 0, fontSize: '16px' }}>{label}</p>
//     </a>
//   );
// };

// export default UserMenu;
//           </script> -->
//           </div>
//         </div>
//         <!-- <sdfsdfsdfsdfdsfsdfsdfsfsdfsdfsdf>
//           import React, { useState } from 'react';
// import './styles.css'; // Optional for styling

// const TradingPanel = () => {
//   const [futuresAssetType, setFuturesAssetType] = useState('');
//   const [betAmount, setBetAmount] = useState(1);
//   const [betLeverage, setBetLeverage] = useState(1);
//   const [limitAmount, setLimitAmount] = useState(1);
//   const [limitPrice, setLimitPrice] = useState('');
//   const [spotAssetType, setSpotAssetType] = useState('');
//   const [spotMarketAmount, setSpotMarketAmount] = useState(1);
//   const [spotLimitAmount, setSpotLimitAmount] = useState(1);
//   const [spotLimitPrice, setSpotLimitPrice] = useState('');

//   // Placeholder for price data
//   const futuresCurrentPrice = 'Loading...'; // Replace with actual price data
//   const spotCurrentPrice = 'Loading...'; // Replace with actual price data

//   const handleFuturesOrder = (type) => {
//     // Handle market or limit orders for futures
//     console.log(`Futures Order: ${type}, Bet Amount: ${betAmount}, Leverage: ${betLeverage}`);
//   };

//   const handleSpotOrder = (type) => {
//     // Handle market or limit orders for spot
//     console.log(`Spot Order: ${type}, Amount: ${spotMarketAmount}`);
//   };

//   return (
//     <div>
//       <div id="total-statistics" style={{ marginTop: '80px' }}></div>
//       <div id="now-price" style={{ margin: '10px' }}></div>

//       <div id="futures" className="tabcontent trading-panel">
//         <div id="futures-statistics"></div>
//         <div className="order-panel">
//           <div>
//             Asset Type:
//             <select
//               id="futures-asset-type"
//               style={{ width: '80px' }}
//               value={futuresAssetType}
//               onChange={(e) => setFuturesAssetType(e.target.value)}
//             >
//               <option value="">Select</option>
//               {/* Add options here */}
//             </select>
//             &nbsp;&nbsp;&nbsp;
//             <span className="money-type">Current Price:</span>
//             <span id="futures-current-price" className="money-value">
//               {futuresCurrentPrice}
//             </span>
//             <span className="money-unit">USDT</span>
//           </div>

//           <div>
//             <label style={{ color: 'rgb(255, 0, 0)', fontSize: '24px' }}>Market Order:</label>&nbsp;&nbsp;
//             <label>Bet Amount:</label>
//             <input
//               type="number"
//               id="bet-amount"
//               min="1"
//               max="100"
//               style={{ width: '80px', fontSize: '20px' }}
//               value={betAmount}
//               onChange={(e) => setBetAmount(e.target.value)}
//             />
//             <span className="money-unit">(USDT)</span>&nbsp;&nbsp;
//             <label>Leverage:</label>
//             <input
//               type="number"
//               id="bet-leverage"
//               min="1"
//               max="300"
//               value={betLeverage}
//               style={{ width: '50px', fontSize: '20px' }}
//               onChange={(e) => setBetLeverage(e.target.value)}
//             />
//             &nbsp;&nbsp;
//             <button
//               id="long-button"
//               className="playbutttton"
//               style={{ marginTop: '15px' }}
//               onClick={() => handleFuturesOrder('Long')}
//             >
//               Long
//             </button>&nbsp;&nbsp;
//             <button
//               id="short-button"
//               className="playbutttton"
//               style={{ marginTop: '15px' }}
//               onClick={() => handleFuturesOrder('Short')}
//             >
//               Short
//             </button>&nbsp;&nbsp;
//           </div>

//           <div>
//             <label style={{ color: 'rgb(255, 0, 0)', fontSize: '24px' }}>Limit Order:</label>&nbsp;&nbsp;
//             <label>Bet Amount:</label>
//             <input
//               type="number"
//               id="limit-amount"
//               min="1"
//               max="100"
//               style={{ width: '80px', fontSize: '20px' }}
//               value={limitAmount}
//               onChange={(e) => setLimitAmount(e.target.value)}
//             />
//             <span className="money-unit">(USDT)</span>&nbsp;&nbsp;
//             <label>Leverage:</label>
//             <input
//               type="number"
//               id="limit-leverage"
//               min="1"
//               max="300"
//               value="1"
//               style={{ width: '50px', fontSize: '20px' }}
//               readOnly
//             />
//             &nbsp;&nbsp;
//             <label>Limit Price:</label>
//             <input
//               type="number"
//               id="limit-price"
//               style={{ width: '100px', fontSize: '20px' }}
//               value={limitPrice}
//               onChange={(e) => setLimitPrice(e.target.value)}
//             />
//             <span className="money-unit">(USDT)</span>&nbsp;&nbsp;
//             <button
//               id="limit-long-button"
//               className="playbutttton"
//               style={{ marginTop: '15px' }}
//               onClick={() => handleFuturesOrder('Limit Long')}
//             >
//               Long
//             </button>&nbsp;&nbsp;
//             <button
//               id="limit-short-button"
//               className="playbutttton"
//               style={{ marginTop: '15px' }}
//               onClick={() => handleFuturesOrder('Limit Short')}
//             >
//               Short
//             </button>&nbsp;&nbsp;
//           </div>
//         </div>

//         <h3 style={{ color: '#ff8c00' }}>Open Positions</h3>
//         <div id="futures-open-positions"></div>
//         <h3 style={{ color: '#ff8c00' }}>Open Orders</h3>
//         <div id="futures-open-orders"></div>
//         <h3 style={{ color: '#ff8c00' }}>Closed Positions</h3>
//         <div id="futures-closed-positions"></div>
//       </div>

//       <div id="spot" className="tabcontent trading-panel">
//         <div id="spot-statistics"></div><br />
//         <div id="spot-assets-statistics"></div>
//         <div className="order-panel">
//           <div>
//             Asset Type:
//             <select
//               id="spot-asset-type"
//               style={{ width: '80px' }}
//               value={spotAssetType}
//               onChange={(e) => setSpotAssetType(e.target.value)}
//             >
//               <option value="">Select</option>
//               {/* Add options here */}
//             </select>
//             &nbsp;&nbsp;&nbsp;
//             <span className="money-type">Current Price:</span>
//             <span id="spot-current-price" className="money-value">
//               {spotCurrentPrice}
//             </span>
//             <span className="money-unit">USDT</span>&nbsp;&nbsp;&nbsp;&nbsp;
//           </div>

//           <div>
//             <label style={{ color: 'rgb(255, 0, 0)', fontSize: '24px' }}>Market:</label>&nbsp;&nbsp;
//             <label>Amount:</label>
//             <input
//               type="number"
//               id="spot-market-amount"
//               min="1"
//               max="100"
//               style={{ width: '80px', fontSize: '20px' }}
//               value={spotMarketAmount}
//               onChange={(e) => setSpotMarketAmount(e.target.value)}
//             />
//             <span className="money-unit" id="spot-market-unit"></span>&nbsp;&nbsp;
//             <button
//               id="market-buy-button"
//               className="playbutttton"
//               style={{ marginTop: '15px' }}
//               onClick={() => handleSpotOrder('Buy')}
//             >
//               Buy
//             </button>&nbsp;&nbsp;
//             <button
//               id="market-sell-button"
//               className="playbutttton"
//               style={{ marginTop: '15px' }}
//               onClick={() => handleSpotOrder('Sell')}
//             >
//               Sell
//             </button>
//           </div>

//           <div>
//             <label style={{ color: 'rgb(255, 0, 0)', fontSize: '24px' }}>Limit:</label>&nbsp;&nbsp;
//             <label>Amount:</label>
//             <input
//               type="number"
//               id="spot-limit-amount"
//               min="1"
//               max="100"
//               style={{ width: '80px', fontSize: '20px' }}
//               value={spotLimitAmount}
//               onChange={(e) => setSpotLimitAmount(e.target.value)}
//             />
//             <span className="money-unit" id="spot-limit-unit"></span>&nbsp;&nbsp;
//             <label>Price:</label>
//             <input
//               type="number"
//               id="spot-limit-price"
//               min="1"
//               max="100

//         </sdfsdfsdfsdfdsfsdfsdfsfsdfsdfsdf> -->
//       </div>
//     </div>
//     <!-- <div>
//       import React, { useState } from 'react';
// import './styles.css'; // Optional for styling

// const Modals = () => {
//   const [isPartialClosingOpen, setPartialClosingOpen] = useState(false);
//   const [isTransferModalOpen, setTransferModalOpen] = useState(false);
//   const [partialClosingPercent, setPartialClosingPercent] = useState(100);
//   const [transferAmount, setTransferAmount] = useState(1);
//   const [transferType, setTransferType] = useState('fromFutures');
//   const [futuresBalance, setFuturesBalance] = useState(0); // Fetch or manage this data
//   const [spotBalance, setSpotBalance] = useState(0); // Fetch or manage this data

//   const partialClose = () => {
//     console.log(`Partial Close: ${partialClosingPercent}%`);
//     // Add your partial closing logic here
//     setPartialClosingOpen(false);
//   };

//   const transferUSDT = () => {
//     console.log(`Transferring ${transferAmount} USDT from ${transferType}`);
//     // Add your transfer logic here
//     setTransferModalOpen(false);
//   };

//   return (
//     <div>
//       {/* Button to open the modals for testing */}
//       <button onClick={() => setPartialClosingOpen(true)}>Open Partial Closing Modal</button>
//       <button onClick={() => setTransferModalOpen(true)}>Open Transfer Modal</button>

//       {/* Partial Closing Modal */}
//       {isPartialClosingOpen && (
//         <div id="partial-closing-modal" className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setPartialClosingOpen(false)}>&times;</span>
//             <h2 style={{ color: '#16171a' }}>Partial Closing</h2>
//             <br />
//             <p style={{ color: '#16171a', fontSize: '20px' }}>
//               <input
//                 id="particalClosingPercent"
//                 type="number"
//                 min="1"
//                 max="100"
//                 value={partialClosingPercent}
//                 onChange={(e) => setPartialClosingPercent(e.target.value)}
//               />%
//               &nbsp;&nbsp;
//               <button onClick={partialClose}>Confirm</button>
//             </p>
//           </div>
//         </div>
//       )}

//       {/* USDT Transfer Modal */}
//       {isTransferModalOpen && (
//         <div id="transfer-USDT-modal" className="modal">
//           <div className="modal-content-transfer">
//             <span className="close" onClick={() => setTransferModalOpen(false)}>&times;</span>
//             <h2>USDT Transfer</h2>
//             <br />
//             <p>
//               <span className="money-type">Est. Futures Balance(USDT): </span>
//               <span className="money-value" id="transfer-modal-futures-USDT">{futuresBalance}</span>
//               &nbsp;&nbsp;&nbsp;&nbsp;
//               <span className="money-type">Est. Spot Balance(USDT): </span>
//               <span className="money-value" id="transfer-modal-spot-USDT">{spotBalance}</span>
//             </p>
//             <br />
//             <p style={{ fontSize: '20px' }}>
//               <span>Mode:</span>
//               <select
//                 name="transferType"
//                 id="transfer-USDT-type"
//                 value={transferType}
//                 onChange={(e) => setTransferType(e.target.value)}
//               >
//                 <option value="fromFutures">Futures -> Spot</option>
//                 <option value="fromSpot">Spot -> Futures</option>
//               </select>
//               <span>Amount:</span>
//               <input
//                 type="number"
//                 min="1"
//                 max="100"
//                 id="transfer-USDT-amount"
//                 style={{ fontSize: '20px', margin: '10px' }}
//                 value={transferAmount}
//                 onChange={(e) => setTransferAmount(e.target.value)}
//               />
//               <span className="money-unit">(USDT)</span>
//               <button id="transfer-USDT-btn" onClick={transferUSDT}>Transfer</button>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Modals;
//     </div> -->
//     <script>
//       let intervalId;

//       const assetTypes = ["BTC", "ETH", "BNB", "NEO", "LTC", "SOL", "XRP", "DOT"];
//       let futuresAssetType = "BTC";
//       let spotAssetType = "BTC";

//       let totalUSDTBalance = 0;
//       let totalValue = 0;
//       let futuresUSDTBalance = 0; // Initialize balance
//       let spotUSDTBalance = 0; // Initialize balance

//       let futuresPositionsCount = 0;
//       let futuresClosedPositionsCount = 0;
//       let spotPositionsCount = 0;
//       let spotClosedPositionsCount = 0;

//       let closingPosition;

//       let spotBalances = [];
//       let currentPrices = [];

//       let tmp = "";

//       assetTypes.forEach((futures, index) => {
//         tmp += "<option>" + futures + "</option>";
//       });

//       document.getElementById("futures-asset-type").innerHTML = tmp;
//       document.getElementById("spot-asset-type").innerHTML = tmp;

//       function fetchUserData() {
//         fetch("/api/getBalance", {
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             futuresUSDTBalance = data.futuresUSDTBalance; // Update futuresUSDTBalance from the server
//             spotUSDTBalance = data.spotUSDTBalance; // Update spotUSDTBalance from the server
//             // document.getElementById("credit-value").textContent = balance.toFixed(2);
//             // updateBalanceDisplay();
//           })
//           .catch((error) => console.error("Error fetching balance:", error));

          
//         spotBalances = [];
//         spotBalances.push(spotUSDTBalance);
//         // Fetch current market price
//         fetch("/api/getCurrentPrice", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//           .then((response) => response.json())
//           .then((priceData) => {
//             currentPrices = priceData.currentPrices;

//             let priceText = "";
//             priceData.currentPrices.forEach((price, index) => {
//               spotBalances.push(0);
//               priceText +=
//                 "<span class='money-type'>" + price["assetType"] + ":</span>";
//               priceText +=
//                 "<span class='money-value'>" +
//                   new Intl.NumberFormat('en-US').format(price["price"]) +
//                 "</span>";
//               priceText += "&nbsp;&nbsp;&nbsp;&nbsp;";
//               if (index % 8 == 7) priceText += "<br>";
//             });

//             document.getElementById("now-price").innerHTML = priceText;

//             document.getElementById("futures-current-price").textContent = Intl.NumberFormat('en-US').format(
//               currentPrices.filter(
//                 (item) => item["assetType"] == futuresAssetType
//               )[0].price);
//             document.getElementById("spot-current-price").textContent = Intl.NumberFormat('en-US').format(
//               currentPrices.filter(
//                 (item) => item["assetType"] == spotAssetType
//               )[0].price);

//             fetch("/api/getPositions", {
//               method: "POST",
//               headers: {
//                 Authorization: "Bearer " + localStorage.getItem("token"),
//                 "Content-Type": "application/json",
//               },
//             })
//               .then((response) => response.json())
//               .then((data) => {
//                 const futuresPositionsDiv = document.getElementById("futures-open-positions");
//                 const futuresOpenOrdersDiv = document.getElementById("futures-open-orders");
//                 const futuresClosedPositionsDiv = document.getElementById("futures-closed-positions");
        
//                 const spotPositionsDiv = document.getElementById("spot-open-positions");
//                 const spotOpenOrdersDiv = document.getElementById("spot-open-orders");
//                 const spotClosedPositionsDiv = document.getElementById("spot-closed-positions");

//                 let count = 0;
//                 let futuresUnrealizedPL = 0;
//                 let futuresPositionsAmount = 0;

//                 if (data.futuresPositions) {
//                   count =
//                     data.futuresPositions.length +
//                     data.futuresPositions.filter(
//                       (position) => position.orderLimit == 1
//                     ).length;
//                   if (count !== futuresPositionsCount) {
//                     futuresPositionsDiv.innerHTML = ""; // Clear previous positions
//                     futuresOpenOrdersDiv.innerHTML = ""; // Clear previous limit orders
//                   }

//                   data.futuresPositions.forEach((position) => {
//                     // futuresBalances[assetTypes.indexOf(position.assetType) + 1] += position.amount;
//                     let currentPrice = currentPrices.filter(
//                       (item) => item["assetType"] == position.assetType
//                     )[0].price;
//                     let unrealizedPL = calculateUnrealizedPL(
//                       position.entryPrice,
//                       currentPrice,
//                       position.amount,
//                       position.leverage,
//                       position.positionType
//                     );
//                     let positionDiv = document.createElement("div");

//                     if (position.orderLimit == 1) {
//                       let startTrading = 0;
//                       if (
//                         (position.entryPrice < position.limitPrice &&
//                           position.limitPrice < currentPrice) ||
//                         (position.entryPrice > position.limitPrice &&
//                           position.limitPrice > currentPrice)
//                       ) {
//                         fetch("/api/startTrade", {
//                           method: "POST",
//                           headers: {
//                             Authorization:
//                               "Bearer " + localStorage.getItem("token"),
//                             "Content-Type": "application/json",
//                           },
//                           body: JSON.stringify({
//                             positionId: position.id,
//                           }),
//                         })
//                           .then((response) => response.json())
//                           .catch((error) =>
//                             console.error("Error starting Trade:", error)
//                           );

//                         position.orderLimit = 0;
//                       } else {
//                         unrealizedPL = 0;
//                       }
//                     }
//                     if (
//                       unrealizedPL < 0 &&
//                       Math.abs(unrealizedPL) >= position.amount * 0.8
//                     ) {
//                       futuresUnrealizedPL -= position.amount;
//                       futuresPositionsAmount += position.amount;
//                       closeFuturesPosition(position, 3);
//                       return;
//                     } else {
//                       futuresUnrealizedPL += unrealizedPL;
//                       // if (!position.orderLimit)
//                       futuresPositionsAmount += position.amount;
//                       if (
//                         (position.positionType == "Long" &&
//                           currentPrice > position.tp) ||
//                         (position.positionType == "Short" &&
//                           currentPrice < position.tp)
//                       ) {
//                         closeFuturesPosition(position, 1);
//                         return;
//                       }
//                       if (
//                         (position.positionType == "Long" &&
//                           currentPrice < position.sl) ||
//                         (position.positionType == "Short" &&
//                           currentPrice > position.sl)
//                       ) {
//                         closeFuturesPosition(position, 2);
//                         return;
//                       } else {
//                         if (count !== futuresPositionsCount) {
//                           positionDiv.textContent = `
//                                         ${1 - position.orderLimit}-${
//                             position.orderType
//                           }-${position.positionType}- ${position.assetType}- 
//                                         Amount: $${position.amount},
//                                         Leverage: ${position.leverage}X, 
//                                         Entry: $${position.entryPrice},
//                                     `;
//                           if (position.orderType == "limit")
//                             positionDiv.textContent += ` Limit Price: $${position.limitPrice},`;

//                           let liquidationPrice = 0;
//                           if (position.positionType == "Short")
//                             liquidationPrice =
//                               (position.entryPrice *
//                                 (125 + position.leverage / 100)) /
//                               125;
//                           if (position.positionType == "Long")
//                             liquidationPrice =
//                               (position.entryPrice *
//                                 (125 - 100 / position.leverage)) /
//                               125;

//                           positionDiv.textContent += ` Liquidation: $${liquidationPrice.toFixed(
//                             2
//                           )},`;

//                           const unPLLabel = document.createElement("label");
//                           unPLLabel.textContent = `Unrealized P/L: $${unrealizedPL.toFixed(
//                             2
//                           )},`;
//                           unPLLabel.id = "un" + position.id;
//                           positionDiv.appendChild(unPLLabel);

//                           const tpLabel = document.createElement("label");
//                           tpLabel.textContent = "TP: ";
//                           positionDiv.appendChild(tpLabel);

//                           const tpInput = document.createElement("input");
//                           tpInput.type = "number";
//                           tpInput.id = "tp" + position.id;
//                           tpInput.style.width = "80px";
//                           if (position.tp > 0 && position.tp < 10000000)
//                             tpInput.value = position.tp;
//                           positionDiv.appendChild(tpInput);

//                           const slLabel = document.createElement("label");
//                           slLabel.textContent = "SL: ";
//                           positionDiv.appendChild(slLabel);

//                           const slInput = document.createElement("input");
//                           slInput.type = "number";
//                           slInput.id = "sl" + position.id;
//                           slInput.style.width = "80px";
//                           if (position.sl > 0 && position.sl < 10000000)
//                             slInput.value = position.sl;
//                           positionDiv.appendChild(slInput);

//                           const saveButton = document.createElement("button");
//                           saveButton.textContent = "Save";
//                           saveButton.onclick = () => saveTPSL(position);
//                           positionDiv.appendChild(saveButton);
//                           positionDiv.append(" ");

//                           // Create close button
//                           const closeButton = document.createElement("button");
//                           closeButton.textContent = "Close";
//                           closeButton.onclick = () => {
//                             closingPosition = position;
//                             partialClosingModal.style.display = "block";
//                           };
//                           // closeButton.onclick = () => closeFuturesPosition(position, 0);
//                           positionDiv.appendChild(closeButton); // Add close button to position div

//                           if (position.orderType == "market") {
//                             if (position.positionType == "Long")
//                               positionDiv.style.backgroundColor = "#232323";
//                             if (position.positionType == "Short")
//                               positionDiv.style.backgroundColor = "#464646";
//                           }
//                           if (position.orderType == "limit") {
//                             if (position.orderLimit == 0) {
//                               if (position.positionType == "Long")
//                                 positionDiv.style.backgroundColor = "#853467";
//                               if (position.positionType == "Short")
//                                 positionDiv.style.backgroundColor = "#925743";
//                             } else {
//                               if (position.positionType == "Long")
//                                 positionDiv.style.backgroundColor = "#295843";
//                               if (position.positionType == "Short")
//                                 positionDiv.style.backgroundColor = "#694456";
//                             }
//                           }

//                           if (position.orderLimit) {
//                             futuresOpenOrdersDiv.appendChild(positionDiv);
//                           } else {
//                             futuresPositionsDiv.appendChild(positionDiv);
//                           }
//                         } else {
//                           document.getElementById(
//                             "un" + position.id
//                           ).textContent =
//                             "Unrealized P/L: " + unrealizedPL.toFixed(2) + ",";
//                         }
//                       }
//                     }
//                   });
//                   futuresPositionsCount = count;
//                 }

//                 if (data.closedFuturesPositions) {
//                   count = data.closedFuturesPositions.length;
//                   if (count !== futuresClosedPositionsCount)
//                     futuresClosedPositionsDiv.innerHTML = ""; // Clear previous closed positions

//                   data.closedFuturesPositions.forEach((position) => {
//                     let positionDiv = document.createElement("div");

//                     if (count !== futuresClosedPositionsCount) {
//                       positionDiv.textContent = `
//                                     ${1 - position.orderLimit}-${
//                         position.orderType
//                       }-${position.positionType}-${position.assetType}- 
//                                     Amount: $${position.amount},
//                                     Leverage: ${position.leverage}X, 
//                                     Entry: $${position.entryPrice},
//                                     Exit: $${position.exitPrice},
//                                 `;
//                       if (position.orderType == "limit")
//                         positionDiv.textContent += ` Limit Price: $${position.limitPrice},`;

//                       let liquidationPrice = 0;
//                       if (position.positionType == "Short")
//                         liquidationPrice =
//                           (position.entryPrice *
//                             (125 + position.leverage / 100)) /
//                           125;
//                       if (position.positionType == "Long")
//                         liquidationPrice =
//                           (position.entryPrice *
//                             (125 - 100 / position.leverage)) /
//                           125;

//                       positionDiv.textContent += ` Liquidation: $${liquidationPrice.toFixed(
//                         2
//                       )},`;

//                       if (position.tp != 0 && position.tp != 100000000) {
//                         positionDiv.textContent += ` TP: $${position.tp.toFixed(
//                           2
//                         )},`;
//                       }

//                       if (position.sl != 0 && position.sl != 100000000) {
//                         positionDiv.textContent += ` SL: $${position.sl.toFixed(
//                           2
//                         )},`;
//                       }

//                       positionDiv.textContent += ` realized P/L: $${position.realizedPL.toFixed(
//                         2
//                       )},`;

//                       let closedReason = "";
//                       switch (position.closedReason) {
//                         case 0:
//                           closedReason = "by User";
//                           break;
//                         case 1:
//                           closedReason = "by TP";
//                           break;
//                         case 2:
//                           closedReason = "by SL";
//                           break;
//                         case 3:
//                           closedReason = "by Liquidaion";
//                           break;
//                         case 4:
//                           closedReason = "partially";
//                           break;
//                       }

//                       positionDiv.textContent += ` closed ${closedReason},`;

//                       if (position.orderType == "market") {
//                         if (position.positionType == "Long")
//                           positionDiv.style.backgroundColor = "#232323";
//                         if (position.positionType == "Short")
//                           positionDiv.style.backgroundColor = "#464646";
//                       }
//                       if (position.orderType == "limit") {
//                         if (position.orderLimit == 0) {
//                           if (position.positionType == "Long")
//                             positionDiv.style.backgroundColor = "#853467";
//                           if (position.positionType == "Short")
//                             positionDiv.style.backgroundColor = "#925743";
//                         } else {
//                           if (position.positionType == "Long")
//                             positionDiv.style.backgroundColor = "#295843";
//                           if (position.positionType == "Short")
//                             positionDiv.style.backgroundColor = "#694456";
//                         }
//                       }

//                       futuresClosedPositionsDiv.appendChild(positionDiv);
//                     }
//                   });
//                   futuresClosedPositionsCount = count;
//                 }

//                 if (data.spotPositions) {
//                   count =
//                     data.spotPositions.length +
//                     data.spotPositions.filter(
//                       (position) => position.orderLimit == 1
//                     ).length;
//                   if (count !== spotPositionsCount) {
//                     spotPositionsDiv.innerHTML = ""; // Clear previous positions
//                     spotOpenOrdersDiv.innerHTML = ""; // Clear previous limit orders
//                   }

//                   data.spotPositions.forEach((position) => {
//                     if(position.positionType=='buy'){
//                       spotBalances[assetTypes.indexOf(position.assetType) + 1] += position.amount;
//                     }
//                     if(position.positionType=='sell'){
//                       spotBalances[assetTypes.indexOf(position.assetType) + 1] -= position.amount;
//                     }

//                     let currentPrice = currentPrices[assetTypes.indexOf(position.assetType)].price;

//                     if (position.orderLimit == 1) {
//                       let startTrading = 0;
//                       if (
//                         (position.entryPrice < position.limitPrice &&
//                           position.limitPrice < currentPrice) ||
//                         (position.entryPrice > position.limitPrice &&
//                           position.limitPrice > currentPrice)
//                       ) {
//                         fetch("/api/startTrade", {
//                           method: "POST",
//                           headers: {
//                             Authorization:
//                               "Bearer " + localStorage.getItem("token"),
//                             "Content-Type": "application/json",
//                           },
//                           body: JSON.stringify({
//                             positionId: position.id,
//                           }),
//                         })
//                           .then((response) => response.json())
//                           .catch((error) =>
//                             console.error("Error starting spot Trading:", error)
//                           );

//                         position.orderLimit = 0;
//                       }
//                     }

//                     let positionDiv = document.createElement("div");
                    
//                     if (count !== spotPositionsCount) {
//                       positionDiv.textContent = `
//                                     ${1 - position.orderLimit}-${
//                         position.orderType
//                       }-${position.positionType}-  
//                                     Amount: ${position.amount} (${position.assetType})-
//                                     Entry Price: ${position.entryPrice}(USDT),
//                                 `;
//                       if (position.orderType == "limit")
//                         positionDiv.textContent += ` Limit Price: $${position.limitPrice},`;
                     
//                       if (position.orderType == "market") {
//                         if (position.positionType == "buy")
//                           positionDiv.style.backgroundColor = "#232323";
//                         if (position.positionType == "Sell")
//                           positionDiv.style.backgroundColor = "#464646";
//                       }
//                       if (position.orderType == "limit") {
//                         if (position.orderLimit == 0) {
//                           if (position.positionType == "buy")
//                             positionDiv.style.backgroundColor = "#853467";
//                           if (position.positionType == "sell")
//                             positionDiv.style.backgroundColor = "#925743";
//                         } else {
//                           if (position.positionType == "buy")
//                             positionDiv.style.backgroundColor = "#295843";
//                           if (position.positionType == "sell")
//                             positionDiv.style.backgroundColor = "#694456";
//                         }
//                       }

//                       if (position.orderLimit) {
//                         const closeButton = document.createElement("button");
//                         closeButton.textContent = "Close";
//                         closeButton.onclick = () => {
//                           closeSpotPosition(position);
//                         };
//                         positionDiv.appendChild(closeButton); // Add close button to position div

//                         spotOpenOrdersDiv.appendChild(positionDiv);
//                       } else {
//                         spotPositionsDiv.appendChild(positionDiv);
//                       }
//                     }
//                   });
//                   spotPositionsCount = count;
//                 }
                
//                 if (data.closedSpotPositions) {
//                   count = data.closedSpotPositions.length;
//                   if (count !== spotClosedPositionsCount)
//                     spotClosedPositionsDiv.innerHTML = ""; // Clear previous closed positions

//                   data.closedSpotPositions.forEach((position) => {
//                     let positionDiv = document.createElement("div");

//                     if (count !== spotClosedPositionsCount) {
//                       positionDiv.textContent = `
//                                     ${1 - position.orderLimit}-${
//                         position.orderType
//                       }-${position.positionType}- 
//                                     Amount: ${position.amount}(${position.assetType}),
//                                     Entry Price: ${position.entryPrice}(USDT),
//                                 `;
//                       if (position.orderType == "limit")
//                         positionDiv.textContent += ` Limit Price: $${position.limitPrice},`;
//                       if (position.orderType == "limit") {
//                         if (position.orderLimit == 1) {
//                           if (position.positionType == "sell")
//                             positionDiv.style.backgroundColor = "#295843";
//                           if (position.positionType == "buy")
//                             positionDiv.style.backgroundColor = "#694456";
//                         }
//                       }

//                       spotClosedPositionsDiv.appendChild(positionDiv);
//                     }
//                   });
//                   spotClosedPositionsCount = count;
//                 }

//                 //---------------futures statistics--------------------------------
//                 let statisticsBar = "";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Futures Balance (USDT):</span>";
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     new Intl.NumberFormat('en-US').format(
//                     futuresUSDTBalance.toFixed(2)
//                   ) +
//                   "</span>";
//                 statisticsBar += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Futures Value (USDT):</span>";
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     new Intl.NumberFormat('en-US').format(
//                     (futuresUSDTBalance + futuresPositionsAmount + futuresUnrealizedPL).toFixed(2)
//                   ) +
//                   "</span>";
//                 statisticsBar += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Futures Cost (USDT):</span>";
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     Intl.NumberFormat('en-US').format(futuresPositionsAmount) +
//                   "</span>";
//                 statisticsBar += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Futures Unrealized PNL (USDT):</span>";
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     Intl.NumberFormat('en-US').format(futuresUnrealizedPL.toFixed(2)) +
//                   "</span>";

//                 document.getElementById("futures-statistics").innerHTML =
//                   statisticsBar;

//                 //----------------spot statistics---------------------------------------
//                 statisticsBar = "";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Spot Balance (USDT):</span>";
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     new Intl.NumberFormat('en-US').format(
//                     spotUSDTBalance.toFixed(2)
//                   ) +
//                   "</span>";
//                 statisticsBar += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Spot Value (USDT):</span>";
//                 let spotValue = spotUSDTBalance;
//                 spotBalances.forEach((balance, index) => {
//                   if(index > 0){
//                     spotValue+=parseFloat(balance) * currentPrices[index-1].price;
//                   }
//                 })
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     new Intl.NumberFormat('en-US').format(
//                     spotValue.toFixed(2)
//                   ) +
//                   "</span>";

//                 document.getElementById("spot-statistics").innerHTML =
//                   statisticsBar;
//                 //---------------spot asset statistics-----------------------------------
//                 statisticsBar = "<span class='money-type'>Est. Balances: </span>";
//                 spotBalances.forEach((balance, index) => {
//                   if(!index){
//                     statisticsBar +=
//                     "<span class='money-value'>" +
//                     new Intl.NumberFormat('en-US').format(balance.toFixed(2)) +
//                     "</span>";
//                     statisticsBar +=
//                     "<span class='money-unit'> USDT</span>";
//                   }else{
//                     statisticsBar +=
//                     "<span class='money-value'>" +
//                       new Intl.NumberFormat('en-US').format(balance.toFixed(2)) +
//                     "</span>";
//                     statisticsBar +=
//                     "<span class='money-unit'> " + assetTypes[index-1] + "</span>";
//                   }
//                   statisticsBar += "&nbsp;&nbsp;&nbsp;&nbsp;";
//                   if (index % 10 == 9) statisticsBar += "<br>"; 
//                 });

//                 document.getElementById("spot-assets-statistics").innerHTML =
//                   statisticsBar;
                
//                 //------------------- total statistics --------------------
//                 statisticsBar = "";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Total Balance (USDT):</span>";
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     new Intl.NumberFormat('en-US').format(
//                     (futuresUSDTBalance + spotUSDTBalance).toFixed(2)
//                   ) +
//                   "</span>";
//                 statisticsBar += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//                 statisticsBar +=
//                   "<span class='money-type'>Est. Total Value (USDT):</span>";
//                 totalValue = spotUSDTBalance;
//                 spotBalances.forEach((balance, index) => {
//                   if(index > 0){
//                     totalValue+=parseFloat(balance) * currentPrices[index-1].price;
//                   }
//                 })
//                 totalValue += futuresUSDTBalance + futuresPositionsAmount + futuresUnrealizedPL;
//                 statisticsBar +=
//                   "<span class='money-value'>" +
//                     new Intl.NumberFormat('en-US').format(
//                     totalValue.toFixed(2)
//                   ) +
//                   "</span>";

//                 document.getElementById("total-statistics").innerHTML =
//                   statisticsBar;
                
//                 //---------------------------------------------------------

//                 fetch("/api/updateValue", {
//                   method: "POST",
//                   headers: {
//                     Authorization: "Bearer " + localStorage.getItem("token"),
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({
//                       futuresPositionsAmount,
//                       futuresUnrealizedPL,
//                       spotValue,
//                       totalValue,
//                   }),
//                 })
//                   .then((response) => response.json())
//                   .catch((error) => console.error());
//               })
//               .catch((error) =>
//                 console.error("Error fetching positions:", error)
//               );
//           })
//           .catch((error) =>
//             console.error("Error fetching current price:", error)
//           );
//       }

//       function calculateUnrealizedPL(
//         entryPrice,
//         currentPrice,
//         amount,
//         leverage,
//         positionType
//       ) {
//         let profitLoss = 0;
//         const priceDifference = (currentPrice - entryPrice) / entryPrice; // Percentage change

//         if (positionType === "Long") {
//           profitLoss = amount * priceDifference; // Long: profit when price goes up
//         } else if (positionType === "Short") {
//           profitLoss = amount * -priceDifference; // Short: profit when price goes down
//         }

//         return profitLoss * leverage;
//       }

//       // Place a long or short bet
//       function futuresTrading(positionType, orderType) {
//         let betAmount = 0;
//         let leverage = 0;
//         let limitPrice = 0;
//         if (orderType == "market") {
//           betAmount = parseFloat(document.getElementById("bet-amount").value);
//           leverage = parseFloat(document.getElementById("bet-leverage").value);
//         }
//         if (orderType == "limit") {
//           betAmount = parseFloat(document.getElementById("limit-amount").value);
//           leverage = parseFloat(
//             document.getElementById("limit-leverage").value
//           );
//           limitPrice = parseFloat(document.getElementById("limit-price").value);
//           if (isNaN(limitPrice)) {
//             alert("Please enter a valid Limit Price");
//             return;
//           }
//         }

//         if (isNaN(betAmount) || betAmount <= 0) {
//           alert("Please enter a valid bet amount.");
//           return;
//         }
//         if (isNaN(leverage) || leverage < 1 || leverage > 300) {
//           alert("Please enter a valid bet amount.");
//           return;
//         }

//         fetch("/api/openFuturesPosition", {
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             futuresAssetType,
//             positionType: positionType === "long" ? "Long" : "Short",
//             orderType: orderType,
//             amount: betAmount,
//             leverage: leverage,
//             limitPrice: limitPrice,
//           }),
//         })
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Network response was not ok");
//             }
//             return response.json();
//           })
//           .then((data) => {
//             fetchUserData();
//             alert(`Placed a ${positionType} bet of $${betAmount}`);
//           })
//           .catch((error) => {
//             console.error("Error placing bet:", error);
//             alert("Error placing bet. Please try again.");
//           });
//       }

//       function spotTrading(positionType, orderType) {
//         let amount = 0;
//         let limitPrice = 0;
//         if (orderType == "market") {
//           amount = parseFloat(document.getElementById("spot-market-amount").value);
//         }
//         if (orderType == "limit") {
//           amount = parseFloat(document.getElementById("spot-limit-amount").value);
//           limitPrice = parseFloat(document.getElementById("spot-limit-price").value);
//           if (isNaN(limitPrice)) {
//             alert("Please enter a valid Limit Price");
//             return;
//           }
//         }

//         if (isNaN(amount) || amount <= 0) {
//           alert("Please enter a valid amount.");
//           return;
//         }

//         if (positionType=='buy'){
//           if(spotUSDTBalance < amount * currentPrices[assetTypes.indexOf(spotAssetType)].price){
//             alert("Insufficient USDT");
//             return;
//           }
//         }

//         if (positionType=='sell'){
//           if(amount > spotBalances[assetTypes.indexOf(spotAssetType)+1]){
//             alert("Insufficient "+ spotAssetType);
//             return;
//           }
//         }

//         fetch("/api/openSpotPosition", {
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             spotAssetType,
//             positionType,
//             orderType,
//             amount,
//             limitPrice,
//           }),
//         })
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Network response was not ok");
//             }
//             return response.json();
//           })
//           .then((data) => {
//             fetchUserData();
//             alert(`${positionType} ${amount} ${spotAssetType}`);
//           })
//           .catch((error) => {
//             console.error("Error placing bet:", error);
//             alert("Error placing bet. Please try again.");
//           });
//       }

//       // Close position function
//       function closeFuturesPosition(position, reason) {
//         fetch("/api/closeFuturesPosition", {
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             positionId: position.id, // Assuming each position has a unique ID
//             reason,
//           }),
//         })
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Network response was not ok");
//             }
//             return response.json();
//           })
//           .then((data) => {
//             // Update futuresUSDTBalance after closing position
//             futuresUSDTBalance += data.profitLoss; // Assuming the server returns the profit/loss
//             // updateBalanceDisplay();
//             fetchUserData(); // Refresh user data
//             switch (reason) {
//               case 0:
//                 alert("Position closed manully by user.");
//                 break;
//               case 1:
//                 alert("Position closed automatically by TP.");
//                 break;
//               case 2:
//                 alert("Position closed automatically by SL.");
//                 break;
//               case 3:
//                 alert(
//                   "Position closed because you lost all money because of liquidation."
//                 );
//                 break;
//             }
//           })
//           .catch((error) => {
//             console.error("Error closing position:", error);
//             alert("Error closing position. Please try again.");
//           });
//       }

//       function closeSpotPosition(position) {
//         if(!position.orderLimit)return;
//         fetch("/api/closeSpotPosition", {
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             positionId: position.id, // Assuming each position has a unique ID
//           }),
//         })
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Network response was not ok");
//             }
//             return response.json();
//           })
//           .then((data) => {
//             // updateBalanceDisplay();
//             fetchUserData(); // Refresh user data
//             alert("Limit order of spot trading was closed by user");
//           })
//           .catch((error) => {
//             console.error("Error closing position:", error);
//             alert("Error closing position. Please try again.");
//           });
//       }

//       function saveTPSL(position) {
//         let tp = parseFloat(document.getElementById("tp" + position.id).value);
//         if (isNaN(tp) || tp == 0) {
//           if (position.positionType == "Long") {
//             tp = 100000000;
//           } else {
//             tp = 0;
//           }
//         }
//         let sl = parseFloat(document.getElementById("sl" + position.id).value);
//         if (isNaN(sl) || sl == 0) {
//           if (position.positionType == "Long") {
//             sl = 0;
//           } else {
//             sl = 100000000;
//           }
//         }
//         fetch("/api/saveTPSL", {
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             positionId: position.id,
//             tp,
//             sl,
//           }),
//         })
//           .then((response) => response.json())
//           .catch((error) => console.error("Error saving TP & SL:", error));
//       }

//       function transferUSDT(){
//         const transferUSDTType = document.getElementById('transfer-USDT-type').value;
//         const transferUSDTAmount = parseFloat(document.getElementById('transfer-USDT-amount').value);
//         if(transferUSDTType=='fromFutures'){
//           if(transferUSDTAmount > futuresUSDTBalance){
//             alert("Insufficient USDT in the Futures account");
//             return;
//           }else{
//             futuresUSDTBalance -= transferUSDTAmount;
//             spotUSDTBalance += transferUSDTAmount;
//           }
//         }
//         if(transferUSDTType=='fromSpot'){
//           if(transferUSDTAmount > spotUSDTBalance){
//             alert("Insufficient USDT in the Spot account");
//             return;
//           }else{
//             console.log(futuresUSDTBalance, spotUSDTBalance);
//             futuresUSDTBalance += transferUSDTAmount;
//             spotUSDTBalance -= transferUSDTAmount;
//             console.log(futuresUSDTBalance, spotUSDTBalance);
//           }
//         }
//         document.getElementById("transfer-modal-futures-USDT").textContent = futuresUSDTBalance;
//         document.getElementById("transfer-modal-spot-USDT").textContent = spotUSDTBalance;
//         fetch("/api/updateBalance", {
//           method: "POST",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             futuresUSDTBalance,
//             spotUSDTBalance,
//           }),
//         })
//           .then((response) => {
//             alert("Operation completed successfully!");
//             response.json();
//           })
//           .catch((error) => console.error());
//       }
//       // Get the <span> element that closes the modal
//       var span1 = document.getElementsByClassName("close")[0];
//       var span2 = document.getElementsByClassName("close")[1];
//       var partialClosingModal = document.getElementById("partial-closing-modal");
//       var transferUSDTModal = document.getElementById("transfer-USDT-modal");
//       // When the user clicks on <span> (x), close the modal
//       span1.onclick = function () {
//         partialClosingModal.style.display = "none";
//       };

//       span2.onclick = function () {
//         transferUSDTModal.style.display = "none";
//       };

//       // When the user clicks anywhere outside of the modal, close it
//       window.onclick = function (event) {
//         if (event.target == partialClosingModal) {
//           partialClosingModal.style.display = "none";
//         }
//         if (event.target == transferUSDTModal) {
//           transferUSDTModal.style.display = "none";
//         }
//       };

//       function partialClose() {
//         let percent = parseFloat(
//           document.getElementById("particalClosingPercent").value
//         );
//         if (percent == 0) {
//           alert("Please select a valid percent");
//         }
//         if (percent == 100) {
//           closeFuturesPosition(closingPosition, 0);
//         } else {
//           fetch("/api/partialClosePosition", {
//             method: "POST",
//             headers: {
//               Authorization: "Bearer " + localStorage.getItem("token"),
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               positionId: closingPosition.id, // Assuming each position has a unique ID
//               percent,
//             }),
//           })
//             .then((response) => {
//               if (!response.ok) {
//                 throw new Error("Network response was not ok");
//               }
//               return response.json();
//             })
//             .then((data) => {
//               // Update futuresUSDTBalance after closing position
//               futuresUSDTBalance += data.profitLoss; // Assuming the server returns the profit/loss
//               // updateBalanceDisplay();
//               fetchUserData(); // Refresh user data
//               alert("Position partially closed by " + percent + "%.");
//               futuresPositionsCount = 0;
//               futuresClosedPositionsCount = 0;
//             })
//             .catch((error) => {
//               console.error("Error closing position:", error);
//               alert("Error closing position. Please try again.");
//             });
//         }
//         partialClosingModal.style.display = "none";
//       }

//       function selectTrading(evt, divId) {
//         var i, tabcontent, tablinks;
//         tabcontent = document.getElementsByClassName("tabcontent");
//         for (i = 0; i < tabcontent.length; i++) {
//           tabcontent[i].style.display = "none";
//         }
//         tablinks = document.getElementsByClassName("tablinks");
//         for (i = 0; i < tablinks.length; i++) {
//           tablinks[i].className = tablinks[i].className.replace(" active", "");
//         }
//         document.getElementById(divId).style.display = "block";
//         evt.currentTarget.className += " active";
//       }

//       // Get the element with id="defaultOpen" and click on it
//       document.getElementById("defaultOpen").click();

//       // Long and short buttons functionality
//       document.getElementById("long-button").onclick = () =>
//         futuresTrading("long", "market");
//       document.getElementById("short-button").onclick = () =>
//         futuresTrading("short", "market");

//       document.getElementById("limit-long-button").onclick = () =>
//         futuresTrading("long", "limit");
//       document.getElementById("limit-short-button").onclick = () =>
//         futuresTrading("short", "limit");

//       document.getElementById("market-buy-button").onclick = () =>
//         spotTrading("buy", "market");
//       document.getElementById("market-sell-button").onclick = () =>
//         spotTrading("sell", "market");

//       document.getElementById("limit-buy-button").onclick = () =>
//         spotTrading("buy", "limit");
//       document.getElementById("limit-sell-button").onclick = () =>
//         spotTrading("sell", "limit");

//       document.getElementById("futures-asset-type").onchange = () => {
//         futuresAssetType = document.getElementById("futures-asset-type").value;
//       };
//       document.getElementById("spot-asset-type").onchange = () => {
//         spotAssetType = document.getElementById("spot-asset-type").value;
//         document.getElementById('spot-market-unit').textContent = "(" + document.getElementById("spot-asset-type").value + ")"
//         document.getElementById('spot-limit-unit').textContent = "(" + document.getElementById("spot-asset-type").value + ")"
//       };
//       // Fetch data initially and then every second
//       fetchUserData();
//       intervalId = setInterval(fetchUserData, 500);
//       document.getElementById("spot-asset-type").onchange()

//       // Clear the interval when the user leaves the page
//       window.addEventListener("beforeunload", () => clearInterval(intervalId));
//     </script>
//   </body>
// </html>
