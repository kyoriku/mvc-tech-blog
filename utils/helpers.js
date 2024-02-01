// Export an object containing three functions related to date and time formatting
module.exports = {
  // Function to format a date in a specific way
  formatDate: (date) => {
    // Formatting options
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    // Use the toLocaleDateString method to format the date according to the specified options
    return date.toLocaleDateString('en-US', options);
  },

  // Function to format the time of a given date
  formatTime: (date) => {
    // Use the toLocaleTimeString method to format the time with numeric hour and minute
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  },

  // Function to format both date and time together
  formatDateTime: (date) => {
    // Formatting options
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    // Use the toLocaleDateString method to format both date and time according to the specified options
    return date.toLocaleDateString('en-US', options);
  },
};
