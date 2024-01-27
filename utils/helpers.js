module.exports = {
  formatDate: (date) => {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  },
  formatTime: (date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  },
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
};
