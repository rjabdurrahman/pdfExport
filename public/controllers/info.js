function checkDone() {
    $('.a01, .a02, .a03, .a04').each(function (i) {
        let pageNo = this.id.replace('page', '');
        let isDone = false;
        let element = document.querySelector('left-nav:first-child').children[pageNo - 1].firstElementChild;
        $(`#${this.id} input:text, #${this.id} input:checkbox`).each(function (j) {
            if ((this.type == 'text' && this.value) || (this.type == 'checkbox' && this.checked)) {
                isDone = true
                $(element).addClass('done')
            }
        })
        if (!isDone) $(element).removeClass('done');
    })
}
app.controller('InfoCtrl', function ($scope, $http) {
    let clientId = location.href.split('id=')[1];
    $scope.client = {};
    $http({
        method: 'GET',
        url: `/api/client/${clientId}`
    }).then(function (res) {
        $scope.client = res.data;
        console.log(res.data)
        $scope.$applyAsync();
        setTimeout(checkDone, 500);
    }).catch(function (err) {
        console.log(err);
    })
});