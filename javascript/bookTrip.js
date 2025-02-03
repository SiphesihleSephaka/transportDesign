document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;
  const time = document.getElementById("time").value;

  alert(`Booking confirmed from ${pickup} to ${dropoff} at ${time}.`);
});
