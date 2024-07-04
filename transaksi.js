function showForm() {
    const transactionType = document.getElementById('transaction-type').value;
    const hotelForm = document.getElementById('hotel-form');
    const flightForm = document.getElementById('flight-form');
    const tourForm = document.getElementById('tour-form');

    hotelForm.classList.add('hidden');
    flightForm.classList.add('hidden');
    tourForm.classList.add('hidden');

    if (transactionType === 'hotel') {
        hotelForm.classList.remove('hidden');
    } else if (transactionType === 'flight') {
        flightForm.classList.remove('hidden');
    } else if (transactionType === 'tour') {
        tourForm.classList.remove('hidden');
    }
}
