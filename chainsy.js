var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    onError: function(self,m){
        console.log("FATAL:" + m);
        self.exit();
    }
});
casper = require('casper').create();
casper.start('https://ksc.dodoedu.com', function() {
    this.fill('form[class="chiActiveInfo"]', {
        'userName': 'L421127200908040119',
        'userPwd': '654321'
    }, false);
});

casper.then(function() {
    this.click('input[class="btn btn-blue btn-block btn-lg js-sub"]');
    this.echo('clicked...');
});

casper.wait(2000,function(){
    this.evaluate(function(){
        document.getElementById("submitBtnID").click();
    });
});

casper.then(function() {
    this.click('input[class="submit"]');
});
casper.then(function() {
    this.click('a[class="btn btn-comment"]');
    this.echo('start to exam...');
});
casper.run();