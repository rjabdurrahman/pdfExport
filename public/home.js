// Notifer
function notify(msg, t) {
  if (t == 1) {
    $('#notification')
      .html(
        `<div class="contain">
          <span class="material-icons">
              check_circle
          </span>
          <h6>${msg}</h6>
      </div>`
      )
      .removeClass('error')
      .addClass('success')
      .fadeIn(200)
      .delay(1000)
      .fadeOut(200)
  }

  if (t == 2) {
    $('#notification')
      .html(
        `<div class="contain">
          <span class="material-icons">
            highlight_off
          </span>
          <h6>${msg}</h6>
      </div>`
      )
      .removeClass('success')
      .addClass('error')
      .fadeIn(200)
      .delay(1000)
      .fadeOut(200)
  }
}

function registerEmail(e) {
  e.preventDefault();
  let email = e.target['email'];
  let lang = e.target['language'];
  console.log(email.value, lang.value);
  axios.post('api/user/subscribe', { email: email.value, language: lang.value })
    .then(res => {
      if (!res.data.err) {
        notify('Thank you for your registration', 1)
      }
      if (res.data.err && res.data.err.code == 11000) {
        notify('You are already registered', 2)
      }
    })
    .catch(err => {
      console.log(err)
      notify('Something Went Wrong', 2)
    })
}