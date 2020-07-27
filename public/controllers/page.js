function checkDone () {
  $(
    '.a01, .a02, .a03, .a04, .a05, .a06, .a07, .a08, .a09, .a10, .a11, .a12, .a13, .a14, .a15, .a16, .a17, .a19, .a20'
  ).each(function (i) {
    let isDone = false
    let pageNo
    if (i == 16) {
      pageNo = 17
    } else {
      pageNo = this.id.replace('page', '')
    }
    let element = $(`.np${pageNo}`)
    $(
      `#page${pageNo} input:text, #page${pageNo} input[type=number], #page${pageNo} input:checkbox, #page${pageNo} input:radio`
    ).each(function (j) {
      if (
        ((this.type == 'text' || this.type == 'number') && this.value) ||
        (this.type == 'checkbox' && this.checked) ||
        (this.type == 'radio' && this.checked)
      ) {
        isDone = true
        element.addClass('done')
      }
    })
    if (!isDone) element.removeClass('done')
  })
  if ($('.w3-dropdown-content').has('a.done').length > 0)
    $('.w3-dropdown-content')
      .has('a.done')
      .prevAll()
      .children('a')
      .addClass('done')
  else
    $('.w3-dropdown-content')
      .prevAll()
      .children('a')
      .removeClass('done')
}

function radioCheck (info) {
  if (_.get(info, 'etat_civil.statut'))
    $(`#page3 :radio[value=${info.etat_civil.statut}]`).attr('checked', true)
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
  if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.frequence.par_mois_semaine'
    ) == 'semaine'
  )
    $(`#page7 :radio[id="7d779"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.frequence.par_mois_semaine'
    ) == 'mois'
  )
    $(`#page7 :radio[id="7d780"]`).attr('checked', true)
  if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.par_mois_semaine'
    ) == 'semaine'
  )
    $(`#page7 :radio[id="7d781"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.par_mois_semaine'
    ) == 'mois'
  )
    $(`#page7 :radio[id="7d782"]`).attr('checked', true)
  if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.frequence.par_mois_semaine'
    ) == 'semaine'
  )
    $(`#page7 :radio[id="7d783"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.frequence.par_mois_semaine'
    ) == 'mois'
  )
    $(`#page7 :radio[id="7d784"]`).attr('checked', true)
  if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.frequence.par_mois_semaine'
    ) == 'semaine'
  )
    $(`#page7 :radio[id="7d785"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.frequence.par_mois_semaine'
    ) == 'mois'
  )
    $(`#page7 :radio[id="7d786"]`).attr('checked', true)
}

function pageInit () {
  $('input:text.date').datepicker({ dateFormat: 'dd/mm/yy' })
  $('.load-overlay').show()
  $('.num:not([readonly]').focus(function () {
    $(this).val($(this).val().replace(/[.]/g, ''));
    $(this).inputFilter(function (value) {
      return /^[-]{0,1}\d*,*\d{0,2}$/.test(value)
    })
  })
  $('.numo').inputFilter(function (value) {
    return /^\d*$/.test(value)
  })
  $('.num:not([readonly]').blur(function (value) {
    let val = $(this).val()
    console.log(val)
    if (/^\d+$/.test(val)) $(this).val(frNumber(val) + ',00')
    else if (/^\d+[,]$/.test(val)) $(this).val(frNumber(val) + '00')
    else if (/^\d+[,]\d{1}$/.test(val)) $(this).val(frNumber(val) + '0')
    else if (/^\d+[,]\d{2}$/.test(val)) $(this).val(frNumber(val));
  })
  // Radio Button Unchecking
  $('.form-input label[for]').click(function (e) {
    e.preventDefault()
    if ($(this).prev()[0].checked) {
      $(this).prev()[0].checked = false
    } else {
      $(this).prev()[0].checked = true
    }
    isSaveAlive(true)
  })
  pageCalculation()
}

function afterDataLoaded (info) {
  console.log(info)
  radioCheck(info)
  setTimeout(checkDone, 500)
}
