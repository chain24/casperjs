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
    this.echo('login...');
});

casper.wait(2000,function(){
    this.evaluate(function(){
        this.click('input[class="submit"]');
    });
});

casper.then(function() {
    this.click('a[class="btn btn-comment"]');
    this.echo('start to exam...');
});
casper.then(function(){
    this.evaluate(function(){
        //第一题错
        document.getElementById("answer_18110915304381304003657_2").click();
    });
});
casper.run();