let nam = document.getElementById('name'),
login = document.getElementById('login'),
pass = document.getElementById('pass'),
sub = document.getElementById('submit'),
users = {};

const requirePass = ['f', 'i', 'b'];

nam.setAttribute('disabled', true);
login.setAttribute('disabled', true);
pass.setAttribute('disabled', true);

function User(nam, login, pass) {
    this.nam = nam;
    this.login = login;
    this.pass = pass;
}

function createID(users) {
    return Object.keys(users).length;
}

sub.addEventListener('click', () => {
    const nameUser = nam.value;
    const loginUser = login.value;
    const passUser = pass.value;
    if (!requirePass.every(item => passUser.includes(item))) {
        pass.style.borderColor = 'red';
        document.getElementById('messagePass').innerHTML = 'Пароль должен содержать символы: f i b';
        return;
    }
    const user = new User(nameUser, loginUser, passUser);
    const userId = 'User' + createID(users);
    users[userId] = user;
    console.log(users);
    pass.style.borderColor = '';
    document.getElementById('messagePass').innerHTML = '';
    alert(`${nameUser}, you were registered`)
})

document.addEventListener('keydown', (e) => {
    if(e.code == 'KeyQ' && e.ctrlKey) {
        e.preventDefault();
        nam.removeAttribute('disabled');
        login.removeAttribute('disabled');
        pass.removeAttribute('disabled');
    }
})