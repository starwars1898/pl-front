const ResponseStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return 'success'; // Indicate success
    } else if (response.status >= 400 && response.status < 600) {
        return 'error'; // Indicate error
    } else {
        return 'unknown'; // Indicate unknown status
    }
};