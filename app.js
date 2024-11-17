let balance = 15000; 

const bellaCiaoAudio = document.getElementById('bella-ciao');

function enterDigit(digit) {
  const pinInput = document.getElementById('pin-input');
  if (pinInput.value.length < 4) {
    pinInput.value += digit;
  }
}

function clearInput() {
  document.getElementById('pin-input').value = '';
}

function submitPin() {
  const pinInput = document.getElementById('pin-input').value;
  const message = document.getElementById('message');

  if (pinInput === '1234') {
    message.innerText = 'Access Granted! Select an operation below.';
    document.getElementById('pin-input').style.display = 'none';
  } else {
    message.innerText = 'Incorrect PIN! Try again.';
    clearInput();
  }
}

function showBalance() {
  bellaCiaoAudio.play();
  document.getElementById('message').innerText = `Your balance is $${balance}.`;
  setTimeout(() => {
    document.getElementById('message').innerText = 'Thank you for using The Heist ATM!';
    bellaCiaoAudio.pause();  
    bellaCiaoAudio.currentTime = 0; 
    promptNextAction(); 
  }, 6000); 
}

function withdrawCash() {
  const amount = prompt('Enter amount to withdraw:');
  
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    document.getElementById('message').innerText = `Withdrawal successful! New balance: $${balance}.`;
    bellaCiaoAudio.play();
    setTimeout(() => {
      document.getElementById('message').innerText = 'Thank you for using The Heist ATM!';
      bellaCiaoAudio.pause();  
      bellaCiaoAudio.currentTime = 0; 
      promptNextAction(); 
    }, 6000); 
  } else {
    document.getElementById('message').innerText = 'Invalid amount or insufficient balance.';
    promptNextAction(); 
  }
}

function depositCash() {
  const amount = prompt('Enter amount to deposit:');
  
  if (amount > 0) {
    balance += Number(amount);
    document.getElementById('message').innerText = `Deposit successful! New balance: $${balance}.`;
    bellaCiaoAudio.play();
    setTimeout(() => {
      document.getElementById('message').innerText = 'Thank you for using The Heist ATM!';
      bellaCiaoAudio.pause();  
      bellaCiaoAudio.currentTime = 0; 
      promptNextAction();
    }, 6000); 
  } else {
    document.getElementById('message').innerText = 'Invalid amount.';
    promptNextAction(); 
  }
}


function promptNextAction() {
  const action = prompt('What would you like to do next?\n1. Withdraw\n2. Deposit\n3. Exit');

  if (action === '1') {
    withdrawCash();
  } else if (action === '2') {
    depositCash();
  } else if (action === '3') {
    document.getElementById('message').innerText = 'Thank you for using The Heist ATM! Goodbye!';
    bellaCiaoAudio.pause();  
    bellaCiaoAudio.currentTime = 0; 
  } else {
    document.getElementById('message').innerText = 'Invalid choice. Please select a valid option.';
    promptNextAction(); 
  }
}
