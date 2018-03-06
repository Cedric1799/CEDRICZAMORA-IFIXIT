$(document).ready(function(){       
    $('.ui.form5').form({
        inline: true,
        on: 'blur',
        fields: {   
            username:  {
                identifier: 'username',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a username'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a password'
                }, {
                    type: 'minLength[6]',
                    prompt: 'Your password must be at least {ruleValue} characters'
                }]
            },
        }
    });
});