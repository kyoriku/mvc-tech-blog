/**
* Helper functions for formatting dates and times in a consistent way *
*/
module.exports = {
  // Formats a date into a long-form string with weekday, month, day and year
  formatDate: (date) => {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  },

  // Formats a time into hours and minutes
  formatTime: (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric'
    });
  },

  // Formats both date and time together into a long-form string
  formatDateTime: (date) => {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  },

  // Simple equality comparison helper
  eq: (a, b) => a === b,
};