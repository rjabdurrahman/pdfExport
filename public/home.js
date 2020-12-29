function registerEmail(e) {
    e.preventDefault();
    let email = e.target['email'];
    let lang = e.target['language'];
    console.log(email.value, lang.value);
    axios.post('api/user/subscribe', {email: email.value, language: lang.value})
    .then(res => {
        if(!res.data.err) alert(res.data.success);
    })
    .catch(err => console.log(err))
}