function checkDone () {
  $(
    '.a01, .a02, .a03, .a04, .a05, .a06, .a07, .a08, .a09, .a10, .a11, .a12, .a13, .a14, .a15, .a16, .a19, .a17, .a20'
  ).each(function (i) {
    let isDone = false
    let pageNo
    if (i == 17) {
      pageNo = 17
    } else {
      pageNo = this.id.replace('page', '')
    }
    let element = $(`.np${pageNo}`).children(1)
    $(
      `#page${pageNo} input:text, #page${pageNo} input[type=number], #page${pageNo} input:checkbox`
    ).each(function (j) {
      if (
        ((this.type == 'text' || this.type == 'number') && this.value) ||
        (this.type == 'checkbox' && this.checked)
      ) {
        isDone = true
        element.addClass('done')
      }
    })
    if (!isDone) element.removeClass('done')
  })
}

function radioCheck (info) {
  if (_.get(info, 'etat_civil.status'))
    $(`#page3 :radio[value=${info.etat_civil.status}]`).attr('checked', true)
  if (info.options.partenaires.sl_document)
    $(`#page4 :radio[value=${info.options.partenaires.sl_document}]`).attr(
      'checked',
      true
    )
  if (_.get(info, 'options.imposition_individuelle.sl_envoi'))
    $(
      `#page4 :radio[value=${info.options.imposition_individuelle.sl_envoi}]`
    ).attr('checked', true)
  if (_.get(info, 'options.imposition_individuelle.sl_imposition'))
    $(
      `#page4 :radio[value=${info.options.imposition_individuelle.sl_imposition}]`
    ).attr('checked', true)
  if (_.get(info, 'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.frequence.par_mois_semaine'))
    $(
      `#page7 :radio[value=${info.occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.frequence.par_mois_semaine}]`
    ).attr('checked', true)
  if (_.get(info, 'occup_salariee.plusieurs_lieux.lieu2.contribuable.frequence.par_mois_semaine'))
    $(
      `#page7 :radio[value=${info.occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.is_par_semaine}]`
    ).attr('checked', true)
  if (_.get(info, 'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.is_par_semaine'))
    $(
      `#page7 :radio[value=${info.occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.is_par_semaine}]`
    ).attr('checked', true)
  if (_.get(info, 'occup_salariee.plusieurs_lieux.lieu1.contribuable.frequence.is_par_semaine'))
    $(
      `#page7 :radio[value=${info.occup_salariee.plusieurs_lieux.lieu1.contribuable.frequence.is_par_semaine}]`
    ).attr('checked', true)
}

app.controller('InfoCtrl', function ($scope, $http) {
  $('input:text.date').datepicker({ dateFormat: 'dd/mm/yy' })
  $('.load-overlay').show()
  $('.num').inputFilter(function (value) {
    return /^\d*,*\d*$/.test(value)
  })
  $('.numo').inputFilter(function (value) {
    return /^\d*$/.test(value)
  })
  $('.num').blur(function (value) {
    let val = $(this).val()
    if (/^\d+$/.test(val)) $(this).val(val + ',00')
    else if (/^\d+,$/.test(val)) $(this).val(val + '00')
    else if (/^\d+,\d{1}$/.test(val)) $(this).val(val + '0')
  })
  let clientId = location.href.split('id=')[1]
  $scope.client = {}
  $http({
    method: 'GET',
    url: `/api/client/${clientId}`
  })
    .then(function (res) {
      $('.load-overlay').hide()
      $scope.client = res.data
      console.log(res.data)
      radioCheck(res.data)
      $scope.$applyAsync()
      setTimeout(checkDone, 500)
    })
    .catch(function (err) {
      console.log(err)
    })
})
