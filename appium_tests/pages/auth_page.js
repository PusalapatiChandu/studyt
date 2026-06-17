class AuthPage {
    // Selectors for Flutter/Android elements via Appium
    get emailField() { return $('//android.widget.EditText[@content-desc="Email"]') }
    get passwordField() { return $('//android.widget.EditText[@content-desc="Password"]') }
    get loginBtn() { return $('//android.view.View[@content-desc="LOGIN"]') }

    async login(email, password) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new AuthPage();
