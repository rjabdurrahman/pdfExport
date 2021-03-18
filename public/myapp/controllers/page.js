function checkDone () {
  $(
    '.a01, .a02, .a03, .a04, .a06, .a07, .a08, .a09, .a10, .a11, .a12, .a13, .a17, .a19, .a20'
  ).each(function (i) {
    let isDone = false
    let pageNo
    if (i == 12) {
      pageNo = 17
    } else {
      pageNo = this.id.replace('page', '')
    }
    let element = $(`.np${pageNo}`)
    $(
      `#page${pageNo} input:text, #page${pageNo} input[type=number], #page${pageNo} input:checkbox, #page${pageNo} input:radio, #page${pageNo} textarea`
    ).each(function (j) {
      if (
        ((this.type == 'text' ||
          this.type == 'number' ||
          this.type == 'textarea') &&
          this.value) ||
        (this.type == 'checkbox' && this.checked) ||
        (this.type == 'radio' && this.checked)
      ) {
        isDone = true
        element.addClass('done')
      }
    })
    if (!isDone) element.removeClass('done')
  })
  subMenuDone()
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
      .removeClass('done');
}

function subMenuDoneChecker (selector, checkPoint) {
  let isDone = false
  $(
    `${selector} input:text, ${selector} input[type=number], ${selector} input:checkbox, ${selector} input:radio, ${selector} textarea`
  ).each(function (j) {
    if (
      ((this.type == 'text' ||
        this.type == 'number' ||
        this.type == 'textarea') &&
        this.value) ||
      (this.type == 'checkbox' && this.checked) ||
      (this.type == 'radio' && this.checked)
    ) {
      isDone = true
      $(checkPoint).addClass('done')
    }
  })
  if (!isDone) $(checkPoint).removeClass('done')
}

function subMenuDone () {
  subMenuDoneChecker('.page5_p1', '.nv5_1')
  subMenuDoneChecker('.page5_p2', '.nv5_2')
  subMenuDoneChecker('.page14_p1', '.nv14_1')
  subMenuDoneChecker('.page14_p2', '.nv14_2')
  subMenuDoneChecker('.page15_p1', '.nv15_1')
  subMenuDoneChecker('.page15_p2', '.nv15_2')
  subMenuDoneChecker('.page15_p3', '.nv15_3')
  subMenuDoneChecker('.page16_p1', '.nv16_1')
  subMenuDoneChecker('.page16_p2', '.nv16_2')
  subMenuDoneChecker('.page16_p3', '.nv16_3')
  subMenuDoneChecker('.page16_p4', '.nv16_4')
}

function radioCheck (info) {
  if (_.get(info, 'etat_civil.statut'))
    $(`#page3 :radio[value=${info.etat_civil.statut}]`).attr('checked', true)
  if (_.get(info, 'options.partenaires.sl_document'))
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
  if (
    _.get(
      info,
      'depenses_speciales.regimes_complementaires.rev_non_exo.contribuable.affiliation.is_oui_non'
    ) == 'courrier'
  )
    $(`#page16 :radio[id="16d1601"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'depenses_speciales.regimes_complementaires.rev_non_exo.contribuable.affiliation.is_oui_non'
    ) == 'myguichet'
  )
    $(`#page16 :radio[id="16d1602"]`).attr('checked', true)
  if (
    _.get(
      info,
      'depenses_speciales.regimes_complementaires.rev_non_exo.conjoint_partenaire.affiliation.is_oui_non'
    ) == 'courrier'
  )
    $(`#page16 :radio[id="16d1603"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'depenses_speciales.regimes_complementaires.rev_non_exo.conjoint_partenaire.affiliation.is_oui_non'
    ) == 'myguichet'
  )
    $(`#page16 :radio[id="16d1604"]`).attr('checked', true)
  if (
    _.get(
      info,
      'charges_extraordinaires_17.abattements_forfaitaires1.contribuable.is_en_annexe_deja_presente'
    ) == 'annexe'
  )
    $(`#page17 :radio[id="17d1714"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'charges_extraordinaires_17.abattements_forfaitaires1.contribuable.is_en_annexe_deja_presente'
    ) == 'deja_presente'
  )
    $(`#page17 :radio[id="17d1715"]`).attr('checked', true)
  if (
    _.get(
      info,
      'charges_extraordinaires_17.abattements_forfaitaires1.conjoint_partenaire.is_en_annexe_deja_presente'
    ) == 'annexe'
  )
    $(`#page17 :radio[id="17d1717"]`).attr('checked', true)
  else if (
    _.get(
      info,
      'charges_extraordinaires_17.abattements_forfaitaires1.conjoint_partenaire.is_en_annexe_deja_presente'
    ) == 'deja_presente'
  )
    $(`#page17 :radio[id="17d1718"]`).attr('checked', true)
}

function pageInit () {
  $('input:text.date').datepicker({ dateFormat: 'dd/mm/yy' })
  $('.load-overlay').show()
  $('.num:not([readonly]').focus(function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[.]/g, '')
    )
    $(this).inputFilter(function (value) {
      return /^[-]{0,1}\d*[,.]{0,1}\d{0,2}$/.test(value)
    })
  })
  $('.numo').inputFilter(function (value) {
    return /^\d*$/.test(value)
  })
  $('.num:not([readonly]').blur(function (e) {
    e.target.value = e.target.value.replace('.', ',')
    let val = $(this).val()
    if (/^[-]{0,1}\d+$/.test(val)) $(this).val(frNumber(val) + ',00')
    else if (/^[-]{0,1}\d+[,]$/.test(val)) $(this).val(frNumber(val) + ',00')
    else if (/^[-]{0,1}\d+[,]\d{1}$/.test(val)) $(this).val(frNumber(val) + '0')
    else if (/^[-]{0,1}\d+[,][0]{2}$/.test(val))
      $(this).val(frNumber(val) + ',00')
    else if (/^[-]{0,1}\d+[,]\d[0]$/.test(val)) $(this).val(frNumber(val) + '0')
    else if (/^[-]{0,1}\d+[,][0-9]{2}$/.test(val)) $(this).val(frNumber(val))
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
  radioCheck(info)
  setTimeout(checkDone, 500)
}
