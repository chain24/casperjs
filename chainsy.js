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
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第二题错
        document.getElementById("answer_18110915351749904268029_2").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第三题错
        document.getElementById("answer_18110915332438504130206_2").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第四题判断男女孩
        document.getElementById("answer_18111211293623100566848_3").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第五题判断危险游戏
        document.getElementById("answer_18110915511214404002865_3").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第六题游乐场注意
        document.getElementById("answer_18111211361084901099368_3").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第七题游泳前注意错误
        document.getElementById("answer_18110915460077401764811_3").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第八题沉迷网络
        document.getElementById("answer_18110915550532606564881_2").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第九题大海航行靠舵手
        document.getElementById("answer_18111211150259500041585_4").click();
        this.click('a[class="btn-next"]');;
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第十题道路隔离设施
        document.getElementById("answer_18110915395245700680070_1").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第十一题面对恶狗
        document.getElementById("answer_18111211263989900000107_2").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第十二题随身听
        document.getElementById("answer_18111215271070700265363_2").click();
        document.getElementById("answer_18111215271070700265363_4").click();
        this.click('a[class="btn-next"]');
    });
});
casper.then(function(){
    this.evaluate(function(){
        //第十三题乘坐电梯错误
        document.getElementById("answer_18110915571500008266243_1").click();
        document.getElementById("answer_18110915571500008266243_2").click();
        document.getElementById("answer_18110915571500008266243_3").click();
        document.getElementById("answer_18110915571500008266243_4").click();
    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十四题综合题，和狗玩耍，被狗咬
        document.getElementById("answer_18120416262430100006897_2").click();
        document.getElementById("answer_18120416262431600379945_1").click();
        document.getElementById("answer_18120416262431600379945_2").click();
        document.getElementById("answer_18120416262431600379945_3").click();
    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十五题综合题 戴着发卡上体育课
        document.getElementById("answer_18110917065763534490194_2").click();
        document.getElementById("answer_18110917065763734572616_3").click();
    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十六题综合题 游泳
        document.getElementById("answer_18110916444919430973556_2").click();
        document.getElementById("answer_18110916444919531005043_1").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十七题综合题 判断伸手窗外，不要围观热闹
        document.getElementById("answer_18120516571566005299306_2").click();
        document.getElementById("answer_18120516571566405362686_2").click();
        document.getElementById("answer_18120516571570405835863_1").click();
        document.getElementById("answer_18120516571570405835863_2").click();
        document.getElementById("answer_18120516571570405835863_4").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十八 小孩清理伤口判断
        document.getElementById("answer_18110916263707916880732_2").click();
        document.getElementById("answer_18110916263708116917654_2").click();
        document.getElementById("answer_18110916263708116917654_3").click();
        document.getElementById("answer_18110916263708417419078_1").click();
        document.getElementById("answer_18110916263708417419078_3").click();
        document.getElementById("answer_18110916263708417419078_4").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十九题综合题 酱油处理伤口判断
        document.getElementById("answer_18110917041593433704222_2").click();
        document.getElementById("answer_18110917041593533858857_1").click();
        document.getElementById("answer_18110917041593533858857_2").click();
        document.getElementById("answer_18110917041593533858857_3").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第二十题综合题 暴雨预警
        document.getElementById("answer_18110916410490528816773_1").click();
        document.getElementById("answer_18110916410490729263456_1").click();
        document.getElementById("answer_18110916410490729263456_2").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第二十一题综合题调查
        document.getElementById("answer_18111311551778420695312_1").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第二十二题综合题
        document.getElementById("answer_18111313392446021258843_1").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第二十三题综合题
        document.getElementById("answer_18111313403027622033933_1").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第二十四题综合题
        document.getElementById("answer_18111313462530723602803_1").click();

    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十六题综合题 游泳
        document.getElementById("answer_18111313473855124468982_1").click();
    });
    this.click('a[class="btn-next"]');
});
casper.then(function(){
    this.evaluate(function(){
        //第十六题综合题 游泳
        document.getElementById("postExamAnswer").click();
    });
    this.click('a[class="btn-next"]');
    this.echo('完成');
});

casper.run();