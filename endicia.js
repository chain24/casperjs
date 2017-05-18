var casper = require('casper').create({ 
    //verbose: true,
   //logLevel: 'debug',
    onError: function(self,m){  
        console.log("FATAL:" + m);  
        self.exit();  
    } 
});
if(casper.cli.has("user") == false) casper.exit(); 
var user = casper.cli.get("user");
if(casper.cli.has(0) == false) t=0;
else t = casper.cli.get(0);
casper.options.waitTimeout = 100000;
casper.start('https://www.endicia.com/login',function(){
        this.waitForSelector('form[action="./"]');
});
var myDate = new Date();
var step1 = '---Start to process at '+myDate.toLocaleTimeString()+'---\n';
var step2 = 'Login the account of '+user+'\n';
casper.then(function(){
        if(user == 'xxx'){
            var pass = 'xxxxx!';
        }else{
            var pass = 'xxxx';
        }
        this.fill('form#form1',{
            'main_1$txtAccountNumber': user,
            'main_1$txtPassword': pass
        },true);    
});
var url = "https://www.endicia.com/Account/NewReports/Report/?Report=AccountTransactions";
var len;
var fs = require('fs');
var y = myDate.getFullYear().toString();
var m = myDate.getMonth()+1;
var d = myDate.getDate().toString();
var stamp = myDate.getTime();
if(m < 10) m = '0'+m;
if(d < 10) d = '0'+d;
var today = y+m+d;
var filename = '/home/georgez/test4endicia/csv/'+today+'/rdD'+stamp+'.csv';
var path = '/home/georgez/test4endicia/Logs/casper/'+today+'.log';
fs.write(filename, "Account, ID, Date/Time, Mail Class, Tracking Number, Total Postage Amt, Refund Status, Weight, Destination Name, Destination Address, Destination City,  Destination State, Destination Zip\n", "a");
casper.then(function(){
        this.thenOpen(url,function(){
            this.page.switchToChildFrame(0);
        });
});

casper.then(function(){   
        this.evaluate(function() {
            document.getElementById("rbMonthYear_3").click();
        });
});
casper.then(function(){
        this.repeat(t,function(){
            this.click('#lastDayLinkID'); 
        });     
});
casper.then(function(){ 
        var index = 4;
        this.evaluate(function(index) {
            var sel = document.querySelector('form[name="rdForm"] select[name="islReportType"]');
            sel.selectedIndex = index;
            sel.onchange();     
            },index);   
});

casper.wait(2000,function(){    
        this.evaluate(function(){   
            document.getElementById("submitBtnID").click();
        }); 
});

casper.waitFor(function check(){
        return this.exists('#dtTransactions tbody tr');
        },function then(){
        var rows = casper.evaluate(function() {
            return document.querySelectorAll('#dtTransactions tbody tr');
        });
         len = rows.length-1;
         },null,10000);
casper.then(function(){
        for(var i = 1; i <= len; i++){
        var id = casper.getElementInfo('#lblId_Row'+i).text;
        var shipDate = casper.getElementInfo('#lblDate_Row'+i).text;
        var trackingNumber = casper.getElementInfo("#lblTrackingNumber_Row"+i+" a").text;
	if(trackingNumber == '') continue;
	var mail1 = casper.getElementInfo('#lblscMailClass_Row'+i).text;
	var mail2 = casper.getElementInfo('#lblPieceShape_Row'+i).text;
	var mail3 = casper.getElementInfo('#lblOptionalServices_Row'+i).text;
	var mailClass = mail1+mail2+';'+mail3;
        var toName = casper.getElementInfo('#lblToName_Row'+i).text;
        var toAddress = casper.getElementInfo('#lblToAddress_Row'+i).text;
        var toCityState = casper.getElementInfo('#lblToCityState_Row'+i).text;
        var toZip = casper.getElementInfo('#lblDestinationZip_Row'+i).text;
        var amount = casper.getElementInfo('#lblAmount_Row'+i).text;
        var weight = casper.getElementInfo('#lblWeightTi_Row'+i).text;
        var refStat = casper.getElementInfo('#lblRefStat_Row'+i).text;
        fs.write(filename, user+", "+id+", "+shipDate+", "+mailClass+", "+trackingNumber+", "+amount+", "+refStat+", "+weight+", "+toName+", "+toAddress+", "+toCityState+", "+toZip+"\n","a");
        }    
        var step3 = 'A total of '+len+' data\n';
        var step4 = 'Finished download csv file at '+myDate.toLocaleTimeString()+'\n';
        fs.write(path,step1+step2+step3+step4,'a');
        casper.exit();
});
casper.run();
