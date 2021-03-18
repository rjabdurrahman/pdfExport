function transferClient({ body }, res) {
    let clientId = body.client._id;
    let selectedYear = body.selectedYear;
    let targetYear = body.targetYear;
    console.log(clientId);
    console.log(selectedYear, targetYear);
    res.send('done');
}

module.exports = transferClient;