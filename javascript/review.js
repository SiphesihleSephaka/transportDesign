document.getElementById("review-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = document.getElementById("rating").value;
  const feedback = document.getElementById("feedback").value;

  alert(`Thank you for your review!\nRating: ${rating}\nFeedback: ${feedback}`);
});
