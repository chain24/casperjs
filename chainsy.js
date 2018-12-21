var casper = require('casper').create();
casper.start('https://ksc.dodoedu.com', function() {
    this.fill('form[class="chiActiveInfo"]', {
        'userName': 'XXXX',
        'userPwd': '654321'
    }, false);
});

casper.then(function() {
    this.click('input[class="btn btn-blue btn-block btn-lg js-sub"]');

    this.echo('clicked...');
});

casper.then(function() {
    this.echo(this.getTitle());
});
casper.run();