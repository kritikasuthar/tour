const calculateAvgRating = (reviews) => {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return { totalRating: 0, avgRating: "" };
  }

  const totalRating = reviews.reduce((acc, item) => {
    if (typeof item.rating === "number" && !isNaN(item.rating)) {
      return acc + item.rating;
    }
    return acc;
  }, 0);

  const avgRating =
    totalRating === 0 ? "" : (totalRating / reviews.length).toFixed(1); // Adjust decimal places as needed

  return {
    totalRating,
    avgRating,
  };
};

export default calculateAvgRating;
