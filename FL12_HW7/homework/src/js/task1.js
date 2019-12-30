const MIN_EMAIL_LENGTH = 5;
const MIN_PASS_LENGTH = 6;
let email = prompt('Please, enter your email:', null);


if (!email || email === 'null') {
    alert('Canceled');
} else if (email.length < MIN_EMAIL_LENGTH) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Please, enter your password:', null);
    if (!password || password === 'null') {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' || email === 'admin@gmail.com' &&
        password === 'AdminPass') {
        let confirmPassword = confirm('Do you want to change your password?');
        if (!confirmPassword) {
            alert('You have failed the change');
        } else {
            let oldPassword = prompt('Please, enter your old password:', null);

            if (!oldPassword || oldPassword === 'null') {
                alert('Canceled');
            } else if (oldPassword !== password) {
                alert('Wrong password');
            } else {
                let newPassword = prompt('Please, enter your new password:', null);
                if (!newPassword || newPassword === 'null') {
                    alert('Canceled');
                } else if (newPassword.length > MIN_PASS_LENGTH) {
                    let changePassword = prompt('Please, repeat your password:', null);
                    if (changePassword !== newPassword) {
                        alert('You wrote the wrong password');
                    } else {
                        alert('You have successfully changed you password.');
                    }
                } else {
                    alert('It\'s too short password. Sorry');
                }
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}