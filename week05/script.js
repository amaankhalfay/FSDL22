// Carbon Footprint Calculator
document.getElementById('carbonForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Input values
    const miles = parseFloat(document.getElementById('miles').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const plastic = parseFloat(document.getElementById('plastic').value);
  
    // Error handling
    if (isNaN(miles) || isNaN(electricity) || isNaN(plastic)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }
  
    // Carbon footprint calculation (simplified)
    const carbonFootprint = (miles * 0.4) + (electricity * 0.6) + (plastic * 2);
    document.getElementById('result').innerText = `Your estimated carbon footprint is ${carbonFootprint.toFixed(2)} kg CO2 per month.`;
  });
  
  // Sustainability Tips
  const tips = [
    "Use reusable bags instead of plastic bags.",
    "Switch to LED bulbs to save energy.",
    "Reduce water usage by fixing leaks.",
    "Recycle paper, glass, and metal.",
    "Compost organic waste to reduce landfill use."
  ];
  
  const tipList = document.getElementById('tipList');
  tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipList.appendChild(li);
  });
  
  // Goal Tracker
  document.getElementById('goalForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const goal = document.getElementById('goal').value;
    const targetDate = document.getElementById('targetDate').value;
  
    // Date validation
    const today = new Date();
    const selectedDate = new Date(targetDate);
    if (selectedDate <= today) {
      alert('Please select a future date for your goal.');
      return;
    }
  
    // Add goal to list
    const goalList = document.getElementById('goalList');
    const li = document.createElement('li');
    li.textContent = `${goal} (Target Date: ${targetDate})`;
    goalList.appendChild(li);
  
    // Clear form
    document.getElementById('goalForm').reset();
  });